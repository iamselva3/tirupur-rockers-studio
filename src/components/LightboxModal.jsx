import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare, Download } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

export default function LightboxModal({ isOpen, activeItem, items, onClose, onSelect }) {
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, activeItem]);

  if (!isOpen || !activeItem) return null;

  const currentIndex = items.findIndex((i) => i.id === activeItem.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onSelect(items[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIdx]);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) handleNext();
    if (touchEnd - touchStart > 50) handlePrev();
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-fadeIn select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar */}
      <div className="absolute top-6 left-6 right-6 z-50 flex justify-between items-center text-[#FAF6F0]">
        <div className="flex items-center space-x-3">
          <img
            src={STUDIO_CONFIG.logos.transparent}
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-xs font-mono tracking-widest text-[#C5A059] uppercase">
            {currentIndex + 1} / {items.length} • {activeItem.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF6F0] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-[#FAF6F0] flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Previous Photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-[#FAF6F0] flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Next Photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Frame */}
      <div className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center">
        <img
          src={activeItem.image}
          alt={activeItem.title}
          className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10 transition-transform duration-300"
        />

        {/* Caption & WhatsApp Action Bar */}
        <div className="w-full mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left px-2">
          <div>
            <h4 className="font-serif-luxury text-xl sm:text-2xl text-[#FAF6F0] font-light">
              {activeItem.title}
            </h4>
            <p className="text-xs text-[#C5A059] italic">
              {activeItem.tamilSubtitle} • Tiruppur Archive {activeItem.year}
            </p>
          </div>

          <a
            href={`https://wa.me/${STUDIO_CONFIG.contact.whatsapp}?text=Hello%20Thirupur%20Rockers,%20I%20love%20this%20specific%20photo:%20"${encodeURIComponent(activeItem.title)}"%20(${encodeURIComponent(activeItem.category)}).%20Can%20we%20have%20similar%20photography%20for%20our%20event?`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#B07A5A] hover:bg-[#8C5C3F] text-[#FAF6F0] text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#FAF6F0]" />
            <span>Inquire This Frame on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
