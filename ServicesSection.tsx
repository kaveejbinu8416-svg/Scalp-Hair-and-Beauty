import React, { useState, useMemo } from 'react';
import { Sparkles, Clock, CheckCircle2, MessageCircle, Calendar, Search } from 'lucide-react';
import { SERVICES_DATA, SALON_INFO } from '../data/salonData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'scalp', label: 'Scalp Care' },
    { id: 'treatments', label: 'Hair Treatments' },
    { id: 'styling-color', label: 'Styling & Coloring' },
    { id: 'bridal-groom', label: 'Bridal & Groom' },
    { id: 'facials', label: 'Facials & Grooming' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="py-20 bg-[#0e0f14] relative border-t border-[#1e2029]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#c6a87d]/15 text-[#dfca9f] border border-[#c6a87d]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Salon Menu
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Exceptional Services, Uncompromising Care
          </h2>
          <p className="text-[#a59e91] text-sm sm:text-base mt-3 leading-relaxed">
            From deep revitalizing scalp spas to master-crafted bridal transformations and European hair coloring, experience tailored luxury at 55 Kuruppu Rd, Colombo.
          </p>
        </div>

        {/* Filters & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#c6a87d] text-[#121318] font-bold shadow-md shadow-[#c6a87d]/20'
                    : 'bg-[#171922] text-[#c4bcaa] hover:text-white hover:bg-[#212431] border border-[#272a38]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#757269] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#151720] border border-[#272a38] text-white text-xs sm:text-sm rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:border-[#c6a87d] transition-colors placeholder:text-[#6a675e]"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-[#13151c] rounded-2xl border border-[#262836] p-8">
            <p className="text-[#a69f91] text-base">No services found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#c6a87d]/20 text-[#dfca9f] text-sm font-semibold hover:bg-[#c6a87d]/30 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="relative bg-gradient-to-b from-[#14161f] to-[#101117] rounded-2xl border border-[#262936] hover:border-[#c6a87d]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 group"
              >
                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#c6a87d] text-[#121318]">
                      Popular
                    </span>
                  </div>
                )}

                <div>
                  {/* Category & Duration */}
                  <div className="flex items-center gap-3 text-xs text-[#9d978a] mb-2">
                    <span className="text-[#c6a87d] font-semibold uppercase tracking-wider text-[11px]">
                      {service.categoryLabel}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#868175]" />
                      {service.duration}
                    </span>
                  </div>

                  {/* Service Title & Price */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#dfca9f] transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  <div className="text-lg font-bold text-[#dfca9f] mb-3">
                    {service.price}
                  </div>

                  {/* Description */}
                  <p className="text-[#a49e91] text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Benefits Checklist */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-[#1e202b]">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#cfc8bc]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => onSelectServiceForBooking(service)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#c6a87d] to-[#dec193] text-[#121318] font-bold text-xs sm:text-sm hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Service</span>
                  </button>

                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Scalp Hair and Beauty! I would like to inquire about "${service.name}" (${service.price}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Inquire on WhatsApp"
                    className="p-2.5 rounded-xl bg-[#1d202a] hover:bg-[#252936] text-[#25d366] border border-[#2e3242] transition-colors flex items-center justify-center shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Service Inquiry Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#141620] border border-[#272b38] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-xl font-bold text-white">Need a Customized Treatment or Bridal Consultation?</h4>
            <p className="text-xs sm:text-sm text-[#a39c8f] mt-1">
              Our stylists will conduct a complimentary hair & scalp health assessment before any chemical or styling work.
            </p>
          </div>
          <a
            href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
              "Hi! I would like to book a personalized hair & scalp consultation at Scalp Hair and Beauty Colombo."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25d366] text-[#0d120e] font-bold text-xs sm:text-sm hover:bg-[#22bf5b] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consult via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
