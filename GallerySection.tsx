import React, { useState, useMemo } from 'react';
import { Sparkles, Eye, X, MessageCircle, Calendar } from 'lucide-react';
import { GALLERY_DATA, SALON_INFO } from '../data/salonData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'makeovers', label: 'Makeovers' },
    { id: 'colors', label: 'Colors & Balayage' },
    { id: 'bridal', label: 'Bridal Couture' },
    { id: 'scalp', label: 'Scalp & Care' },
    { id: 'ambiance', label: 'Salon Ambiance' },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_DATA;
    return GALLERY_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="gallery" className="py-20 bg-[#0e0f14] relative border-t border-[#1e2029]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#c6a87d]/15 text-[#dfca9f] border border-[#c6a87d]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Visual Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Crafted Transformations & Studio Ambiance
          </h2>
          <p className="text-[#a59e91] text-sm sm:text-base mt-3 leading-relaxed">
            Witness our dedication to hair vitality, bespoke bridal couture, radiant balayage, and the serene sanctuary at 55 Kuruppu Rd, Colombo.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#c6a87d] text-[#121318] font-bold shadow-md shadow-[#c6a87d]/20'
                  : 'bg-[#151720] text-[#c4bcaa] hover:text-white hover:bg-[#202330] border border-[#272a38]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#161822] border border-[#272a38] hover:border-[#c6a87d]/60 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/70 aspect-[4/5]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Eye Icon Button */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-8 h-8 rounded-full bg-[#161822]/80 backdrop-blur-md border border-[#c6a87d]/40 flex items-center justify-center text-[#dfca9f]">
                  <Eye className="w-4 h-4" />
                </span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#dfca9f] block mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="text-sm sm:text-base font-serif font-bold text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#9f988b] mb-4">
            Inspired by our work? Book a consultation with our master stylists today.
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c6a87d] to-[#deb887] text-[#121318] font-bold text-sm shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Hair Appointment</span>
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-[#141620] border border-[#323647] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full h-80 sm:h-96 bg-black relative">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Info */}
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#dfca9f]">
                {activeItem.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1 mb-2">
                {activeItem.title}
              </h3>
              <p className="text-sm text-[#a69f91] mb-6 leading-relaxed">
                {activeItem.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#232634]">
                <div className="text-xs text-[#878276]">
                  Salon Location: 55 Kuruppu Rd, Colombo 00800
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Scalp Hair and Beauty, I'm inquiring about the "${activeItem.title}" style from your gallery.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25d366] text-[#0d130e] font-bold text-xs hover:bg-[#20bf5b] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire Style</span>
                  </a>

                  <button
                    onClick={() => {
                      setActiveItem(null);
                      onOpenBooking();
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#c6a87d] text-[#121318] font-bold text-xs hover:brightness-105 transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Service</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
