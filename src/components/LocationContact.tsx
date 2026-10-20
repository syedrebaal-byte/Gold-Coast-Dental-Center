import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Car, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationContact: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${CLINIC_INFO.name}, ${CLINIC_INFO.address}, ${CLINIC_INFO.cityStateZip}`
  )}`;

  return (
    <section id="location" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#A8895B] uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Fort Lauderdale Practice</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
              Visit Our Commercial Blvd Clinic
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-xl leading-relaxed">
              Conveniently situated in East Fort Lauderdale, minutes from the barrier island and Federal Highway corridor.
            </p>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-stone-900 bg-white hover:bg-stone-50 border border-stone-300 rounded-md transition-colors shadow-2xs shrink-0 self-start md:self-auto"
          >
            <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Open in Google Maps</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Grid */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address & Direct Phone */}
            <div className="p-6 rounded-lg bg-white border border-stone-200/90 shadow-2xs space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-stone-900">{CLINIC_INFO.name}</h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-xs text-stone-600">
                    {CLINIC_INFO.cityStateZip}
                  </p>
                  <p className="text-[11px] text-[#A8895B] font-medium mt-1">
                    {CLINIC_INFO.neighborhood}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-stone-500 block">Primary Telephone</span>
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/\D/g, '')}`}
                    className="text-stone-900 font-mono font-semibold text-sm hover:underline tabular-nums"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                  <span className="text-stone-400 block text-[11px] mt-0.5">
                    Office Line: {CLINIC_INFO.secondaryPhone}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1 w-full">
                  <span className="text-stone-500 font-medium block">Office & Operatory Hours</span>
                  {CLINIC_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center text-xs">
                      <span className="text-stone-800">{h.days}</span>
                      <span className="font-mono text-stone-600 tabular-nums">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Parking & Transit Helper */}
            <div className="p-5 rounded-lg bg-stone-50 border border-stone-200/80 text-xs text-stone-600 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-stone-900">
                <Car className="w-4 h-4 text-[#C5A880]" />
                <span>Complimentary Patient Parking</span>
              </div>
              <p className="leading-relaxed">
                Dedicated reserved parking is located immediately in front of and behind our suite on East Commercial Blvd. Wheelchair accessible entrance with zero steps.
              </p>
            </div>
          </div>

          {/* Right: Architectural Street & Map View Card */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="rounded-lg overflow-hidden border border-stone-200/90 bg-white shadow-2xs h-full flex flex-col">
              {/* Interactive map visualization / stylised map header */}
              <div className="relative w-full h-[320px] sm:h-[380px] bg-stone-200 overflow-hidden">
                <iframe
                  title="Gold Coast Dental Center Map"
                  src="https://maps.google.com/maps?q=2467%20E%20Commercial%20Blvd,%20Fort%20Lauderdale,%20FL%2033308&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-95 grayscale-20"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Map Footer Bar */}
              <div className="p-5 bg-white border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-3">
                <div className="text-stone-600">
                  <strong className="text-stone-900">GPS Destination:</strong> 2467 E Commercial Blvd, Fort Lauderdale, FL 33308
                </div>

                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-stone-900 font-semibold hover:text-[#A8895B] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Call Desk for Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
