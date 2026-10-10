import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Phone, MessageSquare, Calendar, Menu, X, Sun, Moon } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

export default function Navbar({ activeSection, isDarkMode, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 80);

      // Hide floating bar on scroll down, show on scroll up
      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY && !isMenuOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Lock body scroll when overlay menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  // Pure English menu links (NO Tamil words)
  const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Specialities', href: '#services' },
    { label: 'Films', href: '#showreel' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Investment', href: '#investment' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Reserve Date', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Desktop / Header Bar (Hidden when overlay menu is open to prevent any visual clash) */}
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 sm:px-8 md:px-12 py-4 md:py-6 ${
          isMenuOpen ? 'opacity-0 pointer-events-none -translate-y-4' : isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Studio Brand & Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center p-0.5 transition-transform duration-500 group-hover:scale-105">
              <img
                src={STUDIO_CONFIG.logos.transparent}
                alt={STUDIO_CONFIG.brandName}
                className="w-full h-full object-contain logo-glow"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-lg sm:text-xl font-medium tracking-[0.18em] uppercase leading-tight group-hover:text-[#B07A5A] transition-colors text-[var(--text-primary)]">
                {STUDIO_CONFIG.brandName}
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[var(--text-muted)] uppercase font-mono">
                Tiruppur • Atelier
              </span>
            </div>
          </a>

          {/* Desktop Floating Glass Nav Pill */}
          <nav className="hidden lg:flex items-center space-x-1 glass-panel px-5 py-2.5 rounded-full shadow-sm">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative px-4 py-1.5 text-[11px] tracking-[0.18em] uppercase font-medium transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'text-[#FAF6F0] bg-[#1E1D1B] dark:bg-[#FAF6F0] dark:text-[#1E1D1B]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#B07A5A]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Group: Theme Toggle, Book CTA, Menu Hamburger */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-[var(--text-primary)] hover:text-[#C5A059] transition-all cursor-pointer shadow-sm"
              title={isDarkMode ? 'Switch to Warm Ivory Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-[#C5A059]" /> : <Moon className="w-4 h-4 text-[#1E1D1B]" />}
            </button>

            {/* Magnetic Book CTA (Desktop) */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#1E1D1B] dark:bg-[#FAF6F0] text-[#FAF6F0] dark:text-[#1E1D1B] text-[11px] tracking-[0.2em] uppercase font-medium group hover:bg-[#B07A5A] dark:hover:bg-[#B07A5A] dark:hover:text-[#FAF6F0] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span>Book Your Date</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C5A059]" />
            </a>

            {/* Editorial Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Fullscreen Menu"
              className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-[var(--text-primary)] hover:bg-[#1E1D1B] hover:text-[#FAF6F0] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Editorial Menu Overlay (Higher z-index z-[200] to prevent any overlap or conflict) */}
      <div
        className={`fixed inset-0 z-[200] bg-[#141312] text-[#FAF6F0] flex flex-col justify-between transition-all duration-500 ease-in-out px-6 sm:px-12 md:px-24 py-8 sm:py-12 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-6'
        }`}
      >
        {/* Top Header inside overlay with its own pristine Close button */}
        <div className="flex justify-between items-center border-b border-white/10 pb-6">
          <div className="flex items-center space-x-3">
            <img
              src={STUDIO_CONFIG.logos.transparent}
              alt={STUDIO_CONFIG.brandName}
              className="w-10 h-10 object-contain logo-glow"
            />
            <div className="flex flex-col">
              <span className="font-serif-luxury text-lg tracking-[0.2em] uppercase text-[#FAF6F0]">
                {STUDIO_CONFIG.brandName}
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#C5A059] uppercase font-mono">
                Visual Atelier • Tiruppur
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Theme Toggle inside menu */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF6F0] flex items-center justify-center transition-colors cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-[#C5A059]" /> : <Moon className="w-4 h-4 text-[#FAF6F0]" />}
            </button>

            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#B07A5A] text-[#FAF6F0] flex items-center justify-center transition-all cursor-pointer border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center: Clean Oversized Display Links without any Tamil words or clutter */}
        <div className="my-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 max-w-4xl">
          {navLinks.map((link, idx) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="text-left group flex items-baseline space-x-4 cursor-pointer py-1.5 transition-transform duration-300 hover:translate-x-3"
            >
              <span className="font-mono text-xs text-[#C5A059] tracking-widest">
                0{idx + 1}
              </span>
              <span className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#FAF6F0] group-hover:text-[#B07A5A] transition-colors">
                {link.label}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom Bar: Studio Details & Social Channels */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-[#A39E96]">
          <div className="space-y-1">
            <p className="tracking-widest uppercase text-[10px] text-[#C5A059]">Direct Studio Atelier</p>
            <p className="text-[#FAF6F0]">{STUDIO_CONFIG.location.address}</p>
            <p>
              Direct: <a href={`tel:${STUDIO_CONFIG.contact.phoneRaw}`} className="text-[#FAF6F0] hover:underline">{STUDIO_CONFIG.contact.phone}</a>
            </p>
          </div>

          <div className="flex items-center space-x-6 text-[11px] tracking-[0.2em] uppercase">
            <a
              href={STUDIO_CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A059] transition-colors"
            >
              Instagram
            </a>
            <a
              href={`https://wa.me/${STUDIO_CONFIG.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A059] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={STUDIO_CONFIG.contact.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A059] transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Action Bar (Call / WhatsApp / Book) */}
      <div className="lg:hidden fixed bottom-3 left-3 right-3 z-[90] glass-panel-dark px-3 py-2.5 rounded-full shadow-2xl border border-white/10 flex items-center justify-between text-[#FAF6F0]">
        <a
          href={`tel:${STUDIO_CONFIG.contact.phoneRaw}`}
          className="flex-1 flex items-center justify-center space-x-2 py-2 text-[10px] tracking-[0.16em] uppercase font-medium hover:text-[#C5A059] transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Call</span>
        </a>

        <div className="w-[1px] h-5 bg-white/15" />

        <a
          href={`https://wa.me/${STUDIO_CONFIG.contact.whatsapp}?text=Hello%20Thirupur%20Rockers%20Studio,%20I%20would%20like%20to%20inquire%20about%20photography%20dates.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-2 py-2 text-[10px] tracking-[0.16em] uppercase font-medium hover:text-[#25D366] transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
          <span>WhatsApp</span>
        </a>

        <div className="w-[1px] h-5 bg-white/15" />

        <button
          onClick={() => handleLinkClick('#contact')}
          className="flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 bg-[#B07A5A] hover:bg-[#8C5C3F] text-[#FAF6F0] rounded-full text-[10px] tracking-[0.18em] uppercase font-semibold transition-colors"
        >
          <Calendar className="w-3.5 h-3.5 text-[#FAF6F0]" />
          <span>Book</span>
        </button>
      </div>
    </>
  );
}
