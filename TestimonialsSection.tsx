import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0c0d10] relative border-t border-[#1e2029]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#c6a87d]/15 text-[#dfca9f] border border-[#c6a87d]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Loved by Colombo's Discerning Clients
          </h2>
          <p className="text-[#a19a8d] text-sm mt-2">
            Real experiences from clients who entrusted their hair transformations and bridal days to Scalp Hair and Beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-[#141620] border border-[#262938] hover:border-[#c6a87d]/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#45423c]" />
                </div>

                {/* Comment */}
                <p className="text-sm text-[#cac1b2] italic leading-relaxed mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#20222e]">
                <h4 className="font-serif text-base font-bold text-white">
                  {review.name}
                </h4>
                <p className="text-xs text-[#c6a87d] font-medium">
                  {review.service}
                </p>
                <span className="text-[11px] text-[#716d63]">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
