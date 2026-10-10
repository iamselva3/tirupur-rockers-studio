import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Studio Components
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import AboutStory from './components/AboutStory';
import ServicesInteractive from './components/ServicesInteractive';
import FeaturedHorizontalScroll from './components/FeaturedHorizontalScroll';
import CinemaShowreel from './components/CinemaShowreel';
import GalleryMasonry from './components/GalleryMasonry';
import ProcessTimeline from './components/ProcessTimeline';
import InvestmentPackages from './components/InvestmentPackages';
import ClientTestimonials from './components/ClientTestimonials';
import BehindTheLens from './components/BehindTheLens';
import InstagramReelsStrip from './components/InstagramReelsStrip';
import FAQAccordion from './components/FAQAccordion';
import ContactBooking from './components/ContactBooking';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import ShowreelModal from './components/ShowreelModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Dark Mode Theme Management
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return false; // Default to warm ivory light mode
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Lightbox Modal state
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    activeItem: null,
    items: [],
  });

  // Initialize Lenis smooth scroll and connect with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const ticker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const sections = ['hero', 'story', 'services', 'featured', 'showreel', 'portfolio', 'process', 'investment', 'testimonials', 'team', 'faq', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, []);

  const handleOpenLightbox = (item, allItems) => {
    setLightboxState({
      isOpen: true,
      activeItem: item,
      items: allItems,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSelectLightboxItem = (item) => {
    setLightboxState((prev) => ({ ...prev, activeItem: item }));
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden transition-colors duration-400">
      {/* 1. Subtle Film Grain Texture */}
      <div className="film-grain" />

      {/* 2. Fluid Custom Cursor */}
      <CustomCursor />

      {/* 3. Cinematic Aperture Shutter Preloader */}
      <Preloader onComplete={() => setIsPreloaderDone(true)} />

      {/* 4. Luxury Floating & Drawer Navbar with Theme Toggle */}
      <Navbar
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Architectural Sections */}
      <main>
        {/* Section 01: Hero */}
        <Hero isPreloaderDone={isPreloaderDone} />

        {/* Section 02: Dual Velocity Marquee Strip */}
        <MarqueeStrip />

        {/* Section 03: About / Our Story */}
        <AboutStory />

        {/* Section 04: Interactive Specialities / Services */}
        <ServicesInteractive />

        {/* Section 05: Featured Work Horizontal Scroll Pinned Gallery */}
        <FeaturedHorizontalScroll />

        {/* Section 06: Cinematic Story Showreel */}
        <CinemaShowreel onOpenShowreel={() => setIsShowreelOpen(true)} />

        {/* Section 07: Filterable Fine-Art Bento Gallery (Dedicated Baby 5+ photos) */}
        <GalleryMasonry onOpenLightbox={handleOpenLightbox} />

        {/* Section 08: Process Timeline (Scroll Line Draw) */}
        <ProcessTimeline />

        {/* Section 09: Bespoke Investment Packages */}
        <InvestmentPackages />

        {/* Section 10: Client Love / Testimonials Carousel */}
        <ClientTestimonials />

        {/* Section 11: Behind The Lens / Team Portraits */}
        <BehindTheLens />

        {/* Section 12: Instagram / Reels Strip */}
        <InstagramReelsStrip />

        {/* Section 13: Frequently Asked Questions */}
        <FAQAccordion />

        {/* Section 14: Contact / Reserve Your Date */}
        <ContactBooking />
      </main>

      {/* Section 15: Grand Finale Footer (Clean, no huge bottom logo) */}
      <Footer />

      {/* Modals & Lightboxes */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        activeItem={lightboxState.activeItem}
        items={lightboxState.items}
        onClose={handleCloseLightbox}
        onSelect={handleSelectLightboxItem}
      />

      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />
    </div>
  );
}
