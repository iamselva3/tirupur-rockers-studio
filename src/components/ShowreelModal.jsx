import React, { useEffect, useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

export default function ShowreelModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (videoRef.current) {
        videoRef.current.play().catch(() => setIsPlaying(false));
      }
    } else {
      document.body.style.overflow = '';
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF6F0] flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Close Showreel Video"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Video Container */}
      <div className="relative w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/15">
        <video
          ref={videoRef}
          src="/media/showreel"
          poster="/assets/imagix/photo3.jpg"
          className="w-full h-full object-cover"
          playsInline
          autoPlay
          loop
          onClick={togglePlay}
        />

        {/* Custom Video Controls Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between text-[#FAF6F0]">
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
            </button>
            <button
              onClick={toggleMute}
              className="p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <div className="hidden sm:block">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
                Thirupur Rockers • 4K Master Film
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <a
              href={`https://wa.me/${STUDIO_CONFIG.contact.whatsapp}?text=Hello%20Thirupur%20Rockers,%20I%20just%20watched%20your%20showreel%20and%20loved%20it!%20Can%20we%20discuss%20my%20wedding%20date?`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#B07A5A] text-[#FAF6F0] text-[10px] tracking-widest uppercase font-semibold hover:bg-[#8C5C3F] transition-colors"
            >
              Book This Cinema Style
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
