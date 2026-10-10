import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Coffee, Compass, Camera, Sparkles, BookOpen } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            end: 'bottom 85%',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const icons = [Coffee, Compass, Camera, Sparkles, BookOpen];

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 bg-[var(--bg-card)] text-[var(--text-primary)] overflow-hidden px-4 sm:px-8 md:px-12 select-none transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)] border-b border-[var(--hairline)] pb-4 mb-16">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B07A5A]" />
            <span className="text-[var(--text-primary)] font-semibold">The Methodology</span>
          </div>
          <span className="text-[#C5A059]">08 / 15</span>
          <span>Process & Craft • 5 Milestones</span>
        </div>

        {/* Section Title */}
        <div className="max-w-2xl mb-20 space-y-3">
          <span className="text-xs tracking-[0.22em] uppercase text-[#B07A5A] font-semibold">
            How We Capture Your Story
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[var(--text-primary)] leading-tight">
            From first conversation to your family's bedtime keepsake book.
          </h2>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-[var(--hairline)]" />

          <div
            ref={lineRef}
            className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#B07A5A] via-[#C5A059] to-[#1E1D1B] dark:to-[#FAF6F0] origin-top"
            style={{ willChange: 'transform' }}
          />

          <div className="space-y-16 sm:space-y-24">
            {STUDIO_CONFIG.processSteps.map((step, idx) => {
              const Icon = icons[idx % icons.length];
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center group"
                >
                  {/* Content Column */}
                  <div
                    className={`sm:w-1/2 pl-16 sm:pl-0 ${
                      isEven ? 'sm:pr-12 sm:text-right' : 'sm:order-2 sm:pl-12 sm:text-left'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="inline-flex items-center space-x-2 text-[10px] tracking-widest uppercase font-mono text-[#B07A5A]">
                        <span>{step.timeframe}</span>
                        <span>•</span>
                        <span>Milestone {step.step}</span>
                      </div>
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl font-light text-[var(--text-primary)] group-hover:text-[#B07A5A] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Icon Marker */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[var(--bg-primary)] border-2 border-[#B07A5A] flex items-center justify-center text-[#B07A5A] shadow-md z-10 group-hover:scale-110 group-hover:bg-[#1E1D1B] dark:group-hover:bg-[#FAF6F0] group-hover:text-[#FAF6F0] dark:group-hover:text-[#1E1D1B] group-hover:border-[#C5A059] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className={`hidden sm:block sm:w-1/2 ${isEven ? 'order-2' : 'order-1'}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
