import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/clinicData';
import { DentalService } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cosmetic' | 'restorative' | 'surgical' | 'preventive'>('all');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const toggleFaq = (key: string) => {
    setExpandedFaq(expandedFaq === key ? null : key);
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#A8895B] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Clinical Capabilities</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
              Curated Treatments, Meticulously Delivered
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-2xl leading-relaxed">
              Every procedure is planned under Dr. Jerry’s Pankey methodology—balancing biological health, structural durability, and bespoke aesthetic harmony.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Functional segmented controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-md border border-stone-200 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Treatments
            </button>
            <button
              onClick={() => setActiveCategory('cosmetic')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeCategory === 'cosmetic'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Cosmetic
            </button>
            <button
              onClick={() => setActiveCategory('restorative')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeCategory === 'restorative'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Restorative
            </button>
            <button
              onClick={() => setActiveCategory('surgical')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeCategory === 'surgical'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Implants & Emergency
            </button>
            <button
              onClick={() => setActiveCategory('preventive')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeCategory === 'preventive'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Preventive
            </button>
          </div>
        </div>

        {/* Services Grid (Single-elevation, hairline borders, rich information architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-lg bg-[#FAF9F6] border border-stone-200/90 hover:border-stone-400/80 transition-all duration-200 overflow-hidden group shadow-2xs"
            >
              {/* Media banner */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-200">
                <img
                  src={service.image}
                  alt={service.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[10px] tracking-widest uppercase font-medium px-2.5 py-1 rounded">
                  {service.category}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean numerical indicator */}
                  <div className="text-[11px] font-mono text-stone-400 mb-1 tabular-nums">
                    0{index + 1}. Clinical Care
                  </div>
                  <h3 className="font-editorial text-2xl font-normal text-stone-900 leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#A8895B] font-medium mt-1 mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Clinical Highlights */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-stone-200/80">
                    <span className="text-[11px] font-semibold text-stone-800 uppercase tracking-wider block mb-1">
                      Key Highlights
                    </span>
                    {service.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Treatment Timeline & Ideal For */}
                  <div className="bg-stone-100/80 p-3 rounded text-[11px] text-stone-600 space-y-1 mb-4 border border-stone-200/60">
                    <div className="flex items-center gap-1.5 font-medium text-stone-800">
                      <Clock className="w-3 h-3 text-stone-500" />
                      <span>Timeline: {service.timeline}</span>
                    </div>
                    <div className="text-stone-500 leading-tight">
                      <strong className="text-stone-700">Recommended for:</strong> {service.idealFor}
                    </div>
                  </div>

                  {/* FAQs Dropdown Accordion */}
                  {service.faqs.length > 0 && (
                    <div className="mb-4 pt-2 border-t border-stone-200/60">
                      {service.faqs.map((faq, fIdx) => {
                        const faqKey = `${service.id}-faq-${fIdx}`;
                        const isOpen = expandedFaq === faqKey;
                        return (
                          <div key={fIdx} className="border-b border-stone-200/60 last:border-b-0 py-2">
                            <button
                              onClick={() => toggleFaq(faqKey)}
                              className="w-full flex items-center justify-between text-left text-xs font-medium text-stone-800 hover:text-stone-950 focus:outline-none"
                            >
                              <span>{faq.question}</span>
                              <ChevronDown
                                className={`w-3.5 h-3.5 text-stone-400 transition-transform ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            {isOpen && (
                              <p className="text-[11px] text-stone-600 mt-1.5 leading-relaxed bg-white p-2.5 rounded border border-stone-200/60">
                                {faq.answer}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Primary Card CTA */}
                <button
                  onClick={() => onSelectService(service.name)}
                  className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-stone-900 bg-stone-100 hover:bg-stone-900 hover:text-white rounded transition-colors group/btn"
                >
                  <span>Book Consultation for {service.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
