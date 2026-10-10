import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

export default function Hero({ isPreloaderDone }) {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const wordmarkRef = useRef(null);
  const subjectRef = useRef(null);
  const detailsRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!isPreloaderDone) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        wordmarkRef.current,
        { opacity: 0, y: 60, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.6 },
        0.2
      );

      tl.fromTo(
        subjectRef.current,
        { opacity: 0, scale: 0.92, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.8, ease: 'power2.out' },
        0.4
      );

      const lines = headlineRef.current?.querySelectorAll('.headline-line');
      if (lines) {
        tl.fromTo(
          lines,
          { y: '100%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 1.2, stagger: 0.18 },
          0.6
        );
      }

      tl.fromTo(
        detailsRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.1 },
        0.9
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isPreloaderDone]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-screen lg:min-h-[100dvh] flex flex-col justify-between items-center bg-[var(--bg-primary)] pt-24 sm:pt-28 pb-8 sm:pb-10 px-4 sm:px-8 select-none transition-colors duration-400 overflow-hidden"
    >
      {/* Ambient Glow Leaks */}
      <div
        className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-[#B07A5A]/12 blur-[100px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * -25}px, ${mousePos.y * -25}px, 0)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/6 w-[450px] h-[450px] rounded-full bg-[#C5A059]/10 blur-[120px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 35}px, ${mousePos.y * 35}px, 0)`,
        }}
      />

      {/* Giant Gradient-Fade Background Wordmark */}
      <div
        ref={wordmarkRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0"
        style={{
          transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`,
        }}
      >
        <div className="w-full text-center px-2">
          <h1 className="font-serif-luxury font-bold text-[14vw] sm:text-[15vw] md:text-[16vw] leading-[0.8] tracking-tight uppercase select-none opacity-80">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#1E1D1B]/25 dark:from-[#FAF6F0]/25 via-[#1E1D1B]/10 dark:via-[#FAF6F0]/10 to-transparent">
              THIRUPUR
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#B07A5A]/35 via-[#1E1D1B]/08 dark:via-[#FAF6F0]/08 to-transparent -mt-2 sm:-mt-6">
              ROCKERS
            </span>
          </h1>
        </div>
      </div>

      {/* Top Editorial Label Bar */}
      <div className="relative z-10 w-full max-w-7xl flex justify-between items-center text-[10px] sm:text-[11px] tracking-[0.24em] text-[var(--text-muted)] uppercase font-medium mb-4 sm:mb-6">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B07A5A] animate-ping" />
          <span className="text-[var(--text-primary)] font-semibold">Tiruppur • South India</span>
        </div>
        <div className="hidden sm:block">
          <span className="text-[#C5A059]">01 / 15</span> — Editorial Prologue
        </div>
        <div className="text-right">
          <span>Wedding & Family Atelier</span>
        </div>
      </div>

      {/* Centerpiece: Overlapping Subject & Poetic Headline */}
      <div className="relative z-10 w-full max-w-7xl my-auto py-4 sm:py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Headline & CTAs */}
        <div className="lg:col-span-6 text-left order-2 lg:order-1 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFE4DC]/70 dark:bg-white/10 border border-[#B07A5A]/20 text-[#B07A5A] text-[10px] tracking-[0.22em] uppercase font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Sacred Heirloom Cinema</span>
          </div>

          {/* Mask Reveal Headline */}
          <div ref={headlineRef} className="space-y-1 overflow-hidden">
            <div className="overflow-hidden">
              <h2 className="headline-line font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-light tracking-tight text-[var(--text-primary)] leading-[1.08]">
                Moments pass today.
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="headline-line font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl italic font-normal tracking-tight text-[#B07A5A] leading-[1.08]">
                Memories stay forever.
              </h2>
            </div>
          </div>

          {/* Tamil Quote (Allowed specifically in hero per user instruction) */}
          <div className="space-y-1.5 max-w-md">
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
              {STUDIO_CONFIG.heroTamilTagline}
            </p>
            <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
              Documenting raw laughter, sacred temple vows, and tear-filled glances with quiet, unscripted grace.
            </p>
          </div>

          {/* Magnetic CTA Group */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#portfolio"
              data-cursor="view"
              className="btn-magnetic px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#1E1D1B] dark:bg-[#FAF6F0] text-[#FAF6F0] dark:text-[#1E1D1B] text-xs tracking-[0.2em] uppercase font-semibold group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>View Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <span className="btn-magnetic-fill" />
            </a>

            <a
              href="#contact"
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-current/20 text-[var(--text-primary)] text-xs tracking-[0.2em] uppercase font-semibold hover:border-[#B07A5A] hover:text-[#B07A5A] transition-colors"
            >
              Check Availability
            </a>
          </div>
        </div>

        {/* Right Column: High-Resolution Wedding Couple Portrait (Face 100% visible, zero overlay obstructions) */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-end order-1 lg:order-2">
          <div
            ref={subjectRef}
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[4/5] max-h-[56vh] sm:max-h-[60vh] lg:max-h-[64vh] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 ease-out border border-[var(--hairline)] bg-[#1E1D1B]"
            style={{
              transform: `translate3d(${mousePos.x * -16}px, ${mousePos.y * -16}px, 0)`,
            }}
          >
            <img
              src="/assets/photos/marriage/marriage-3.jpg"
              alt="South Indian Wedding Couple — Thirupur Rockers Studio"
              className="w-full h-full object-cover object-[center_46%] transition-transform duration-700 ease-out hover:scale-102"
              loading="eager"
            />

            {/* Subtle atmospheric vignette at borders only (never covering faces) */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />

            {/* Floating Top Badge (in the empty top-right corner where there are only fairy lights) */}
            <div className="absolute top-3.5 right-3.5 z-20 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[10px] tracking-[0.2em] font-mono text-white/90 uppercase flex items-center space-x-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B07A5A]" />
              <span>2026 Archive</span>
            </div>
          </div>

          {/* Clean Editorial Caption Strip Below Image — 0% face overlap */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mt-3.5 flex items-center justify-between px-1.5 text-xs">
            <div className="flex items-center space-x-2.5">
              <img
                src={STUDIO_CONFIG.logos.transparent}
                alt="Emblem"
                className="w-6 h-6 object-contain logo-glow"
              />
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#B07A5A] font-semibold">
                  The Heirloom Collection
                </p>
                <p className="text-[11px] font-serif-luxury font-medium text-[var(--text-primary)]">
                  Ceremonial Light & Sacred Vows
                </p>
              </div>
            </div>
            <span className="text-[10px] tracking-widest font-mono text-[var(--text-muted)] uppercase">
              Tiruppur Atelier
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Generously spaced below the centerpiece */}
      <div
        ref={detailsRef}
        className="relative z-10 w-full max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-[var(--text-muted)] border-t border-[var(--hairline)] pt-4 mt-6 sm:mt-8"
      >
        <div className="flex items-center space-x-6 text-[11px] tracking-wider uppercase">
          <span><strong className="text-[var(--text-primary)]">750+</strong> Weddings</span>
          <span>•</span>
          <span><strong className="text-[var(--text-primary)]">12</strong> Years</span>
          <span>•</span>
          <span><strong className="text-[var(--text-primary)]">Tiruppur</strong> & South India</span>
        </div>

        <a
          href="#marquee"
          className="flex items-center space-x-2 text-[10px] tracking-[0.22em] uppercase font-semibold text-[var(--text-primary)] hover:text-[#B07A5A] transition-colors cursor-pointer"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#B07A5A]" />
        </a>
      </div>
    </section>
  );
}
