import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MarqueeStrip() {
  const containerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    let currentSpeed = 1;
    let targetSpeed = 1;

    const scrollTrigger = ScrollTrigger.create({
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity()) / 400;
        targetSpeed = Math.min(Math.max(velocity, 1), 6);
      },
    });

    let x1 = 0;
    let x2 = -1500;
    let animId;

    const tick = () => {
      currentSpeed += (targetSpeed - currentSpeed) * 0.08;
      targetSpeed += (1 - targetSpeed) * 0.03;

      x1 -= 1.2 * currentSpeed;
      x2 += 1.2 * currentSpeed;

      if (row1Ref.current) {
        if (x1 <= -3000) x1 = 0;
        row1Ref.current.style.transform = `translate3d(${x1}px, 0, 0)`;
      }

      if (row2Ref.current) {
        if (x2 >= 0) x2 = -3000;
        row2Ref.current.style.transform = `translate3d(${x2}px, 0, 0)`;
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      scrollTrigger.kill();
    };
  }, []);

  // Pure English phrases (No Tamil words)
  const marqueeItems1 = [
    'THIRUPUR ROCKERS',
    'CANDID WEDDINGS',
    'HEIRLOOM CINEMA',
    'TRADITIONAL CEREMONIES',
    'UNSCRIPTED EMOTION',
    'BABY & KIDS PORTRAITS',
    'FINE ART ALBUMS',
    'PRIME GLASS ATELIER',
  ];

  const marqueeItems2 = [
    'MATERNITY SAGA',
    'HIGH-FASHION EDITORIAL',
    '4K CINEMATIC REELS',
    'TIRUPPUR & SOUTH INDIA',
    'SACRED MUHURTHAM',
    'TIMELESS MEMORIES',
    'ARTISANAL COLOR GRADE',
    'HEIRLOOM STORYTELLING',
  ];

  return (
    <section
      id="marquee"
      ref={containerRef}
      className="relative w-full py-10 md:py-16 bg-[#181716] dark:bg-[#0E0D0C] text-[#FAF6F0] overflow-hidden select-none border-y border-white/10"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#141312] via-transparent to-[#141312] z-10 pointer-events-none" />

      {/* Lane 1: Scrolling Left */}
      <div className="w-full overflow-hidden flex items-center mb-3 sm:mb-6">
        <div
          ref={row1Ref}
          className="flex whitespace-nowrap will-change-transform items-center space-x-8 sm:space-x-12"
        >
          {[...marqueeItems1, ...marqueeItems1, ...marqueeItems1].map((text, idx) => (
            <div key={idx} className="flex items-center space-x-8 sm:space-x-12">
              <span
                className={`font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-wider ${
                  idx % 2 === 0
                    ? 'text-[#FAF6F0]'
                    : 'text-transparent stroke-text opacity-60'
                }`}
                style={{
                  WebkitTextStroke: idx % 2 === 0 ? 'none' : '1px rgba(250, 246, 240, 0.45)',
                }}
              >
                {text}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#B07A5A]" />
            </div>
          ))}
        </div>
      </div>

      {/* Lane 2: Scrolling Right */}
      <div className="w-full overflow-hidden flex items-center">
        <div
          ref={row2Ref}
          className="flex whitespace-nowrap will-change-transform items-center space-x-8 sm:space-x-12"
        >
          {[...marqueeItems2, ...marqueeItems2, ...marqueeItems2].map((text, idx) => (
            <div key={idx} className="flex items-center space-x-8 sm:space-x-12">
              <span
                className={`font-serif-luxury text-2xl sm:text-4xl md:text-5xl italic tracking-wide uppercase ${
                  idx % 2 === 1
                    ? 'text-[#C5A059]'
                    : 'text-transparent stroke-text opacity-50'
                }`}
                style={{
                  WebkitTextStroke: idx % 2 === 1 ? 'none' : '1px rgba(197, 160, 89, 0.45)',
                }}
              >
                {text}
              </span>
              <span className="w-2 h-2 rotate-45 bg-[#FAF6F0]/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
