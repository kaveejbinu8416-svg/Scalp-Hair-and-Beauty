import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ServiceItem } from './types';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { SALON_INFO } from './data/salonData';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = () => {
    setSelectedService(null);
    setIsBookingModalOpen(true);
  };

  const handleSelectServiceForBooking = (service: ServiceItem) => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f2ede4] flex flex-col font-sans">
      {/* 1. Persistent Fixed Announcement Top Banner */}
      <TopBanner />

      {/* Main Container with Top Padding to accommodate the fixed banner height */}
      <div className="flex-1 flex flex-col pt-[32px] sm:pt-[38px]">
        {/* 2. Navigation Bar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* 3. Hero Section */}
        <main className="flex-1">
          <Hero onOpenBooking={handleOpenBooking} />

          {/* 4. Services Section */}
          <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

          {/* 5. About Us Section */}
          <AboutSection />

          {/* 6. Gallery / Portfolio Showcase */}
          <GallerySection onOpenBooking={handleOpenBooking} />

          {/* Social Proof / Testimonials */}
          <TestimonialsSection />

          {/* 7. Contact & Location Section */}
          <ContactSection />
        </main>

        {/* 8. Footer */}
        <Footer />
      </div>

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preSelectedService={selectedService}
      />

      {/* Floating Fast-Access WhatsApp Pill (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <a
          id="floating-whatsapp-btn"
          href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
            "Hello Scalp Hair and Beauty! I'm reaching out from your website."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25d366] text-[#0c120e] font-bold text-xs shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>

        <button
          id="floating-quick-book-btn"
          onClick={handleOpenBooking}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#c6a87d] text-[#121318] font-bold text-xs shadow-xl hover:brightness-105 active:scale-95 transition-all duration-200 border border-white/20"
          title="Quick Book"
        >
          <Calendar className="w-4 h-4" />
          <span className="hidden sm:inline">Book</span>
        </button>
      </div>
    </div>
  );
}
