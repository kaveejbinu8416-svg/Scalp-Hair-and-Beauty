import React from 'react';
import { Sparkles, MapPin, Award, HeartHandshake, ShieldCheck, Check, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0c0d10] relative overflow-hidden border-t border-[#1e2029]">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c6a87d]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2a413a]/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition & Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative rounded-2xl overflow-hidden border border-[#2b2e3b] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=900&auto=format&fit=crop"
                  alt="Scalp Hair and Beauty Interior Colombo"
                  className="w-full h-[440px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-black/20" />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#161822] border border-[#c6a87d]/40 rounded-2xl p-5 shadow-2xl shadow-black/80 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#c6a87d]/20 border border-[#c6a87d]/30 flex items-center justify-center text-[#dfca9f]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-serif text-2xl font-bold text-white">Colombo 00800</span>
                    <p className="text-xs text-[#9c968a]">55 Kuruppu Road Landmark</p>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Guarantee Tag */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#161822]/90 backdrop-blur-md border border-[#2d303f] rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#dfca9f]">
                  <Sparkles className="w-4 h-4 text-[#c6a87d]" />
                  <span>Trichology-Driven Approach</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#c6a87d]/15 text-[#dfca9f] border border-[#c6a87d]/30">
              <MapPin className="w-3.5 h-3.5" />
              Our Story & Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.18]">
              Where Hair Health Meets <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#dfca9f] to-[#c6a87d]">
                High-Fashion Artistry
              </span>
            </h2>

            <p className="text-[#a8a194] text-sm sm:text-base leading-relaxed">
              Nestled on the serene Kuruppu Road in Colombo 00800, <strong className="text-white">Scalp Hair and Beauty</strong> was established with a singular mission: to treat the hair from the root, providing clinical-level scalp revitalization alongside world-class styling, coloring, and bridal dressing.
            </p>

            <p className="text-[#a8a194] text-sm sm:text-base leading-relaxed">
              Too often, traditional salons compromise strand vitality for quick cosmetic results. We believe genuine beauty begins with a healthy, nourished scalp ecosystem. Every client receives an individual consultation, tailored treatments using European salon-grade formulations, and unhurried hospitality.
            </p>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#14161f] border border-[#262835]">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Scalp Health Priority</span>
                </div>
                <p className="text-xs text-[#8f897d] leading-normal">
                  Follicle-friendly formulas and anti-hairfall treatments curated for Sri Lankan tropical climate and water conditions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14161f] border border-[#262835]">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#dfca9f]" />
                  <span>Personalized Consultations</span>
                </div>
                <p className="text-xs text-[#8f897d] leading-normal">
                  Dedicated master stylists who take time to listen, customize tones to skin undertones, and recommend at-home care.
                </p>
              </div>
            </div>

            {/* Key Service Highlights */}
            <div className="space-y-2 pt-2">
              {[
                'Specialized Trichology-inspired Scalp Detox & Hydration Spa',
                'Ammonia-free French Balayage & Dimensional Color Melting',
                'Royal Bridal Suites for Brides, Grooms, and Entourages',
                'Located conveniently at 55 Kuruppu Rd with dedicated parking'
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#d4ccbe]">
                  <div className="w-4 h-4 rounded-full bg-[#c6a87d]/20 flex items-center justify-center text-[#dfca9f] shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Address & Hours Callout Box */}
            <div className="p-4 rounded-xl bg-[#171922] border border-[#2d303f] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#c6a87d]/20 flex items-center justify-center text-[#dfca9f]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Visit Our Colombo Studio</p>
                  <p className="text-xs text-[#9d978a]">{SALON_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#d3cbbe]">
                <Clock className="w-3.5 h-3.5 text-[#c6a87d]" />
                <span>Tue - Sun: 9:00 AM – 7:30 PM</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
