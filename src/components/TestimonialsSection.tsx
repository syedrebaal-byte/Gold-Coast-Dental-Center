import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#A8895B] uppercase tracking-wider mb-2">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Real Experiences</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
              Patient Voices From Fort Lauderdale
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-xl leading-relaxed">
              Genuine feedback from South Florida neighbors who trust Dr. Jerry Karedan and the Gold Coast Dental team with their oral health.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-600 bg-white p-3 rounded-md border border-stone-200/80 shrink-0">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
              ))}
            </div>
            <span className="font-semibold text-stone-900">5.0 Star Rating</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Fort Lauderdale Dental Practice</span>
          </div>
        </div>

        {/* Testimonials Grid (Strict Zero-Pill adherence) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-7 rounded-lg bg-white border border-stone-200/80 shadow-2xs"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex text-[#D4AF37] mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed italic mb-6">
                  “{t.text}”
                </p>
              </div>

              {/* Author & Unboxed Metadata with · separator */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                <div>
                  <span className="font-semibold text-stone-900">{t.author}</span>
                  <span className="text-stone-500 ml-1.5">({t.location})</span>
                </div>
                <div className="flex items-center gap-2 text-stone-500">
                  <span className="text-stone-700 font-medium">{t.treatment}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-700">{t.verifiedSource}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
