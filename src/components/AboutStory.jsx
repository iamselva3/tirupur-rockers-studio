import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STUDIO_CONFIG } from '../data/studioConfig';

gsap.registerPlugin(ScrollTrigger);

export default function AboutStory() {
  const containerRef = useRef(null);
  const parallaxImg1Ref = useRef(null);
  const parallaxImg2Ref = useRef(null);
  const counterContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(parallaxImg1Ref.current, {
        y: -35,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap.to(parallaxImg2Ref.current, {
        y: 35,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      const counters = counterContainerRef.current?.querySelectorAll('.counter-val');
      if (counters) {
        counters.forEach((el) => {
          const target = parseInt(el.getAttribute('data-target') || '0', 10);
          gsap.fromTo(
            el,
            { innerText: 0 },
            {
              innerText: target,
              duration: 2,
              ease: 'power2.out',
              snap: { innerText: 1 },
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true,
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden px-4 sm:px-8 md:px-12 transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header Line */}
        <div className="flex justify-between items-center text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)] border-b border-[var(--hairline)] pb-4 mb-16">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B07A5A]" />
            <span className="text-[var(--text-primary)] font-semibold">Our Story & Philosophy</span>
          </div>
          <span className="text-[#C5A059]">03 / 15</span>
          <span>Legacy Atelier • Since 2012</span>
        </div>

        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs tracking-[0.24em] uppercase text-[#B07A5A] font-medium">
                The Art of Unobtrusive Observation
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[var(--text-primary)] leading-[1.15]">
                We do not stage your memories. We let them breathe.
              </h2>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                In the heart of Tiruppur and across South India, weddings and family milestones are sacred,
                generational gatherings. The fragrance of fresh jasmine, the rhythmic chime of golden bangles,
                and the quiet emotion of families coming together.
              </p>
              <p>
                For over twelve years, our cameras have moved with quiet reverence. We never interrupt the
                sanctity of rituals with harsh directions. We study the light as it sweeps across mandapams
                and courtyards, capturing the real tears and unprompted laughter that make your story immortal.
              </p>
            </div>

            {/* Founder Note Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--hairline)] space-y-4 shadow-sm">
              <p className="font-serif-luxury italic text-lg sm:text-xl text-[var(--text-primary)] leading-snug">
                “A great photograph is not merely about technical perfection. It is about whether your grandchild,
                fifty years from now, can still feel the heart and warmth of that very morning.”
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-[var(--hairline)]">
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-[var(--text-primary)] uppercase">
                    R. Soundararajan
                  </h4>
                  <p className="text-[10px] tracking-widest text-[var(--text-muted)] uppercase">
                    Principal Visualist & Founder • Thirupur Rockers
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#B07A5A]/40 flex items-center justify-center p-1 bg-[#FAF6F0] dark:bg-[#1E1D1B]">
                  <img
                    src={STUDIO_CONFIG.logos.transparent}
                    alt="Studio Seal"
                    className="w-full h-full object-contain logo-glow"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Overlapping Photos */}
          <div className="lg:col-span-6 relative h-[480px] sm:h-[580px] md:h-[640px]">
            {/* Background Image */}
            <div
              ref={parallaxImg2Ref}
              className="absolute right-0 top-0 w-3/4 h-[75%] rounded-2xl overflow-hidden shadow-lg border border-[var(--hairline)]"
            >
              <img
                src="/assets/photos/marriage/marriage-2.jpg"
                alt="Wedding Mandapam Candids"
                className="w-full h-full object-cover parallax-reveal-img"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-[10px] tracking-widest uppercase font-mono">
                Mandapam Candids • Tiruppur
              </div>
            </div>

            {/* Foreground Overlapping Image (Replaced with marriage-1.jpg swapped from Hero) */}
            <div
              ref={parallaxImg1Ref}
              className="absolute left-0 bottom-0 w-3/5 h-[70%] rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--bg-primary)] z-10"
            >
              <img
                src="/assets/photos/marriage/marriage-1.jpg"
                alt="Sacred Rituals"
                className="w-full h-full object-cover parallax-reveal-img"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-[10px] tracking-widest uppercase font-mono">
                Sacred Vows • 100% Unscripted
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 glass-panel px-4 py-2 rounded-full shadow-md hidden sm:block border border-white/20">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#B07A5A]">
                Timeless Emotion • Pure Candids
              </span>
            </div>
          </div>
        </div>

        {/* Counter Row */}
        <div
          ref={counterContainerRef}
          className="mt-20 pt-12 border-t border-[var(--hairline)] grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left"
        >
          {STUDIO_CONFIG.stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 group">
              <div className="flex items-baseline justify-center sm:justify-start">
                <span
                  data-target={stat.number}
                  className="counter-val font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-normal text-[var(--text-primary)]"
                >
                  0
                </span>
                <span className="font-serif-luxury text-3xl sm:text-4xl text-[#B07A5A] font-light ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-xs tracking-[0.16em] uppercase font-medium text-[var(--text-secondary)]">
                {stat.label}
              </p>
              <p className="text-[10px] tracking-wider text-[var(--text-muted)] italic font-light">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
