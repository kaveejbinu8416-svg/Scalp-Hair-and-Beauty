import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, Scissors, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const bannerHeight = 34;
      const navHeight = 58;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (bannerHeight + navHeight);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header 
      id="main-navbar" 
      className="sticky top-[32px] sm:top-[38px] z-40 bg-[#0c0d10]/95 backdrop-blur-lg border-b border-[#262833]/80 transition-all"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-18 md:h-20">
          {/* Logo & Salon Identity */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none"
            id="nav-brand-logo"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#2a2b36] via-[#1b1c24] to-[#12131a] border border-[#c6a87d]/40 flex items-center justify-center text-[#dfca9f] shadow-inner group-hover:border-[#dfca9f] transition-all duration-300 shrink-0">
              <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfca9f] transition-transform duration-300 group-hover:rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg md:text-xl font-bold tracking-wider text-[#f8f5ee] group-hover:text-[#dfca9f] transition-colors leading-tight">
                SCALP
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#a59f93] font-medium leading-none">
                Hair & Beauty
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 text-sm font-medium text-[#cbc4b6] hover:text-[#dfca9f] hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Actions (Phone & Booking CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-phone-quicklink"
              href={`tel:${SALON_INFO.phone}`}
              className="flex items-center gap-2 text-xs font-semibold text-[#c8bfb0] hover:text-[#dfca9f] px-3 py-2 rounded-lg border border-transparent hover:border-[#2d303d] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#dfca9f]" />
              <span>{SALON_INFO.phone}</span>
            </a>

            <button
              id="header-book-appointment-btn"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#c6a87d] to-[#deb887] text-[#0f1015] font-semibold text-sm shadow-md hover:shadow-[#c6a87d]/20 hover:brightness-105 active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#cbc4b6] hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer" 
          className="sm:hidden bg-[#111218] border-b border-[#292c38] px-4 pt-3 pb-6 space-y-3 animate-fadeIn"
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-base font-medium text-[#e2ded5] hover:text-[#dfca9f] hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#232631] flex flex-col gap-2.5">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-[#cfc7b9] bg-[#1a1c24] border border-[#2b2e3b] rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#dfca9f]" />
              <span>Call Salon: {SALON_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-[#c6a87d] to-[#dfca9f] text-[#0f1015] font-semibold text-sm shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
