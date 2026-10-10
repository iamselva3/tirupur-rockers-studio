import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { STUDIO_CONFIG } from '../data/studioConfig';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const preloaderRef = useRef(null);
  const shutterRef = useRef(null);
  const logoRef = useRef(null);
  const counterRef = useRef(null);
  const progressLineRef = useRef(null);
  const skipBtnRef = useRef(null);

  useEffect(() => {
    // Check session storage to show once per session
    const hasSeen = sessionStorage.getItem('thirupur_splash_seen');
    if (hasSeen === 'true') {
      setIsDone(true);
      if (onComplete) onComplete();
      return;
    }

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Timeline setup
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('thirupur_splash_seen', 'true');
        document.body.style.overflow = '';
        setIsDone(true);
        if (onComplete) onComplete();
      },
    });

    // 1. Initial State
    gsap.set(logoRef.current, { opacity: 0, scale: 0.88, filter: 'blur(8px)' });
    gsap.set(counterRef.current, { opacity: 0, y: 15 });
    gsap.set(progressLineRef.current, { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(skipBtnRef.current, { opacity: 0 });

    // 2. Animate Counter Number 0 -> 100
    const counterObj = { val: 0 };
    tl.to(
      counterObj,
      {
        val: 100,
        duration: 2.4,
        ease: 'power2.inOut',
        onUpdate: () => {
          setProgress(Math.floor(counterObj.val));
        },
      },
      0.3
    );

    // 3. Logo reveal with gentle bloom and scale
    tl.to(
      logoRef.current,
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: 'power2.out',
      },
      0.4
    );

    // 4. Progress bar reveal
    tl.to(
      progressLineRef.current,
      {
        scaleX: 1,
        duration: 2.4,
        ease: 'power2.inOut',
      },
      0.3
    );

    // 5. Counter & Skip button fade in
    tl.to(
      [counterRef.current, skipBtnRef.current],
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      },
      0.5
    );

    // 6. Camera Iris / Shutter Opening Animation
    tl.to(
      logoRef.current,
      {
        scale: 1.15,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.in',
      },
      2.6
    );

    tl.to(
      [counterRef.current, progressLineRef.current, skipBtnRef.current],
      {
        opacity: 0,
        duration: 0.4,
      },
      2.7
    );

    // Aperture Curtain Split / Radial Iris Expansion
    tl.to(
      shutterRef.current,
      {
        clipPath: 'circle(150% at 50% 50%)',
        duration: 1.1,
        ease: 'expo.inOut',
      },
      2.8
    );

    tl.to(
      preloaderRef.current,
      {
        opacity: 0,
        duration: 0.4,
        pointerEvents: 'none',
      },
      3.7
    );

    // Keyboard ESC to skip
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        skipIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      tl.kill();
    };
  }, []);

  const skipIntro = () => {
    sessionStorage.setItem('thirupur_splash_seen', 'true');
    document.body.style.overflow = '';
    gsap.to(preloaderRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        setIsDone(true);
        if (onComplete) onComplete();
      },
    });
  };

  if (isDone) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#141312] text-[#FAF6F0] overflow-hidden select-none"
    >
      {/* Aperture Shutter Mask Layer */}
      <div
        ref={shutterRef}
        className="absolute inset-0 bg-[#1E1D1B] flex flex-col items-center justify-center"
        style={{ clipPath: 'circle(100% at 50% 50%)' }}
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#B07A5A]/10 blur-[120px] pointer-events-none" />

        {/* Studio Logo with Soft Glow */}
        <div ref={logoRef} className="relative z-10 flex flex-col items-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-[#C5A059]/20 blur-xl scale-125" />
            <img
              src={STUDIO_CONFIG.logos.transparent}
              alt={STUDIO_CONFIG.studioFullName}
              className="relative w-28 h-28 sm:w-36 sm:h-36 object-contain logo-glow"
            />
          </div>

          <div className="text-center space-y-1">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl tracking-[0.25em] text-[#FAF6F0] uppercase font-light">
              Thirupur Rockers
            </h2>
            <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#C5A059] font-medium">
              Atelier of Visual Poetry • Tiruppur
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 w-64 sm:w-80 flex flex-col items-center space-y-3 z-10">
          {/* Thin Progress Line */}
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
            <div
              ref={progressLineRef}
              className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#B07A5A] via-[#C5A059] to-[#FAF6F0]"
            />
          </div>

          {/* Counter and Status */}
          <div
            ref={counterRef}
            className="w-full flex justify-between items-center text-[10px] tracking-[0.25em] text-[#A39E96] uppercase"
          >
            <span>Calibrating Lens</span>
            <span className="font-mono text-[#FAF6F0] font-semibold">{progress}%</span>
          </div>
        </div>

        {/* Skip Button */}
        <button
          ref={skipBtnRef}
          onClick={skipIntro}
          className="absolute top-8 right-8 z-20 text-[11px] tracking-[0.25em] uppercase text-[#A39E96] hover:text-[#FAF6F0] transition-colors py-2 px-4 rounded-full border border-white/10 hover:border-white/30 backdrop-blur-sm cursor-pointer"
        >
          Skip Intro [ESC]
        </button>

        {/* Shutter Blades Graphic Details */}
        <div className="absolute bottom-6 left-8 text-[9px] tracking-[0.3em] text-white/20 uppercase hidden sm:block">
          f/1.2 • 24fps • South India Archive
        </div>
        <div className="absolute bottom-6 right-8 text-[9px] tracking-[0.3em] text-white/20 uppercase hidden sm:block">
          Tamil Nadu • Est. 2012
        </div>
      </div>
    </div>
  );
}
