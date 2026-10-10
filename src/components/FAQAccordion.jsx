import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-24 sm:py-32 bg-[var(--bg-card)] text-[var(--text-primary)] overflow-hidden px-4 sm:px-8 md:px-12 select-none transition-colors duration-400"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)] border-b border-[var(--hairline)] pb-4 mb-16">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B07A5A]" />
            <span className="text-[var(--text-primary)] font-semibold">Inquiries & Answers</span>
          </div>
          <span className="text-[#C5A059]">13 / 15</span>
          <span>Helpful Clarifications • FAQ</span>
        </div>

        {/* Section Title */}
        <div className="text-center sm:text-left mb-16 space-y-3">
          <span className="text-xs tracking-[0.22em] uppercase text-[#B07A5A] font-semibold">
            Clear Guidance
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[var(--text-primary)] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Stack */}
        <div className="divide-y divide-[var(--hairline)] border-t border-b border-[var(--hairline)]">
          {STUDIO_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-6 sm:py-8 transition-colors">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                >
                  <span className="font-serif-luxury text-xl sm:text-2xl font-light text-[var(--text-primary)] group-hover:text-[#B07A5A] transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-current/20 flex items-center justify-center flex-shrink-0 mt-1 text-[var(--text-primary)] group-hover:border-[#B07A5A] group-hover:text-[#B07A5A] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-12 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
