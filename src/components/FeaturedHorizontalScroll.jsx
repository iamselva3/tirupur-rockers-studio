import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedHorizontalScroll() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.2,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="relative w-full bg-[#1A1918] dark:bg-[#0E0D0C] text-[#FAF6F0] overflow-hidden select-none min-h-screen lg:h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 border-t border-white/10"
    >
      {/* Fixed Header in Pinned View with generous top padding to clear the fixed navbar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-6 sm:mb-8 flex justify-between items-center text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#A39E96] border-b border-white/10 pb-4">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
          <span className="text-[#FAF6F0] font-semibold">Featured Stories</span>
        </div>
        <span className="text-[#C5A059]">05 / 15</span>
        <span className="hidden sm:inline">Horizontal Scroll Gallery • Curated Highlights</span>
      </div>

      {/* Horizontal Sliding Track */}
      <div
        ref={trackRef}
        data-cursor="drag"
        className="my-auto flex space-x-6 sm:space-x-8 lg:space-x-10 px-4 sm:px-8 md:px-12 overflow-x-auto lg:overflow-visible no-scrollbar py-2"
      >
        {STUDIO_CONFIG.featuredStories.map((story, idx) => (
          <div
            key={story.id}
            className="flex-shrink-0 w-[85vw] sm:w-[55vw] lg:w-[40vw] xl:w-[34vw] rounded-2xl overflow-hidden bg-[#242220] border border-white/10 flex flex-col group transition-transform duration-500 hover:border-[#C5A059]/60 shadow-xl"
          >
            {/* Image Canvas with constrained height so entire card fits comfortably */}
            <div className="relative w-full aspect-[16/10] max-h-[32vh] sm:max-h-[36vh] overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242220] via-transparent to-black/20" />

              <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center z-10 text-[10px] uppercase tracking-widest">
                <span className="px-3 py-0.5 rounded-full glass-panel-dark text-[#C5A059] border border-white/10 font-medium text-[9px] sm:text-[10px]">
                  {story.category}
                </span>
                <span className="font-mono text-[#FAF6F0]/80">{story.year}</span>
              </div>
            </div>

            {/* Editorial Caption Panel */}
            <div className="p-5 sm:p-6 lg:p-7 flex flex-col justify-between flex-grow space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 text-xs text-[#B07A5A]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="tracking-wider">{story.location}</span>
                </div>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-light text-[#FAF6F0] group-hover:text-[#C5A059] transition-colors leading-snug">
                  {story.title}
                </h3>
                <p className="text-xs text-[#A39E96] font-light">
                  {story.subtitle}
                </p>
              </div>

              <p className="font-serif-luxury italic text-xs sm:text-sm text-[#FAF6F0]/90 leading-snug border-l-2 border-[#B07A5A] pl-3 py-0.5 line-clamp-2">
                {story.quote}
              </p>

              <div className="pt-2 flex justify-between items-center border-t border-white/10 text-xs text-[#A39E96]">
                <span className="font-mono text-[10px] tracking-widest text-[#C5A059]">
                  STORY 0{idx + 1}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-1.5 text-[#FAF6F0] hover:text-[#C5A059] transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-widest font-semibold">Inquire Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Counter / Drag Prompt Indicator */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex justify-between items-center text-[10px] tracking-widest uppercase text-[#8A857E] pt-3">
        <span>Drag or scroll to explore 5 stories</span>
        <span className="font-mono text-[#C5A059]">01 — 05</span>
      </div>
    </section>
  );
}
