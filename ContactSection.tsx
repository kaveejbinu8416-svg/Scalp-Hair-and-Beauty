import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle2, AlertCircle, ArrowUpRight, MessageCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: 'Scalp Care & Therapy',
    preferredDate: '',
    message: '',
  });

  const [formNotice, setFormNotice] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Strictly adhere to user prompt:
    // "Disable backend form submission. When a user submits the contact form, prevent default submission and instead display a clean notification or inline text message: 'Form will work after publishing'."
    setFormNotice('Form will work after publishing');
  };

  return (
    <section id="contact" className="py-20 bg-[#0c0d10] relative border-t border-[#1e2029]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#c6a87d]/15 text-[#dfca9f] border border-[#c6a87d]/30 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Find & Connect
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Visit Our Colombo Studio
          </h2>
          <p className="text-[#a59e91] text-sm sm:text-base mt-3 leading-relaxed">
            Conveniently located at 55 Kuruppu Rd, Colombo 00800. Walk-ins are warmly welcomed, though appointments are recommended for personalized hair and scalp therapy sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Contact Cards & Location Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#141620] border border-[#272b38] hover:border-[#c6a87d]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#c6a87d]/20 border border-[#c6a87d]/30 flex items-center justify-center text-[#dfca9f] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-white">Physical Address</h3>
                  <p className="text-base text-[#dfca9f] font-medium mt-1">
                    {SALON_INFO.address}
                  </p>
                  <p className="text-xs text-[#8c877b] mt-1">
                    Kuruppu Road, Colombo 8 (Borella area) with client parking available.
                  </p>
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#dfca9f] hover:underline mt-3"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-[#141620] border border-[#272b38] hover:border-[#c6a87d]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#c6a87d]/20 border border-[#c6a87d]/30 flex items-center justify-center text-[#dfca9f] shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-white">Direct Contact</h3>
                  <a
                    href={`tel:${SALON_INFO.phone}`}
                    className="text-2xl font-bold text-white hover:text-[#dfca9f] block mt-1 tracking-wide transition-colors"
                  >
                    {SALON_INFO.phone}
                  </a>
                  <p className="text-xs text-[#8c877b] mt-1">
                    Call directly or connect instantly on WhatsApp for inquiries & bookings.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <a
                      href={`tel:${SALON_INFO.phone}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1f222e] text-white text-xs font-semibold hover:bg-[#2a2e3e] transition-colors border border-[#303444]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#dfca9f]" />
                      <span>Call Now</span>
                    </a>

                    <a
                      href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                        "Hello Scalp Hair and Beauty, I would like to make an inquiry."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25d366]/20 text-[#25d366] text-xs font-semibold hover:bg-[#25d366]/30 transition-colors border border-[#25d366]/30"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-2xl bg-[#141620] border border-[#272b38]">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#c6a87d]/20 border border-[#c6a87d]/30 flex items-center justify-center text-[#dfca9f] shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-white">Opening Hours</h3>
                  <div className="mt-3 space-y-2 text-xs sm:text-sm">
                    {SALON_INFO.hours.map((h, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1 border-b border-[#212431] last:border-0">
                        <span className="text-[#a49d90]">{h.days}</span>
                        <span className="font-semibold text-white">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with "Form will work after publishing" feedback */}
          <div className="lg:col-span-7">
            <div className="bg-[#141620] rounded-2xl border border-[#282c3b] p-6 sm:p-8 shadow-xl relative">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-white">Send Us a Message or Booking Request</h3>
                <p className="text-xs sm:text-sm text-[#9f988c] mt-1">
                  Fill in your details below and our concierge team will attend to your appointment request.
                </p>
              </div>

              {/* Inline Notification Banner as required by user prompt */}
              {formNotice && (
                <div 
                  id="form-submission-notice"
                  className="mb-6 p-4 rounded-xl bg-[#212431] border-2 border-[#dfca9f] text-[#f7f4ed] shadow-lg animate-fadeIn"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#dfca9f] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm sm:text-base text-white tracking-wide">
                        {formNotice}
                      </p>
                      <p className="text-xs text-[#b8b1a3] mt-1">
                        In this demo preview mode, database storage is paused. To speak directly with the salon right now, please tap below:
                      </p>
                      <div className="flex flex-wrap gap-2.5 mt-3">
                        <a
                          href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                            `Hi Scalp Hair and Beauty! I submitted a booking request for ${formData.fullName || 'hair services'}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25d366] text-[#0d130e] text-xs font-bold hover:bg-[#20bf5b] transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Direct WhatsApp (0773158182)</span>
                        </a>

                        <a
                          href={`tel:${SALON_INFO.phone}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#2c3040] text-white text-xs font-semibold hover:bg-[#393e53] transition-colors border border-[#41475e]"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#dfca9f]" />
                          <span>Call: {SALON_INFO.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" id="salon-contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#c8c0b2] mb-1.5">
                      Full Name <span className="text-[#dfca9f]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kasun Silva"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#1a1d27] border border-[#2f3344] text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#c6a87d] transition-colors placeholder:text-[#6a675e]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-[#c8c0b2] mb-1.5">
                      Contact / WhatsApp Number <span className="text-[#dfca9f]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 077 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1a1d27] border border-[#2f3344] text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#c6a87d] transition-colors placeholder:text-[#6a675e]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Interested In */}
                  <div>
                    <label className="block text-xs font-semibold text-[#c8c0b2] mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#1a1d27] border border-[#2f3344] text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#c6a87d] transition-colors"
                    >
                      <option value="Scalp Care & Therapy">Scalp Care & Therapy</option>
                      <option value="Keratin & Hair Smoothing">Keratin & Hair Smoothing</option>
                      <option value="Balayage & Hair Coloring">Balayage & Hair Coloring</option>
                      <option value="Precision Cut & Blowout">Precision Cut & Blowout</option>
                      <option value="Bridal & Groom Dressing">Bridal & Groom Dressing</option>
                      <option value="Luxury Facial & Rejuvenation">Luxury Facial & Rejuvenation</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-semibold text-[#c8c0b2] mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#1a1d27] border border-[#2f3344] text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#c6a87d] transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#c8c0b2] mb-1.5">
                    Your Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your hair type, scalp concerns, or preferred stylist..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1a1d27] border border-[#2f3344] text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#c6a87d] transition-colors placeholder:text-[#6a675e] resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#c6a87d] via-[#dfca9f] to-[#c6a87d] text-[#121318] font-bold text-sm sm:text-base shadow-md hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Appointment Inquiry</span>
                </button>

                <p className="text-[11px] text-center text-[#7d796e] pt-1">
                  Direct appointment line: <a href={`tel:${SALON_INFO.phone}`} className="text-[#dfca9f] font-semibold">{SALON_INFO.phone}</a> • 55 Kuruppu Rd, Colombo 00800
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
