import React from 'react';
import { CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

export default function InvestmentPackages() {
  return (
    <section
      id="investment"
      className="relative w-full py-24 sm:py-32 bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden px-4 sm:px-8 md:px-12 select-none transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)] border-b border-[var(--hairline)] pb-4 mb-16">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B07A5A]" />
            <span className="text-[var(--text-primary)] font-semibold">Investment</span>
          </div>
          <span className="text-[#C5A059]">09 / 15</span>
          <span>Bespoke Packages • Heirloom Collections</span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs tracking-[0.22em] uppercase text-[#B07A5A] font-semibold">
            Bespoke Wedding Collections
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-[var(--text-primary)] leading-[1.1]">
            An investment in photographs your great-grandchildren will treasure.
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light max-w-xl">
            Because every family celebration is unique in rhythm, scale, and tradition, we provide
            tailored quotations following an initial date and venue consultation.
          </p>
        </div>

        {/* Luxury Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {STUDIO_CONFIG.packages.map((pkg) => {
            const isFeatured = pkg.recommended;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${
                  isFeatured
                    ? 'bg-[#1E1D1B] dark:bg-[#181716] text-[#FAF6F0] shadow-2xl border-2 border-[#C5A059]'
                    : 'bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--hairline)] hover:shadow-xl'
                }`}
              >
                {/* Highlight Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C5A059] text-[#1E1D1B] text-[10px] tracking-[0.2em] uppercase font-bold flex items-center space-x-1.5 shadow-md">
                    <Sparkles className="w-3 h-3" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                {/* Card Header */}
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="font-mono text-xs tracking-widest text-[#B07A5A]">
                      {pkg.tier}
                    </span>
                    <span className="text-[10px] tracking-widest uppercase font-mono text-[var(--text-muted)]">
                      ATELIER
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-light leading-snug">
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-xs mt-2 font-light leading-relaxed ${
                        isFeatured ? 'text-[#A39E96]' : 'text-[var(--text-secondary)]'
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Label */}
                  <div className="py-4 border-y border-current/10">
                    <span className="text-[10px] tracking-widest uppercase text-[var(--text-muted)] block">
                      Estimated Investment
                    </span>
                    <span className="font-serif-luxury text-xl font-medium tracking-wide">
                      {pkg.investment}
                    </span>
                  </div>

                  {/* Included Deliverables */}
                  <div className="space-y-3 pt-2">
                    <span
                      className={`text-[10px] tracking-[0.2em] uppercase font-semibold ${
                        isFeatured ? 'text-[#C5A059]' : 'text-[#B07A5A]'
                      }`}
                    >
                      Included In This Collection:
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.includes.map((inc, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-xs font-light">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                              isFeatured ? 'text-[#C5A059]' : 'text-[#B07A5A]'
                            }`}
                          />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-8">
                  <a
                    href={`https://wa.me/${STUDIO_CONFIG.contact.whatsapp}?text=Hello%20Thirupur%20Rockers,%20I%20would%20like%20to%20request%20a%20quote%20for%20${encodeURIComponent(pkg.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                      isFeatured
                        ? 'bg-[#C5A059] text-[#1E1D1B] hover:bg-[#E0C78E]'
                        : 'bg-[#1E1D1B] dark:bg-[#FAF6F0] text-[#FAF6F0] dark:text-[#1E1D1B] hover:bg-[#B07A5A]'
                    }`}
                  >
                    <span>Request Availability</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
