import React, { useState } from 'react';
import { Calculator, ShieldCheck, CreditCard, Check } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const FinancingCalculator: React.FC = () => {
  const [treatmentAmount, setTreatmentAmount] = useState<number>(3500);
  const [months, setMonths] = useState<number>(12);

  const monthlyPayment = Math.round(treatmentAmount / months);

  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Insurance & Financing Policy */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#A8895B] uppercase tracking-wider mb-2">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Transparent Financial Policy</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-stone-900 leading-tight">
                Quality Oral Healthcare Should Never Be Cryptic
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
                We believe in complete financial transparency prior to any procedure. Our treatment coordinators maximize your insurance benefits and provide zero-surprise fee schedules.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-md bg-[#FAF9F6] border border-stone-200/80">
                <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-stone-900">
                    Registered Medicare Provider & Major PPO In-Network
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    We accept leading dental insurance plans including Delta Dental, MetLife, Cigna, Aetna, Guardian, Humana, and Florida Blue, submitting all claims electronically for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-md bg-[#FAF9F6] border border-stone-200/80">
                <CreditCard className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-stone-900">
                    CareCredit® 0% APR Promotional Financing
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Break down elective smile makeovers, dental implants, or Invisalign aligners into manageable monthly payments with zero interest if paid in full within 6, 12, or 24 months.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive CareCredit Payment Estimator */}
          <div className="lg:col-span-6">
            <div className="rounded-lg bg-stone-900 p-6 sm:p-8 text-white shadow-xl border border-stone-800">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-300">
                    CareCredit® Monthly Estimator
                  </span>
                </div>
                <span className="text-[11px] text-stone-400">0% Promotional APR</span>
              </div>

              <div className="py-6 space-y-6">
                <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-stone-300">Estimated Procedure Cost</span>
                    <span className="font-mono text-base font-semibold text-[#D4AF37] tabular-nums">
                      ${treatmentAmount.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={15000}
                    step={250}
                    value={treatmentAmount}
                    onChange={(e) => setTreatmentAmount(Number(e.target.value))}
                    className="w-full accent-[#C5A880] bg-stone-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 mt-1 font-mono">
                    <span>$500</span>
                    <span>$7,500</span>
                    <span>$15,000</span>
                  </div>
                </div>

                {/* Term Selector */}
                <div>
                  <span className="text-xs text-stone-300 block mb-2">Promotional Plan Length</span>
                  <div className="grid grid-cols-4 gap-2">
                    {[6, 12, 18, 24].map((term) => (
                      <button
                        key={term}
                        onClick={() => setMonths(term)}
                        className={`py-2 text-xs font-mono font-medium rounded transition-colors ${
                          months === term
                            ? 'bg-[#C5A880] text-stone-950 font-bold'
                            : 'bg-stone-800 hover:bg-stone-700 text-stone-300'
                        }`}
                      >
                        {term} Mo
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculated Result */}
                <div className="p-4 rounded bg-stone-950/80 border border-stone-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-stone-400 uppercase tracking-wider block">
                      Estimated Monthly Payment
                    </span>
                    <span className="text-xs text-stone-500">
                      Zero interest if paid within {months} months
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-editorial text-3xl sm:text-4xl font-normal text-white tabular-nums font-mono">
                      ${monthlyPayment}
                    </span>
                    <span className="text-[11px] text-stone-400 block -mt-1">/ month</span>
                  </div>
                </div>

                <p className="text-[10px] text-stone-500 leading-normal">
                  *Estimates are for illustrative budgeting purposes based on approved CareCredit healthcare financing terms. Our office coordinator will verify your exact insurance benefits and options at your visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
