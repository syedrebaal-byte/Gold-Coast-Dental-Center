import React from 'react';
import { Sparkles, Scan, ShieldAlert, Coffee, Headphones, Heart } from 'lucide-react';
import { CLINIC_FEATURES } from '../data/clinicData';

export const TechnologyComfort: React.FC = () => {
  return (
    <section id="patient-experience" className="py-20 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#A8895B] uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Patient-Centered Atmosphere</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
              Hospitality Standards Meet Advanced Dental Science
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-4 leading-relaxed">
              We reimagined the dental office from the patient’s perspective. From natural travertine surfaces and curated acoustic wood paneling to zero-gag intraoral 3D scans, our Fort Lauderdale clinic is built to replace apprehension with tranquility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-stone-900">
                  <Scan className="w-4 h-4 text-[#C5A880]" />
                  <span>Mess-Free 3D Scans</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Fast optical scanning replaces rubbery impression trays for perfect-fitting crowns and aligners.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-stone-900">
                  <Headphones className="w-4 h-4 text-[#C5A880]" />
                  <span>Noise-Cancelling Audio</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Stream your favorite playlist or podcast while resting in our memory foam treatment suites.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-stone-900">
                  <Heart className="w-4 h-4 text-[#C5A880]" />
                  <span>Sedation & Anxiety Relief</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Nitrous oxide and gentle oral conscious sedation options ensure you remain comfortable throughout.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-stone-900">
                  <Coffee className="w-4 h-4 text-[#C5A880]" />
                  <span>Concierge Hospitality</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Private relaxation lounge with artisanal refreshments, warm neck pillows, and unhurried appointments.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-stone-200/90 shadow-sm aspect-4/3 group">
              <img
                src="/assets/images/lounge.jpg"
                alt="Gold Coast Dental Center boutique reception and patient lounge"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent p-5 text-white">
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-medium block">
                  The Sanctuary Lounge
                </span>
                <span className="text-sm font-medium text-stone-100">
                  A calming environment where appointments start promptly and questions are answered without rush.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-stone-200">
          {CLINIC_FEATURES.map((feature, idx) => (
            <div key={idx} className="p-5 rounded-lg bg-white border border-stone-200/80">
              <div className="text-xs font-mono text-stone-400 mb-2 tabular-nums">
                0{idx + 1}
              </div>
              <h3 className="text-sm font-semibold text-stone-900 mb-1.5">
                {feature.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
