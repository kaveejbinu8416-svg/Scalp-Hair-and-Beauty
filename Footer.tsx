import React from 'react';
import { Scissors, MapPin, Phone, Clock, ArrowUpRight, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="bg-[#090a0d] border-t border-[#1e2029] text-[#a19b8f] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#1b1c24]">
          
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2a2b36] to-[#14151c] border border-[#c6a87d]/40 flex items-center justify-center text-[#dfca9f]">
                <Scissors className="w-5 h-5 text-[#dfca9f]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-white">
                  SCALP
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8c867a] font-medium -mt-1">
                  Hair & Beauty
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8f887b] leading-relaxed max-w-md">
              A bespoke hair salon & beauty parlor located in Colombo 00800. Specializing in trichological scalp treatments, balayage color artistry, bridal dressing, and restorative luxury care.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Scalp Hair and Beauty, I would like to book an appointment."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#181a24] hover:bg-[#222533] text-[#25d366] text-xs font-semibold border border-[#2d3142] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp ({SALON_INFO.phone})</span>
              </a>

              <a
                href={`tel:${SALON_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#181a24] hover:bg-[#222533] text-white text-xs font-semibold border border-[#2d3142] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#dfca9f]" />
                <span>{SALON_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#dfca9f] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfca9f] transition-colors">Salon Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#dfca9f] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#dfca9f] transition-colors">Gallery Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#dfca9f] transition-colors">Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-[#dfca9f] transition-colors">Scalp Follicle Detox</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfca9f] transition-colors">Keratin Silk Infusion</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfca9f] transition-colors">French Balayage</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfca9f] transition-colors">Bridal & Groom Dressing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfca9f] transition-colors">Collagen Facials</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Studio Location
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-[#c8c0b2]">
                <MapPin className="w-4 h-4 text-[#c6a87d] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#c8c0b2]">
                <Phone className="w-4 h-4 text-[#c6a87d] shrink-0" />
                <a href={`tel:${SALON_INFO.phone}`} className="hover:text-[#dfca9f]">
                  {SALON_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-[#a39c8f]">
                <Clock className="w-4 h-4 text-[#8a8477] shrink-0 mt-0.5" />
                <div>
                  <p>Tue – Sat: 9:00 AM – 7:30 PM</p>
                  <p>Sun: 10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Developer Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#767166]">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">Scalp Hair and Beauty</strong>. All rights reserved. 55 Kuruppu Rd, Colombo 00800.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[#a59f92]">
              Website Crafted by <span className="text-[#dfca9f] font-semibold">{SALON_INFO.developerName}</span>
            </span>

            <a
              href={`https://wa.me/${SALON_INFO.makeItLiveWhatsApp}?text=${encodeURIComponent(
                "Hi Kaveej! Inquiring about making the Scalp Hair and Beauty website live."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#c6a87d] hover:text-[#f3e3be] underline decoration-[#c6a87d]/40 underline-offset-2"
            >
              <span>Make It Live</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
