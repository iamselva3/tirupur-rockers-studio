import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = STUDIO_CONFIG.testimonials;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeReview = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative w-full py-24 sm:py-32 bg-[var(--bg-card)] text-[var(--text-primary)] overflow-hidden px-4 sm:px-8 md:px-12 select-none transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)] border-b border-[var(--hairline)] pb-4 mb-16">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B07A5A]" />
            <span className="text-[var(--text-primary)] font-semibold">Client Love</span>
          </div>
          <span className="text-[#C5A059]">10 / 15</span>
          <span>Real Experiences • Family Words</span>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto bg-[var(--bg-primary)] rounded-3xl p-8 sm:p-14 lg:p-20 shadow-xl border border-[var(--hairline)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Couple Portrait & Location Stamp */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-4">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[var(--bg-card)] shadow-2xl">
                <img
                  src={activeReview.image}
                  alt={activeReview.client}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center lg:text-left space-y-1">
                <h4 className="font-serif-luxury text-xl sm:text-2xl font-light text-[var(--text-primary)]">
                  {activeReview.client}
                </h4>
                <p className="text-xs text-[#B07A5A] font-medium tracking-wide">
                  {activeReview.weddingType}
                </p>
                <p className="text-[11px] text-[var(--text-muted)] font-mono">
                  {activeReview.location} • {activeReview.year}
                </p>
              </div>

              {/* Star Rating */}
              <div className="flex items-center space-x-1 text-[#C5A059]">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Right: English Pull-Quotes */}
            <div className="lg:col-span-7 space-y-6">
              <Quote className="w-10 h-10 text-[#B07A5A]/30" />

              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-light text-[var(--text-primary)] leading-snug italic border-b border-[var(--hairline)] pb-4">
                {activeReview.headline}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                {activeReview.quote}
              </p>

              {/* Slider Dots & Next/Prev Controls */}
              <div className="pt-6 flex justify-between items-center border-t border-[var(--hairline)]">
                <div className="flex space-x-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? 'w-8 bg-[#B07A5A]' : 'w-2 bg-current/20'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={handlePrev}
                    className="w-11 h-11 rounded-full border border-current/20 flex items-center justify-center text-[var(--text-primary)] hover:bg-[#1E1D1B] dark:hover:bg-[#FAF6F0] hover:text-[#FAF6F0] dark:hover:text-[#1E1D1B] transition-colors cursor-pointer"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-11 h-11 rounded-full border border-current/20 flex items-center justify-center text-[var(--text-primary)] hover:bg-[#1E1D1B] dark:hover:bg-[#FAF6F0] hover:text-[#FAF6F0] dark:hover:text-[#1E1D1B] transition-colors cursor-pointer"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
