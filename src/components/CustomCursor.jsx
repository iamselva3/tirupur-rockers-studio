import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [cursorType, setCursorType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for touch / mobile
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Detect cursor context from DOM element under pointer
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        setCursorType(type);
        if (type === 'view') setCursorText('VIEW');
        else if (type === 'drag') setCursorText('DRAG');
        else if (type === 'play') setCursorText('PLAY');
        else if (type === 'link') setCursorText('');
        else setCursorText(type.toUpperCase());
      } else {
        const isInteractive = e.target.closest('button, a, input, select, textarea, [role="button"]');
        if (isInteractive) {
          setCursorType('hover');
          setCursorText('');
        } else {
          setCursorType('default');
          setCursorText('');
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const renderFollower = () => {
      // Smooth lerp trailing
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(renderFollower);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animationFrameId = requestAnimationFrame(renderFollower);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B07A5A] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      />

      {/* Fluid Follower Orb */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[width,height,background-color,border-color] duration-300 ease-out ${
          cursorType === 'view' || cursorType === 'drag' || cursorType === 'play'
            ? 'w-20 h-20 bg-[#1E1D1B]/95 border border-[#C5A059] shadow-2xl backdrop-blur-md'
            : cursorType === 'hover'
            ? 'w-12 h-12 bg-[#B07A5A]/15 border border-[#B07A5A]'
            : 'w-9 h-9 border border-[#B07A5A]/40'
        }`}
        style={{ willChange: 'transform' }}
      >
        {cursorText && (
          <span className="text-[10px] tracking-[0.2em] font-semibold text-[#FAF6F0] animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
