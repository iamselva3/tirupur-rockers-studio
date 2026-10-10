import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

export default function ServicesInteractive() {
  const [activeHoverId, setActiveHoverId] = useState(null);
  const [activeMobileId, setActiveMobileId] = useState(STUDIO_CONFIG.services[0].id);
  const previewRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let frameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const render = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${currentX + 24}px, ${currentY - 140}px, 0)`;
      }
      frameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    frameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const activeService = STUDIO_CONFIG.services.find((s) => s.id === activeHoverId) || STUDIO_CONFIG.services[0];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-[var(--bg-card)] text-[var(--text-primary)] overflow-hidden px-4 sm:px-8 md:px-12 select-none transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)] border-b border-[var(--hairline)] pb-4 mb-16">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B07A5A]" />
            <span className="text-[var(--text-primary)] font-semibold">Specialities</span>
          </div>
          <span className="text-[#C5A059]">04 / 15</span>
          <span>Bespoke Disciplines • South India</span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs tracking-[0.22em] uppercase text-[#B07A5A] font-semibold">
            Bespoke Visual Disciplines
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-[var(--text-primary)] leading-[1.12]">
            Crafted for families who cherish timeless authenticity over fleeting trends.
          </h2>
        </div>

        {/* Desktop Interactive Service List */}
        <div className="hidden lg:block divide-y divide-[var(--hairline)] border-t border-b border-[var(--hairline)]">
          {STUDIO_CONFIG.services.map((service) => {
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveHoverId(service.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                className="group py-8 sm:py-10 transition-colors duration-300 hover:bg-[var(--bg-primary)]/80 px-6 rounded-xl flex items-center justify-between cursor-pointer"
              >
                {/* Left: Number + Title */}
                <div className="flex items-baseline space-x-8">
                  <span className="font-mono text-sm tracking-widest text-[#B07A5A]">
                    {service.id}
                  </span>
                  <div>
                    <h3 className="font-serif-luxury text-3xl xl:text-4xl font-light text-[var(--text-primary)] group-hover:text-[#B07A5A] group-hover:translate-x-3 transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Right: Deliverables Summary & CTA Arrow */}
                <div className="flex items-center space-x-12">
                  <div className="text-right hidden xl:block max-w-xs">
                    <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${STUDIO_CONFIG.contact.whatsapp}?text=Hello%20Thirupur%20Rockers,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-current/20 flex items-center justify-center group-hover:border-[#B07A5A] group-hover:bg-[#B07A5A] group-hover:text-[#FAF6F0] transition-all duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5 text-[var(--text-primary)] group-hover:text-[#FAF6F0] transition-colors" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Mouse-Follower Preview Card */}
        <div
          ref={previewRef}
          className={`hidden lg:block fixed top-0 left-0 w-80 h-[440px] pointer-events-none z-50 rounded-2xl overflow-hidden shadow-2xl transition-opacity duration-300 ease-out border border-white/20 bg-[#1E1D1B] ${
            activeHoverId ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ willChange: 'transform' }}
        >
          <img
            src={activeService.image}
            alt={activeService.title}
            className="w-full h-3/5 object-cover object-center"
          />
          <div className="p-5 bg-[#1E1D1B] text-[#FAF6F0] space-y-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A059] font-mono">
              Service {activeService.id}
            </span>
            <h4 className="font-serif-luxury text-lg font-light leading-snug">
              {activeService.title}
            </h4>
            <div className="space-y-1.5 pt-2 border-t border-white/10">
              {activeService.highlights.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-[10px] text-[#A39E96]">
                  <CheckCircle2 className="w-3 h-3 text-[#B07A5A]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {STUDIO_CONFIG.services.map((service) => {
            const isOpen = activeMobileId === service.id;
            return (
              <div
                key={service.id}
                className="bg-[var(--bg-primary)] rounded-2xl overflow-hidden border border-[var(--hairline)] transition-all"
              >
                <button
                  onClick={() => setActiveMobileId(isOpen ? null : service.id)}
                  className="w-full p-6 text-left flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-baseline space-x-4">
                    <span className="font-mono text-xs text-[#B07A5A]">{service.id}</span>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-light text-[var(--text-primary)]">
                      {service.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-current/20 flex items-center justify-center text-[var(--text-primary)]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 space-y-4 border-t border-[var(--hairline)] animate-fadeIn">
                    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {service.fullDesc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-center space-x-2 text-[11px] text-[var(--text-primary)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B07A5A] flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/${STUDIO_CONFIG.contact.whatsapp}?text=Hello%20Thirupur%20Rockers,%20I%20am%20inquiring%20about%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-full bg-[#1E1D1B] dark:bg-[#FAF6F0] text-[#FAF6F0] dark:text-[#1E1D1B] flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-semibold hover:bg-[#B07A5A] transition-colors"
                    >
                      <span>Inquire via WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                    </a>
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
