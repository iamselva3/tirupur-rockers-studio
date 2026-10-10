import React from 'react';
import { ArrowUp, MessageSquare, Heart } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from './SocialIcons';
import { STUDIO_CONFIG } from '../data/studioConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Specialities', href: '#services' },
    { label: 'Cinema Films', href: '#showreel' },
    { label: 'Fine-Art Gallery', href: '#portfolio' },
    { label: 'Methodology', href: '#process' },
    { label: 'Investment', href: '#investment' },
    { label: 'Client Love', href: '#testimonials' },
    { label: 'Reserve Date', href: '#contact' },
  ];

  return (
    <footer className="relative w-full bg-[#141312] text-[#FAF6F0] overflow-hidden select-none pt-20 pb-16 px-4 sm:px-8 md:px-12 border-t border-white/10">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#B07A5A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Main Grid: Navigation & Studio Identity (Clean & Architectural, NO huge bottom logo) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src={STUDIO_CONFIG.logos.transparent}
                alt={STUDIO_CONFIG.studioFullName}
                className="w-12 h-12 object-contain logo-glow"
              />
              <div>
                <h3 className="font-serif-luxury text-2xl font-light tracking-[0.16em] uppercase">
                  {STUDIO_CONFIG.brandName}
                </h3>
                <p className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-mono">
                  Atelier of Visual Poetry • Est. 2012
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A39E96] font-light max-w-sm leading-relaxed">
              Quiet luxury wedding photography and cinema documenting genuine emotions, heirloom traditions, and generational family bonds.
            </p>

            <div className="text-xs text-[#FAF6F0]/80 space-y-1 font-light">
              <p>{STUDIO_CONFIG.location.address}</p>
              <p>Direct: <a href={`tel:${STUDIO_CONFIG.contact.phoneRaw}`} className="text-[#C5A059] hover:underline">{STUDIO_CONFIG.contact.phone}</a></p>
            </div>
          </div>

          {/* Quick Links Directory */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A059] font-mono block">
              Editorial Index
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs text-[#A39E96]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#FAF6F0] hover:translate-x-1 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="md:col-span-3 space-y-6 flex flex-col justify-between items-start md:items-end">
            <div className="space-y-4 text-left md:text-right">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A059] font-mono block">
                Connect Digitally
              </span>
              <div className="flex items-center space-x-4">
                <a
                  href={STUDIO_CONFIG.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${STUDIO_CONFIG.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href={STUDIO_CONFIG.contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#FF0000] hover:text-[#FF0000] transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={STUDIO_CONFIG.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#1877F2] hover:text-[#1877F2] transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-white/20 text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-white hover:text-[#141312] transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] tracking-widest uppercase text-[#8A857E]">
          <p>© {new Date().getFullYear()} Thirupur Rockers Studio. All Rights Reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#B07A5A] fill-current inline mx-0.5" />
            <span>in Tiruppur, South India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
