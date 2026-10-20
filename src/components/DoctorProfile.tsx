import React from 'react';
import { Award, GraduationCap, HeartHandshake, Shield, Sparkles } from 'lucide-react';
import { DR_JERRY } from '../data/clinicData';

export const DoctorProfile: React.FC = () => {
  return (
    <section id="doctor" className="py-20 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#A8895B] uppercase tracking-wider mb-2">
          <GraduationCap className="w-4 h-4" />
          <span>Clinical Leadership & Philosophy</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Doctor Portrait & Quick Credentials */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-stone-200/90 shadow-sm bg-stone-100 aspect-3/4 max-w-md mx-auto lg:max-w-none">
              <img
                src={DR_JERRY.image}
                alt="Dr. Jerry Karedan, DMD at Gold Coast Dental Center in Fort Lauderdale"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-transparent p-6 text-white">
                <div className="text-xl font-medium tracking-tight font-editorial">
                  {DR_JERRY.name}, {DR_JERRY.degrees}
                </div>
                <div className="text-xs text-[#D4AF37] font-medium tracking-wide mt-0.5">
                  {DR_JERRY.title} · {DR_JERRY.yearsActive}
                </div>
                <div className="text-[11px] text-stone-300 mt-2 flex items-center gap-2">
                  <span>Pankey Institute Alumnus</span>
                  <span aria-hidden="true">·</span>
                  <span>U. of Louisville DMD</span>
                </div>
              </div>
            </div>

            {/* Affiliations Badge List (Clean, non-pill text) */}
            <div className="mt-6 p-5 rounded-lg bg-white border border-stone-200/80 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Accreditations & Professional Memberships
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                {DR_JERRY.affiliations.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Narrative Biography & Pankey Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
                “Dentistry should never feel hurried or intimidating.”
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-4 leading-relaxed">
                {DR_JERRY.quote}
              </p>
            </div>

            {/* Paragraph Bio */}
            <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
              {DR_JERRY.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Verified Academic Journey */}
            <div className="pt-6 border-t border-stone-200 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
                Educational Foundation & Continuing Excellence
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {DR_JERRY.education.map((edu, i) => (
                  <div key={i} className="p-4 rounded-md bg-stone-100/60 border border-stone-200/70">
                    <div className="text-xs font-semibold text-stone-900 leading-snug">
                      {edu.institution}
                    </div>
                    <div className="text-xs text-[#A8895B] font-medium mt-1">
                      {edu.degree}
                    </div>
                    {edu.detail && (
                      <div className="text-[11px] text-stone-500 mt-1 leading-normal">
                        {edu.detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Pillars of Care */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-200 text-xs">
              <div>
                <span className="font-semibold text-stone-900 block mb-1">Pankey Occlusal Method</span>
                <p className="text-stone-600 leading-relaxed">
                  Treating the entire masticatory system—muscles, temporomandibular joints, and teeth—as an integrated harmony.
                </p>
              </div>
              <div>
                <span className="font-semibold text-stone-900 block mb-1">Psychology-Informed Comfort</span>
                <p className="text-stone-600 leading-relaxed">
                  Leveraging Dr. Jerry’s psychology background to systematically dismantle dental anxiety before treatment begins.
                </p>
              </div>
              <div>
                <span className="font-semibold text-stone-900 block mb-1">Biomimetic Longevity</span>
                <p className="text-stone-600 leading-relaxed">
                  Choosing materials that replicate the exact elasticity, thermal expansion, and optical beauty of natural human enamel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
