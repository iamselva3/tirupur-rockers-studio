import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

export default function GalleryMasonry({ onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('All');

  // Dedicated categories matching user folders: Baby, Marriage, Maternity, Model
  const categories = ['All', 'Baby', 'Marriage', 'Maternity', 'Model'];

  const filteredItems =
    activeFilter === 'All'
      ? STUDIO_CONFIG.gallery
      : STUDIO_CONFIG.gallery.filter((item) => item.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative w-full py-24 sm:py-32 bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden px-4 sm:px-8 md:px-12 select-none transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)] border-b border-[var(--hairline)] pb-4 mb-16">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B07A5A]" />
            <span className="text-[var(--text-primary)] font-semibold">Artisanal Archive</span>
          </div>
          <span className="text-[#C5A059]">07 / 15</span>
          <span>Selected Works • Curated Portfolios</span>
        </div>

        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
          <div className="max-w-xl space-y-3">
            <span className="text-xs tracking-[0.22em] uppercase text-[#B07A5A] font-semibold">
              The Fine-Art Collection
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[var(--text-primary)] leading-tight">
              A curated tapestry of rituals, angelic laughter, and new beginnings.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.2 rounded-full text-xs tracking-wider uppercase font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === category
                    ? 'bg-[#1E1D1B] dark:bg-[#FAF6F0] text-[#FAF6F0] dark:text-[#1E1D1B] shadow-md'
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--hairline)]'
                }`}
              >
                {category === 'Baby' ? 'Baby & Kids (5+)' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Bento / Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, filteredItems)}
              data-cursor="view"
              className={`group relative rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--hairline)] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${
                item.aspect === 'vertical'
                  ? 'aspect-[3/4] sm:row-span-2'
                  : item.aspect === 'horizontal'
                  ? 'aspect-[16/10] sm:col-span-2'
                  : 'aspect-square'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-3 py-1 rounded-full glass-panel-dark text-[10px] tracking-widest uppercase font-semibold text-[#C5A059] border border-white/10">
                  {item.category}
                </span>
              </div>

              {/* View Icon */}
              <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-[var(--text-primary)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                <Eye className="w-4 h-4 text-[#B07A5A]" />
              </div>

              {/* Bottom Caption on Hover (Pure English) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-1 text-[#FAF6F0]">
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-light leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#C5A059] italic font-light">
                  {item.subtitle} • {item.year}
                </p>
                <div className="pt-2 flex items-center space-x-1.5 text-[10px] tracking-widest uppercase text-[#FAF6F0]/80">
                  <span>Click to view high-resolution</span>
                  <ArrowUpRight className="w-3 h-3 text-[#B07A5A]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
