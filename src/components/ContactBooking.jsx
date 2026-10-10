import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

export default function ContactBooking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Candid Wedding & Cinema',
    date: '',
    location: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `*New Inquiry via Thirupur Rockers Atelier Website*%0A%0A` +
      `*Client Name:* ${formData.name}%0A` +
      `*Phone Number:* ${formData.phone}%0A` +
      `*Event Type:* ${formData.eventType}%0A` +
      `*Event Date:* ${formData.date || 'TBD'}%0A` +
      `*Location/Venue:* ${formData.location || 'Tiruppur/South India'}%0A` +
      `*Vision/Note:* ${formData.message || 'Looking forward to discussing dates.'}`;

    setIsSubmitted(true);
    const waUrl = `https://wa.me/${STUDIO_CONFIG.contact.whatsapp}?text=${text}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden px-4 sm:px-8 md:px-12 select-none transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)] border-b border-[var(--hairline)] pb-4 mb-16">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B07A5A]" />
            <span className="text-[var(--text-primary)] font-semibold">Reserve Your Date</span>
          </div>
          <span className="text-[#C5A059]">14 / 15</span>
          <span>Inquiries & Dates • Connect with Atelier</span>
        </div>

        {/* Inspiring Headline (Pure English) */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs tracking-[0.22em] uppercase text-[#B07A5A] font-semibold">
            Let Us Preserve Your Sacred Moments
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-[var(--text-primary)] leading-[1.08]">
            Let us preserve what your heart never wants to forget.
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light max-w-xl leading-relaxed">
            Begin your visual journey with us. We accept a limited number of assignments each season
            to ensure devoted, uncompromised creative dedication for every family.
          </p>
        </div>

        {/* Grid: Form (Left) & Studio Info / Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Clean Editorial Booking Form */}
          <div className="lg:col-span-7 bg-[var(--bg-card)] rounded-3xl p-8 sm:p-12 border border-[var(--hairline)] shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-16 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#B07A5A]/15 text-[#B07A5A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-3xl font-light text-[var(--text-primary)]">
                  Inquiry Dispatched to WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
                  Thank you! Our director has received your details and will verify calendar availability and get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full border border-current/20 text-xs uppercase tracking-widest hover:bg-[#1E1D1B] dark:hover:bg-[#FAF6F0] hover:text-[#FAF6F0] dark:hover:text-[#1E1D1B] transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[var(--text-muted)] block">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. K. Arvind & Kavitha"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--hairline)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#B07A5A] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[var(--text-muted)] block">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--hairline)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#B07A5A] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Event Type */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[var(--text-muted)] block">
                      Discipline of Interest
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--hairline)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#B07A5A] transition-colors"
                    >
                      <option value="Candid Wedding & Cinema">Candid Wedding & Cinema</option>
                      <option value="Baby & Kids Milestone Session">Baby & Kids Milestone Session</option>
                      <option value="Maternity Fine-Art Shoot">Maternity Fine-Art Shoot</option>
                      <option value="High-Fashion & Model Portfolio">High-Fashion & Model Portfolio</option>
                      <option value="Traditional Ceremonies">Traditional Ceremonies</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[var(--text-muted)] block">
                      Auspicious Date (Approx.)
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--hairline)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#B07A5A] transition-colors"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[var(--text-muted)] block">
                    Venue City or Mandapam
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g. Tiruppur, Coimbatore, Pollachi, Chennai"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--hairline)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#B07A5A] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[var(--text-muted)] block">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Share any special moments, family traditions, or specific expectations you have in mind..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--hairline)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#B07A5A] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1E1D1B] dark:bg-[#FAF6F0] text-[#FAF6F0] dark:text-[#1E1D1B] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#B07A5A] dark:hover:bg-[#B07A5A] dark:hover:text-[#FAF6F0] transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
                  >
                    <span>Connect via WhatsApp</span>
                    <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                  </button>

                  <a
                    href={`mailto:${STUDIO_CONFIG.contact.email}?subject=Photography Inquiry`}
                    className="text-xs uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Or write via Email
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right: Studio Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif-luxury text-2xl font-light text-[var(--text-primary)]">
                The Tiruppur Atelier
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-[var(--text-secondary)] font-light">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#B07A5A] flex-shrink-0 mt-0.5" />
                  <span>{STUDIO_CONFIG.location.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#B07A5A] flex-shrink-0" />
                  <a href={`tel:${STUDIO_CONFIG.contact.phoneRaw}`} className="hover:text-[var(--text-primary)] transition-colors">
                    {STUDIO_CONFIG.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#B07A5A] flex-shrink-0" />
                  <a href={`mailto:${STUDIO_CONFIG.contact.email}`} className="hover:text-[var(--text-primary)] transition-colors">
                    {STUDIO_CONFIG.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Button */}
            <div className="p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#128C7E] dark:text-[#25D366]">
                  Direct Founder Chat
                </span>
                <p className="text-xs text-[var(--text-primary)] font-medium">
                  Instant Response on WhatsApp
                </p>
              </div>
              <a
                href={`https://wa.me/${STUDIO_CONFIG.contact.whatsapp}?text=Hello%20Thirupur%20Rockers%20Studio,%20I%20would%20like%20to%20discuss%20dates.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5 hover:bg-[#128C7E] transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Now</span>
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-[var(--hairline)] shadow-sm relative">
              <iframe
                title="Thirupur Rockers Studio Location Map"
                src={STUDIO_CONFIG.location.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(30%) contrast(105%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
