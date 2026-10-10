import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

// Cloudflare R2 Credentials for Tirupur Rockers Studio
const R2_CONFIG = {
  accountId: 'ebb60884050ceb5a3565e132a7ef9394',
  accessKeyId: '911fbef0629a384efdb68d1270c075ed',
  secretAccessKey: 'e9889183b2271939330898a6934ef4e2b7fab429c459dbf60d65d7724c7447ea',
  bucketName: 'thiruppur-studio',
};

function hmac(key, data) {
  return crypto.createHmac('sha256', key).update(data).digest();
}

function sha256(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

function signR2Request(method, path) {
  const host = `${R2_CONFIG.accountId}.r2.cloudflarestorage.com`;
  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, '');
  const dateStamp = amzDate.slice(0, 8);
  const region = 'auto';
  const service = 's3';

  const emptyHash = sha256('');
  const headers = {
    host,
    'x-amz-date': amzDate,
    'x-amz-content-sha256': emptyHash,
  };

  const signedHeaderKeys = Object.keys(headers).sort();
  const canonicalHeaders = signedHeaderKeys.map((k) => `${k}:${headers[k].trim()}\n`).join('');
  const signedHeaders = signedHeaderKeys.join(';');

  const canonicalRequest = `${method}\n${path}\n\n${canonicalHeaders}\n${signedHeaders}\n${emptyHash}`;

  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = `AWS4-HMAC-SHA256\n${amzDate}\n${credentialScope}\n${sha256(canonicalRequest)}`;

  const kDate = hmac(`AWS4${R2_CONFIG.secretAccessKey}`, dateStamp);
  const kRegion = hmac(kDate, region);
  const kService = hmac(kRegion, service);
  const kSigning = hmac(kService, 'aws4_request');
  const signature = crypto.createHmac('sha256', kSigning).update(stringToSign).digest('hex');

  const authHeader = `AWS4-HMAC-SHA256 Credential=${R2_CONFIG.accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  return {
    url: `https://${host}${path}`,
    headers: {
      Host: host,
      'x-amz-date': amzDate,
      'x-amz-content-sha256': emptyHash,
      Authorization: authHeader,
    },
  };
}

// In-memory cache for fast dev streaming
const r2ImageCache = new Map();

function r2MediaPlugin() {
  return {
    name: 'r2-media-proxy',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        console.log('[Vite Middleware]', req.method, req.url);
        const parsedUrl = new URL(req.url, 'http://localhost');
        const pathname = parsedUrl.pathname;

        // 1. Direct handler for /assets/ folder (e.g. logo with spaces)
        if (pathname.startsWith('/assets/')) {
          const relativePath = decodeURIComponent(pathname.replace('/assets/', ''));
          const localPath = path.join(process.cwd(), 'public', 'assets', relativePath);
          if (fs.existsSync(localPath) && fs.statSync(localPath).isFile()) {
            const ext = path.extname(localPath).toLowerCase();
            const contentType =
              ext === '.jpg' || ext === '.jpeg'
                ? 'image/jpeg'
                : ext === '.png'
                ? 'image/png'
                : ext === '.svg'
                ? 'image/svg+xml'
                : ext === '.webp'
                ? 'image/webp'
                : 'application/octet-stream';
            res.setHeader('Content-Type', contentType);
            res.setHeader('Cache-Control', 'public, max-age=86400');
            fs.createReadStream(localPath).pipe(res);
            return;
          }
        }

        // 2. Direct handler for /media/:id from Cloudflare R2
        if (pathname.startsWith('/media/')) {
          const match = pathname.replace('/media/', '');
          if (!match) return next();

          // Check if showreel video
          if (match === 'showreel' || match === 'cinema/showreel.mp4') {
            try {
              const r2Path = `/${R2_CONFIG.bucketName}/cinema/showreel.mp4`;
              const { url: fetchUrl, headers } = signR2Request('GET', r2Path);
              const r2Response = await fetch(fetchUrl, { headers });
              if (r2Response.ok) {
                const buf = Buffer.from(await r2Response.arrayBuffer());
                res.setHeader('Content-Type', 'video/mp4');
                res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
                res.setHeader('Accept-Ranges', 'bytes');
                res.setHeader('X-Storage-Source', 'Cloudflare-R2-Video');
                res.end(buf);
                return;
              }
            } catch (err) {
              console.error('Error fetching showreel:', err);
            }
          }

          const isThumb = parsedUrl.searchParams.get('size') === 'thumb';
          let r2Key;
          if (match.startsWith('imagix/') || match.startsWith('photos/') || match.startsWith('assets/') || match.includes('.')) {
            r2Key = match;
          } else if (match === 'hero-couple' || match === 'hero/hero-couple.png') {
            r2Key = 'hero/hero-couple.png';
          } else {
            r2Key = isThumb ? `imagix/${match}-thumb.webp` : `imagix/${match}.jpg`;
          }

          const cacheKey = `${R2_CONFIG.bucketName}:${r2Key}`;
          if (r2ImageCache.has(cacheKey)) {
            const cached = r2ImageCache.get(cacheKey);
            res.setHeader('Content-Type', cached.contentType);
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
            res.setHeader('X-Storage-Source', 'Cloudflare-R2-Cache');
            res.end(cached.buffer);
            return;
          }

          try {
            const r2Path = `/${R2_CONFIG.bucketName}/${encodeURIComponent(r2Key).replace(/%2F/g, '/')}`;
            const { url: fetchUrl, headers } = signR2Request('GET', r2Path);
            const r2Response = await fetch(fetchUrl, { headers });

            if (!r2Response.ok) {
              if (isThumb) {
                const baseKey = r2Key.replace('-thumb.webp', '.webp');
                const basePath = `/${R2_CONFIG.bucketName}/${encodeURIComponent(baseKey).replace(/%2F/g, '/')}`;
                const baseReq = signR2Request('GET', basePath);
                const baseRes = await fetch(baseReq.url, { headers: baseReq.headers });
                if (baseRes.ok) {
                  const buf = Buffer.from(await baseRes.arrayBuffer());
                  const cType = baseRes.headers.get('content-type') || 'image/webp';
                  r2ImageCache.set(cacheKey, { buffer: buf, contentType: cType });
                  res.setHeader('Content-Type', cType);
                  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
                  res.setHeader('X-Storage-Source', 'Cloudflare-R2-Fallback');
                  res.end(buf);
                  return;
                }
              }

              res.statusCode = r2Response.status;
              res.end(`R2 Object Not Found: ${r2Key}`);
              return;
            }

            const buf = Buffer.from(await r2Response.arrayBuffer());
            const contentType = r2Response.headers.get('content-type') || 'image/webp';
            r2ImageCache.set(cacheKey, { buffer: buf, contentType });

            res.setHeader('Content-Type', contentType);
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
            res.setHeader('X-Storage-Source', 'Cloudflare-R2-Live');
            res.end(buf);
            return;
          } catch (err) {
            console.error('Error streaming from R2:', err);
            res.statusCode = 500;
            res.end('R2 Fetch Error');
            return;
          }
        }

        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [r2MediaPlugin(), react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5175,
    strictPort: true,
  },
});
