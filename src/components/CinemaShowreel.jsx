import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Film, Volume2 } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

gsap.registerPlugin(ScrollTrigger);

export default function CinemaShowreel({ onOpenShowreel }) {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const playBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'center center',
            scrub: 1,
          },
        }
      );

      gsap.to(playBtnRef.current, {
        scale: 1.08,
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="showreel"
      ref={sectionRef}
      className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-between items-center bg-[#141312] text-[#FAF6F0] overflow-hidden select-none pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 border-t border-white/10"
    >
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/photos/marriage/marriage-2.jpg"
          alt="Cinematic Wedding Film Backdrop"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-[#141312]/80" />
      </div>

      {/* Top Section Counter: Clean flex item with proper navbar clearance */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex justify-between items-center text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#A39E96] border-b border-white/10 pb-4 mb-8">
        <div className="flex items-center space-x-2">
          <Film className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="text-[#FAF6F0] font-semibold">Motion Picture Atelier</span>
        </div>
        <span className="text-[#C5A059]">06 / 15</span>
        <span className="hidden sm:inline">24fps Heirloom Cinema • Tiruppur</span>
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 px-4 my-auto py-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#C5A059] text-[10px] tracking-[0.25em] uppercase font-semibold">
          <Volume2 className="w-3 h-3" />
          <span>Bespoke 4K Cinema Master</span>
        </div>

        <div ref={headlineRef} className="space-y-3 sm:space-y-4">
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#FAF6F0] leading-[1.08] tracking-tight">
            Every heartbeat framed in 24 frames of gold.
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#C5A059] font-light max-w-2xl mx-auto">
            “The sacred thali, the quiet tears of farewell, and the warmth of a hundred blessings.”
          </p>
        </div>

        {/* Play Button */}
        <div className="pt-2 sm:pt-4 flex flex-col items-center justify-center space-y-3">
          <button
            ref={playBtnRef}
            onClick={onOpenShowreel}
            data-cursor="play"
            className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#FAF6F0] text-[#1E1D1B] flex items-center justify-center shadow-2xl hover:bg-[#C5A059] hover:text-[#1E1D1B] transition-all duration-300 transform hover:scale-110 cursor-pointer group border-4 border-white/20"
            aria-label="Play Cinematic Showreel Video"
          >
            <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 group-hover:scale-110 transition-transform" />
          </button>
          <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#A39E96] group-hover:text-[#FAF6F0]">
            Watch Studio Showreel (3 Min)
          </span>
        </div>
      </div>

      {/* Technical Cinema Specifications Badge */}
      <div className="relative z-10 w-full max-w-4xl mx-auto border-t border-white/10 pt-4 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-[10px] sm:text-xs tracking-widest uppercase text-[#8A857E] font-mono">
        <span>4K Cinema Sensor</span>
        <span>•</span>
        <span>Anamorphic Primes</span>
        <span>•</span>
        <span>Master Color Grade</span>
        <span>•</span>
        <span>Licensed Narrative Score</span>
      </div>
    </section>
  );
}
