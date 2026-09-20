import React from 'react';
import { Sparkles, Calendar, MapPin, Star, ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 110;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-[#0c0d10]"
    >
      {/* Subtle Background Glows & Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#c6a87d]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#29423b]/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#20232d_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Badge: Colombo Location & Rating */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1b1d24] border border-[#353949]/70 text-xs sm:text-sm text-[#e6decb]">
              <div className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span className="font-semibold text-white">4.9/5 Rating</span>
              <span className="text-[#65697a]">•</span>
              <span className="text-[#d8c29d] flex items-center gap-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#c6a87d]" />
                Colombo 00800
              </span>
            </div>

            {/* Main Title with Elegant Typography */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#f7f4ed] tracking-tight leading-[1.12]">
                Artistry in Hair Care & <br className="hidden sm:inline" />
                <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#dfca9f] via-[#f7e6c4] to-[#c6a87d]">
                  Bespoke Beauty
                </span>
              </h1>
              <p className="text-sm sm:text-base text-[#a59e91] font-normal max-w-xl leading-relaxed pt-2">
                Colombo’s premier destination for specialized scalp therapies, couture hair coloring, bridal styling, and restorative skin rejuvenation at 
                <span className="text-[#dfca9f] font-medium"> 55 Kuruppu Rd, Colombo 00800</span>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2 w-full sm:w-auto">
              <button
                id="hero-book-now-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#c6a87d] via-[#e5d0a6] to-[#c6a87d] text-[#121318] font-bold text-sm sm:text-base shadow-lg shadow-[#c6a87d]/20 hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#121318]" />
                <span>Book Appointment</span>
              </button>

              <button
                id="hero-explore-services-btn"
                onClick={() => scrollToSection('#services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#171922] hover:bg-[#202330] text-[#eae4d5] font-semibold text-sm sm:text-base border border-[#2f3240] hover:border-[#c6a87d]/50 transition-all cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-[#c6a87d]" />
              </button>

              <a
                id="hero-call-direct-btn"
                href={`tel:${SALON_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-[#cbc3b2] hover:text-[#dfca9f] text-sm font-medium transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#dfca9f]" />
                <span>Call {SALON_INFO.phone}</span>
              </a>
            </div>

            {/* Micro Highlights Row */}
            <div className="pt-6 border-t border-[#20232c] grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-white">100%</div>
                <div className="text-xs text-[#8c887e]">Scalp Health First</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#dfca9f]">15k+</div>
                <div className="text-xs text-[#8c887e]">Transformations</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-white">6 Days</div>
                <div className="text-xs text-[#8c887e]">Weekly Open</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Floating Feature Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-[#2d303f] shadow-2xl shadow-black/80 group">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop"
                  alt="Scalp Hair and Beauty luxury salon in Colombo"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-black/20 to-transparent" />

                {/* Overlay Caption on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#12141c]/85 backdrop-blur-md border border-[#2b2e3b]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-white">Scalp & Hair Therapy Studio</h4>
                      <p className="text-xs text-[#c6a87d]">55 Kuruppu Rd, Colombo 00800</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Open Today
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Badge 1 */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-3.5 rounded-xl bg-[#161822]/90 backdrop-blur-md border border-[#373a4b] shadow-xl flex items-center gap-3 animate-bounce-gentle">
                <div className="w-10 h-10 rounded-lg bg-[#c6a87d]/20 border border-[#c6a87d]/40 flex items-center justify-center text-[#dfca9f]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Signature Scalp Spa</p>
                  <p className="text-[11px] text-[#9b968b]">Trichology-Inspired Care</p>
                </div>
              </div>

              {/* Floating Highlight Badge 2 */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 p-3.5 rounded-xl bg-[#161822]/90 backdrop-blur-md border border-[#373a4b] shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Certified Experts</p>
                  <p className="text-[11px] text-[#9b968b]">Premium European Formulations</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
