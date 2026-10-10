import fs from 'node:fs';
import path from 'node:path';

const srcRoot = 'Photos';
const destRoot = path.join('public', 'assets', 'photos');

if (!fs.existsSync(destRoot)) fs.mkdirSync(destRoot, { recursive: true });

const folders = ['baby', 'Maternity', 'Model', 'marriage'];

folders.forEach((folder) => {
  const srcDir = path.join(srcRoot, folder);
  const destDir = path.join(destRoot, folder.toLowerCase());
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  if (fs.existsSync(srcDir)) {
    const files = fs.readdirSync(srcDir);
    files.forEach((file, idx) => {
      const ext = path.extname(file);
      const destName = `${folder.toLowerCase()}-${idx + 1}${ext}`;
      const srcPath = path.join(srcDir, file);
      const destPath = path.join(destDir, destName);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied [${folder}]: ${file} -> ${destName}`);
    });
  }
});

// Also add secondary photos from imagix so baby section has at least 5 photos as requested
const imagixDir = path.join('public', 'assets', 'imagix');
if (fs.existsSync(imagixDir)) {
  const babyDest = path.join(destRoot, 'baby');
  fs.copyFileSync(path.join(imagixDir, 'baby-cake-smash.webp'), path.join(babyDest, 'baby-4.webp'));
  fs.copyFileSync(path.join(imagixDir, 'baby-newborn-shoot.webp'), path.join(babyDest, 'baby-5.webp'));
  console.log('Added secondary photos baby-4.webp and baby-5.webp (total 5 photos for baby section)');

  const matDest = path.join(destRoot, 'maternity');
  fs.copyFileSync(path.join(imagixDir, 'baby-maternity-love.webp'), path.join(matDest, 'maternity-3.webp'));
  fs.copyFileSync(path.join(imagixDir, 'baby-shower-maternity.webp'), path.join(matDest, 'maternity-4.webp'));
  console.log('Added secondary photos for maternity section');

  const marDest = path.join(destRoot, 'marriage');
  fs.copyFileSync(path.join(imagixDir, 'photo1.jpg'), path.join(marDest, 'marriage-4.jpg'));
  fs.copyFileSync(path.join(imagixDir, 'photo4.jpg'), path.join(marDest, 'marriage-5.jpg'));
  fs.copyFileSync(path.join(imagixDir, 'model-timeless-bride.webp'), path.join(marDest, 'marriage-6.webp'));
  console.log('Added secondary photos for marriage section');

  const modDest = path.join(destRoot, 'model');
  fs.copyFileSync(path.join(imagixDir, 'model-designer-shana.webp'), path.join(modDest, 'model-5.webp'));
  fs.copyFileSync(path.join(imagixDir, 'model-elegance-portrait.webp'), path.join(modDest, 'model-6.webp'));
  console.log('Added secondary photos for model section');
}
