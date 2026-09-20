import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const TopBanner: React.FC = () => {
  return (
    <div 
      id="demo-top-banner" 
      className="fixed top-0 left-0 right-0 z-50 bg-[#14151b]/95 border-b border-[#c6a87d]/35 text-[#f5efe6] shadow-md shadow-black/40 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-1.5 sm:py-2 flex items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
        {/* Left: Announcement Tag & Text */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] sm:text-xs font-semibold uppercase tracking-wider bg-[#c6a87d]/20 text-[#dfca9f] border border-[#c6a87d]/40 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Demo
          </span>
          <p className="truncate font-medium text-[#e4decb] tracking-tight sm:tracking-normal text-[11px] sm:text-xs md:text-sm">
            <span className="font-semibold text-white">DEMO</span>
            <span className="hidden xs:inline font-semibold text-white"> VERSION</span> – Preview for Scalp Hair and Beauty, by{' '}
            <span className="text-[#e2c79f] font-semibold underline decoration-[#c6a87d]/50 underline-offset-2">
              {SALON_INFO.developerName}
            </span>
          </p>
        </div>

        {/* Right: Make It Live Action Button */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            id="btn-make-it-live"
            href={`https://wa.me/${SALON_INFO.makeItLiveWhatsApp}?text=${encodeURIComponent(
              "Hi Kaveej! I checked the Scalp Hair and Beauty demo website and would love to make it live."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-[#d8b888] via-[#e5cf9e] to-[#c6a87d] text-[#14151a] font-bold text-[11px] sm:text-xs md:text-sm shadow-sm hover:brightness-110 active:scale-95 transition-all duration-200 border border-[#f5e3bc] whitespace-nowrap"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#14151a]" />
            <span>Make It Live</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
