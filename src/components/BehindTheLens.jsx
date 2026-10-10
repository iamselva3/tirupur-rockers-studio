import React from 'react';
import { STUDIO_CONFIG } from '../data/studioConfig';

export default function BehindTheLens() {
  return (
    <section
      id="team"
      className="relative w-full py-24 sm:py-32 bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden px-4 sm:px-8 md:px-12 select-none transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)] border-b border-[var(--hairline)] pb-4 mb-16">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B07A5A]" />
            <span className="text-[var(--text-primary)] font-semibold">The Visualists</span>
          </div>
          <span className="text-[#C5A059]">11 / 15</span>
          <span>Artists & Directors • Behind The Lens</span>
        </div>

        {/* Section Title */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-xs tracking-[0.22em] uppercase text-[#B07A5A] font-semibold">
            Guardians of Your Legacy
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[var(--text-primary)] leading-tight">
            The quiet eyes behind the prime glass.
          </h2>
        </div>

        {/* Editorial Team Portraits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {STUDIO_CONFIG.team.map((member, idx) => (
            <div
              key={member.name}
              className="group flex flex-col space-y-5"
            >
              {/* Portrait Container */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--hairline)] shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 text-white text-[10px] tracking-widest uppercase font-mono">
                  {member.specialty}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif-luxury text-2xl font-light text-[var(--text-primary)] group-hover:text-[#B07A5A] transition-colors">
                    {member.name}
                  </h3>
                  <span className="font-mono text-xs text-[#C5A059]">0{idx + 1}</span>
                </div>
                <p className="text-xs tracking-wider uppercase text-[#B07A5A] font-medium">
                  {member.role}
                </p>
                <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed pt-1">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
