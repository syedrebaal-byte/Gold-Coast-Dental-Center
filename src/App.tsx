import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DoctorProfile } from './components/DoctorProfile';
import { ServicesSection } from './components/ServicesSection';
import { Interactive3DTooth } from './components/Interactive3DTooth';
import { SmileComparison } from './components/SmileComparison';
import { TechnologyComfort } from './components/TechnologyComfort';
import { FinancingCalculator } from './components/FinancingCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { Phone, Calendar, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from './data/clinicData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-stone-900">
      {/* Top Navigation */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Lead Doctor Biography & Pankey Philosophy */}
        <DoctorProfile />

        {/* 3. Comprehensive Dental Treatments & Procedural Details */}
        <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />

        {/* 4. Interactive Smile & Biomechanics Studio */}
        <section id="smile-studio" className="py-20 bg-stone-100/60 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#A8895B] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Studio & Biomechanics</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
                Where Artistry Meets Precision Science
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
                Explore the internal anatomy Dr. Jerry protects with biomimetic restorative techniques, and preview aesthetic smile transformations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* 3D Interactive Tooth Canvas */}
              <Interactive3DTooth />

              {/* Before/After Smile Makeover Slider */}
              <SmileComparison />
            </div>
          </div>
        </section>

        {/* 5. Patient Experience & Coastal Comfort Lounge */}
        <TechnologyComfort />

        {/* 6. Transparent Financing & CareCredit Payment Estimator */}
        <FinancingCalculator />

        {/* 7. Attributable Patient Testimonials */}
        <TestimonialsSection />

        {/* 8. Clinic Location, Map & Directions */}
        <LocationContact />
      </main>

      {/* Quiet Compliant Footer */}
      <Footer />

      {/* Interactive 3-Step Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />

      {/* Mobile Sticky Action Cap (Under 15% viewport height rule) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-4 py-2.5 flex items-center justify-between gap-3 shadow-lg">
        <a
          href="tel:9547715300"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded text-xs font-semibold text-stone-800 bg-stone-100 border border-stone-200"
        >
          <Phone className="w-3.5 h-3.5 text-stone-600" />
          <span>Call Office</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded text-xs font-semibold text-white bg-stone-900 shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
}
