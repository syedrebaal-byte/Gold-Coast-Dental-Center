import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, ShieldCheck, Download, ArrowRight, ArrowLeft } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState<AppointmentFormData>({
    service: preselectedService || 'Comprehensive Pankey Exam & Cleaning',
    dayPreference: 'Monday',
    timePreference: 'Morning (7:30 AM – 11:30 AM)',
    fullName: '',
    email: '',
    phone: '',
    insuranceType: 'PPO Dental Plan',
    notes: '',
    isNewPatient: true,
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validateStep3 = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errors.phone = 'Please enter a telephone number';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address';
    } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
      errors.email = 'Please enter a valid email';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (step === 3) {
      if (validateStep3()) {
        setStep(4);
      }
    } else {
      setStep((prev) => Math.min(4, prev + 1) as any);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1) as any);
  };

  const downloadCalendarEvent = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Gold Coast Dental Center//Fort Lauderdale//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Dental Consultation with Dr. Jerry Karedan`,
      `DESCRIPTION:Gold Coast Dental Center consultation for ${formData.service}. Contact: (954) 771-5300.`,
      `LOCATION:2467 E Commercial Blvd, Fort Lauderdale, FL 33308`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'gold_coast_dental_appointment.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const servicesList = [
    'Handcrafted Porcelain Veneers',
    '3D Guided Dental Implants',
    'Invisalign® Clear Aligners',
    'Restorative Crowns & Bridges',
    'Comprehensive Pankey Exam & Cleaning',
    'Same-Day Emergency Pain Relief',
    'Sedation Dentistry Consultation',
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Top Bar */}
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold">
              Gold Coast Dental Center · Fort Lauderdale
            </div>
            <h3 className="font-editorial text-xl sm:text-2xl font-normal text-white">
              {step === 4 ? 'Appointment Request Confirmed' : 'Request Private Consultation'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-md transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicator (Clean non-pill) */}
        {step < 4 && (
          <div className="px-6 py-3 bg-stone-100/70 border-b border-stone-200 flex items-center justify-between text-xs text-stone-600">
            <span className={step >= 1 ? 'font-semibold text-stone-900' : 'text-stone-400'}>
              1. Treatment
            </span>
            <span className="text-stone-300">/</span>
            <span className={step >= 2 ? 'font-semibold text-stone-900' : 'text-stone-400'}>
              2. Day & Time
            </span>
            <span className="text-stone-300">/</span>
            <span className={step >= 3 ? 'font-semibold text-stone-900' : 'text-stone-400'}>
              3. Patient Details
            </span>
          </div>
        )}

        {/* Body Content */}
        <div className="p-6 sm:p-8">
          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-stone-900 mb-1">
                  What is your primary reason for visiting?
                </label>
                <p className="text-xs text-stone-500 mb-4">
                  Dr. Jerry provides unhurried, one-on-one evaluations for all new patients.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {servicesList.map((serviceName) => (
                  <button
                    key={serviceName}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: serviceName })}
                    className={`p-3 text-left rounded-md border text-xs font-medium transition-all ${
                      formData.service === serviceName
                        ? 'border-stone-900 bg-stone-900 text-white shadow-xs'
                        : 'border-stone-200 bg-[#FAF9F6] text-stone-800 hover:border-stone-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{serviceName}</span>
                      {formData.service === serviceName && (
                        <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-3">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-700">
                  <input
                    type="checkbox"
                    checked={formData.isNewPatient}
                    onChange={(e) => setFormData({ ...formData, isNewPatient: e.target.checked })}
                    className="accent-stone-900 rounded"
                  />
                  <span>I am a new patient to Gold Coast Dental Center</span>
                </label>
              </div>
            </div>
          )}

          {/* STEP 2: Preferred Day & Time */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-stone-900 mb-1">
                  Preferred Appointment Schedule
                </label>
                <p className="text-xs text-stone-500">
                  Office hours: Monday through Thursday, 7:30 AM to 5:00 PM.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  Select Preferred Day
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday'].map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setFormData({ ...formData, dayPreference: day })}
                      className={`py-2.5 text-xs font-medium rounded border transition-colors ${
                        formData.dayPreference === day
                          ? 'border-stone-900 bg-stone-900 text-white'
                          : 'border-stone-200 bg-[#FAF9F6] text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  Select Time Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Morning (7:30 AM – 11:30 AM)',
                    'Mid-Day (11:30 AM – 2:00 PM)',
                    'Afternoon (2:00 PM – 5:00 PM)',
                    'Earliest Available Appointment',
                  ].map((timeWindow) => (
                    <button
                      key={timeWindow}
                      type="button"
                      onClick={() => setFormData({ ...formData, timePreference: timeWindow })}
                      className={`p-3 text-left rounded border text-xs font-medium transition-colors ${
                        formData.timePreference === timeWindow
                          ? 'border-stone-900 bg-stone-900 text-white'
                          : 'border-stone-200 bg-[#FAF9F6] text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      {timeWindow}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-stone-50 border border-stone-200 rounded text-xs text-stone-600">
                <span className="font-semibold text-stone-900 block mb-0.5">Need Same-Day Emergency Care?</span>
                If you have acute pain or trauma, call our emergency line directly at{' '}
                <a href="tel:9547715300" className="text-stone-900 font-bold underline">
                  (954) 771-5300
                </a>.
              </div>
            </div>
          )}

          {/* STEP 3: Contact & Insurance */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-stone-900 mb-1">
                  Patient Contact & Insurance
                </label>
                <p className="text-xs text-stone-500 mb-3">
                  Our Fort Lauderdale concierge will review your schedule and reach out to confirm your slot.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:border-stone-900 focus:outline-none"
                  />
                  {formErrors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Telephone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(954) 000-0000"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:border-stone-900 focus:outline-none"
                  />
                  {formErrors.phone && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:border-stone-900 focus:outline-none"
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">Insurance / Payment</label>
                  <select
                    value={formData.insuranceType}
                    onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:border-stone-900 focus:outline-none bg-white"
                  >
                    <option value="PPO Dental Plan">PPO Dental Plan (Delta, MetLife, Cigna, Aetna, etc.)</option>
                    <option value="Medicare">Medicare Coverage</option>
                    <option value="CareCredit">CareCredit® 0% Financing</option>
                    <option value="Self-Pay">Direct Self-Pay / HSA / FSA</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Specific Questions or Comfort Accommodations (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Mild dental anxiety, interested in nitrous oxide or trial smile preview."
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:border-stone-900 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-stone-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>Your contact details are encrypted and kept strictly confidential per HIPAA guidelines.</span>
              </div>
            </div>
          )}

          {/* STEP 4: Success Confirmation */}
          {step === 4 && (
            <div className="text-center py-4 space-y-5">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h4 className="font-editorial text-2xl font-normal text-stone-900">
                  Thank You, {formData.fullName.split(' ')[0]}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-md mx-auto">
                  Your appointment request has been submitted to Dr. Jerry Karedan’s care team.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-[#FAF9F6] border border-stone-200 rounded-lg p-4 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Service:</span>
                  <span className="font-semibold text-stone-900">{formData.service}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Preferred Day & Time:</span>
                  <span className="font-semibold text-stone-900">{formData.dayPreference} · {formData.timePreference.split('(')[0]}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Clinic Location:</span>
                  <span className="font-semibold text-stone-900">{CLINIC_INFO.address}, Fort Lauderdale</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-stone-500">Practice Phone:</span>
                  <span className="font-mono font-medium text-stone-900 tabular-nums">{CLINIC_INFO.phone}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={downloadCalendarEvent}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 rounded border border-stone-300 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Add to Calendar (.ICS)</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}

          {/* Stepper Navigation Buttons */}
          {step < 4 && (
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-stone-200">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors"
              >
                <span>{step === 3 ? 'Submit Request' : 'Continue'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
