import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Top utility alert: Office hours & emergency call */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 tracking-wide font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="hidden sm:inline">Fort Lauderdale, FL · 2467 E Commercial Blvd</span>
            <span className="sm:hidden">Fort Lauderdale · East Commercial Blvd</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Mon–Thu: 7:30 AM – 5:00 PM</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-stone-400 hidden md:inline">Dental Emergency or Questions?</span>
            <a
              href="tel:9547715300"
              className="text-white hover:text-[#C5A880] transition-colors font-medium flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              <span className="tabular-nums font-mono">{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Strict 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex flex-col text-left group whitespace-nowrap shrink-0">
          <span className="font-editorial text-2xl sm:text-[1.75rem] font-medium tracking-tight text-stone-900 group-hover:text-stone-700 transition-colors">
            Gold Coast Dental
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500 font-sans -mt-1 font-semibold">
            Fort Lauderdale Center
          </span>
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-stone-600">
          <a href="#services" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Treatments
          </a>
          <a href="#doctor" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Dr. Jerry
          </a>
          <a href="#smile-studio" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Smile Studio
          </a>
          <a href="#patient-experience" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Experience & Care
          </a>
          <a href="#location" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Location
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 active:scale-[0.99] rounded-md transition-all whitespace-nowrap shadow-sm hover:shadow"
          >
            <Calendar className="w-4 h-4 text-[#C5A880]" />
            <span>Request Appointment</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-md focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-b border-stone-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 text-base font-medium text-stone-800">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-950 transition-colors"
            >
              Treatments & Services
            </a>
            <a
              href="#doctor"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-950 transition-colors"
            >
              About Dr. Jerry Karedan, DMD
            </a>
            <a
              href="#smile-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-950 transition-colors"
            >
              Smile Studio & Anatomy
            </a>
            <a
              href="#patient-experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-950 transition-colors"
            >
              Technology & Comfort Lounge
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-950 transition-colors"
            >
              Location & Hours
            </a>
          </nav>

          <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-white bg-stone-900 rounded-md"
            >
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <span>Request Appointment</span>
            </button>
            <a
              href="tel:9547715300"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md"
            >
              <Phone className="w-4 h-4 text-stone-700" />
              <span>Call (954) 771-5300</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
