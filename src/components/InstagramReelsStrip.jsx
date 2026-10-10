import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { STUDIO_CONFIG } from '../data/studioConfig';

export default function InstagramReelsStrip() {
  const reels = STUDIO_CONFIG.socialReels;

  return (
    <section className="relative w-full py-16 bg-[#1E1D1B] text-[#FAF6F0] overflow-hidden select-none border-t border-white/10">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-8 flex justify-between items-center text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#A39E96]">
        <div className="flex items-center space-x-2">
          <InstagramIcon className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Daily Moments on the Gram</span>
        </div>
        <a
          href={STUDIO_CONFIG.contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 text-[#C5A059] hover:underline"
        >
          <span>{STUDIO_CONFIG.contact.instagramHandle}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Auto Scrolling Marquee Track */}
      <div className="w-full overflow-hidden flex items-center">
        <div className="animate-marquee-left flex whitespace-nowrap items-center space-x-6">
          {[...reels, ...reels].map((reel, idx) => (
            <a
              key={idx}
              href={STUDIO_CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-52 sm:w-64 aspect-[9/16] rounded-xl overflow-hidden flex-shrink-0 group cursor-pointer border border-white/10 shadow-lg"
            >
              <img
                src={reel.image}
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] text-[#C5A059] tracking-wider font-mono">
                  {reel.tag}
                </span>
                <p className="text-xs font-serif-luxury font-light truncate">
                  {reel.title}
                </p>
              </div>

              {/* Instagram Floating Icon */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <InstagramIcon className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
