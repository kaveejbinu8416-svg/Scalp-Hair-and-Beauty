import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Sparkles, AlertCircle, Phone, MessageCircle, Check } from 'lucide-react';
import { SALON_INFO, SERVICES_DATA } from '../data/salonData';
import { ServiceItem } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: ServiceItem | null;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00 AM');
  const [notes, setNotes] = useState('');
  const [formNotice, setFormNotice] = useState<string | null>(null);

  useEffect(() => {
    if (preSelectedService) {
      setSelectedServiceId(preSelectedService.id);
    } else if (SERVICES_DATA.length > 0 && !selectedServiceId) {
      setSelectedServiceId(SERVICES_DATA[0].id);
    }
  }, [preSelectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Strictly adheres to prompt: "Disable backend form submission... display a clean notification or inline text message: 'Form will work after publishing'."
    setFormNotice('Form will work after publishing');
  };

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId);

  return (
    <div 
      id="appointment-modal-overlay" 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        id="appointment-modal-card" 
        className="relative max-w-xl w-full bg-[#141620] border border-[#303446] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8a8578] hover:text-white p-2 rounded-lg bg-[#1a1d27] hover:bg-[#252936] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#c6a87d]/20 text-[#dfca9f] border border-[#c6a87d]/40 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Book at Colombo Studio
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Schedule Your Appointment
          </h2>
          <p className="text-xs sm:text-sm text-[#9f988b] mt-1">
            Scalp Hair and Beauty • 55 Kuruppu Rd, Colombo 00800
          </p>
        </div>

        {/* Inline Submission Notice */}
        {formNotice && (
          <div className="mb-6 p-4 rounded-xl bg-[#1d202b] border-2 border-[#dfca9f] text-[#f7f4ed] shadow-lg animate-fadeIn">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#dfca9f] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm sm:text-base text-white">
                  {formNotice}
                </p>
                <p className="text-xs text-[#b8b1a3] mt-1">
                  Database storage is disabled in this preview version. To book with the salon instantly, you can contact the salon directly:
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Scalp Hair and Beauty! I would like to book "${selectedService?.name || 'Hair Treatment'}" for ${name || 'myself'} on ${date || 'upcoming date'} at ${time}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25d366] text-[#0d130e] text-xs font-bold hover:bg-[#20bf5b] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Send on WhatsApp ({SALON_INFO.phone})</span>
                  </a>

                  <a
                    href={`tel:${SALON_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2b2f3e] text-white text-xs font-medium hover:bg-[#393e52] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#dfca9f]" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Select Service */}
          <div>
            <label className="block text-xs font-semibold text-[#c8c1b3] mb-1.5">
              Select Salon Service <span className="text-[#dfca9f]">*</span>
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full bg-[#1b1d28] border border-[#2f3344] text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#c6a87d]"
            >
              {SERVICES_DATA.map((srv) => (
                <option key={srv.id} value={srv.id}>
                  {srv.name} ({srv.duration} - {srv.price})
                </option>
              ))}
            </select>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#c8c1b3] mb-1.5">
                Full Name <span className="text-[#dfca9f]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#1b1d28] border border-[#2f3344] text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#c6a87d] placeholder:text-[#6a675e]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#c8c1b3] mb-1.5">
                Contact / WhatsApp <span className="text-[#dfca9f]">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="077xxxxxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#1b1d28] border border-[#2f3344] text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#c6a87d] placeholder:text-[#6a675e]"
              />
            </div>
          </div>

          {/* Preferred Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#c8c1b3] mb-1.5">
                Preferred Date <span className="text-[#dfca9f]">*</span>
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#1b1d28] border border-[#2f3344] text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#c6a87d]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#c8c1b3] mb-1.5">
                Preferred Time Slot
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-[#1b1d28] border border-[#2f3344] text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#c6a87d]"
              >
                <option value="9:30 AM">9:30 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="1:30 PM">1:30 PM</option>
                <option value="3:30 PM">3:30 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="6:30 PM">6:30 PM</option>
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-xs font-semibold text-[#c8c1b3] mb-1.5">
              Specific Hair Concerns / Requests (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g., Sensitive scalp, dry ends, bridal trial..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#1b1d28] border border-[#2f3344] text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#c6a87d] placeholder:text-[#6a675e] resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#c6a87d] via-[#dfca9f] to-[#c6a87d] text-[#121318] font-bold text-sm sm:text-base shadow-md hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Confirm Booking Request</span>
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-[#232634] text-center">
          <p className="text-[11px] text-[#78746a]">
            Prefer immediate confirmation? Reach us directly on{' '}
            <a href={`tel:${SALON_INFO.phone}`} className="text-[#dfca9f] font-semibold">
              {SALON_INFO.phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
