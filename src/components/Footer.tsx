import React from 'react';
import { CLINIC_INFO, DR_JERRY } from '../data/clinicData';
import { Phone, MapPin, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 text-xs border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1 & 2: Clinic Wordmark & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-editorial text-2xl text-white font-medium block">
                Gold Coast Dental Center
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A880] font-sans font-semibold">
                Fort Lauderdale, Florida
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Led by Dr. Jerry Karedan, DMD. Delivering relationship-based cosmetic dentistry, guided dental implants, Invisalign, and gentle restorative oral healthcare.
            </p>
            <div className="pt-2 text-[11px] text-stone-500 space-y-1">
              <div>Pankey Institute Alumnus Practice</div>
              <div>Registered Medicare Provider · Major PPO Networks Accepted</div>
            </div>
          </div>

          {/* Col 3: Key Treatments */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-200 block">
              Dental Treatments
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Porcelain Veneers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  3D Dental Implants
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Invisalign® Clear Aligners
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  All-Ceramic Crowns
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Same-Day Emergency Care
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Sedation Dentistry
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Practice & Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-200 block">
              The Practice
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#doctor" className="hover:text-white transition-colors">
                  About Dr. Jerry Karedan, DMD
                </a>
              </li>
              <li>
                <a href="#smile-studio" className="hover:text-white transition-colors">
                  3D Smile Studio
                </a>
              </li>
              <li>
                <a href="#patient-experience" className="hover:text-white transition-colors">
                  Comfort Lounge & Technology
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Directions & Parking
                </a>
              </li>
              <li>
                <a href="tel:9547715300" className="hover:text-white transition-colors">
                  Emergency Protocol
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Clinic Hours & Contacts */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-200 block">
              Office Hours
            </span>
            <div className="space-y-1.5 text-xs text-stone-400">
              <div>
                <span className="text-stone-300 block">Mon – Thu</span>
                <span className="font-mono tabular-nums">7:30 AM – 5:00 PM</span>
              </div>
              <div>
                <span className="text-stone-300 block">Friday</span>
                <span>Emergency On-Call</span>
              </div>
              <div>
                <span className="text-stone-300 block">Saturday – Sunday</span>
                <span>Closed</span>
              </div>
              <div className="pt-2">
                <a
                  href="tel:9547715300"
                  className="font-mono text-white text-xs font-semibold hover:text-[#C5A880] transition-colors tabular-nums block"
                >
                  (954) 771-5300
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Medical Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Gold Coast Dental Center. All rights reserved. 2467 E Commercial Blvd, Fort Lauderdale, FL 33308.
          </div>

          <div className="flex items-center gap-4">
            <span>HIPAA Compliant</span>
            <span aria-hidden="true">·</span>
            <span>ADA Accessible Facility</span>
            <span aria-hidden="true">·</span>
            <a href="https://www.goldcoastdentalcenter.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Original Practice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
