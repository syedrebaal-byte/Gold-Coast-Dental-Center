import React from 'react';
import { Calendar, Phone, ArrowUpRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200">
      {/* Background ambient warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-[#FAF9F6] to-[#FAF9F6] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Editorial Sub-header / Location Kicker */}
        <div className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-widest mb-4">
          <span className="text-[#A8895B] font-semibold">Fort Lauderdale, Florida</span>
          <span aria-hidden="true">·</span>
          <span>East Commercial Blvd</span>
          <span aria-hidden="true">·</span>
          <span>Dr. Jerry Karedan, DMD</span>
        </div>

        {/* Hero Headline & Intro Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-8">
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-stone-900 leading-[1.08] text-balance">
              Elevated Dentistry, Thoughtfully Practiced in Fort Lauderdale.
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between pt-2">
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal mb-6">
              A private practice led by Dr. Jerry Karedan, DMD. Combining advanced Pankey occlusal science with individualized aesthetic care in a peaceful, unhurried coastal environment.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 active:scale-[0.99] rounded-md transition-all shadow-sm group"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>Reserve Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
              </button>

              <a
                href="tel:9547715300"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 text-stone-500" />
                <span className="font-mono tabular-nums">{CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Marquee Visual Hero Banner */}
        <div className="relative rounded-lg overflow-hidden border border-stone-200/90 shadow-sm bg-stone-100 aspect-16/9 max-h-[580px] w-full group">
          <img
            src="/assets/images/hero.jpg"
            alt="Gold Coast Dental Center luxury operatory suite overlooking Fort Lauderdale coastal horizon"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          />

          {/* Quiet bottom banner overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37] mb-1">
                Private Operatory Experience
              </p>
              <h2 className="text-lg sm:text-xl font-medium text-stone-100">
                Architectural calm, state-of-the-art 3D imaging, and relationship-driven care.
              </h2>
            </div>

            <div className="flex items-center gap-4 text-xs text-stone-300 whitespace-nowrap">
              <span>Fort Lauderdale Clinic Suite</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-medium">Welcoming New Patients</span>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Trust Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-6 border-t border-stone-200">
          <div>
            <div className="text-xs text-stone-500 uppercase tracking-wider font-medium mb-1">Clinical Leadership</div>
            <div className="text-base font-semibold text-stone-900">Dr. Jerry Karedan, DMD</div>
            <div className="text-xs text-stone-500 mt-0.5">U. of Louisville · Practicing since 2017</div>
          </div>

          <div>
            <div className="text-xs text-stone-500 uppercase tracking-wider font-medium mb-1">Philosophy</div>
            <div className="text-base font-semibold text-stone-900">Pankey Institute Alumnus</div>
            <div className="text-xs text-stone-500 mt-0.5">Comprehensive occlusal & jaw harmony</div>
          </div>

          <div>
            <div className="text-xs text-stone-500 uppercase tracking-wider font-medium mb-1">Coverage & Access</div>
            <div className="text-base font-semibold text-stone-900">Medicare & PPO Networks</div>
            <div className="text-xs text-stone-500 mt-0.5">CareCredit 0% financing options</div>
          </div>

          <div>
            <div className="text-xs text-stone-500 uppercase tracking-wider font-medium mb-1">Clinic Schedule</div>
            <div className="text-base font-semibold text-stone-900 tabular-nums">Mon–Thu: 7:30 AM–5 PM</div>
            <div className="text-xs text-stone-500 mt-0.5">Same-day emergency availability</div>
          </div>
        </div>
      </div>
    </section>
  );
};
