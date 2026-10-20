export interface DentalService {
  id: string;
  name: string;
  subtitle: string;
  category: 'cosmetic' | 'restorative' | 'surgical' | 'preventive';
  description: string;
  highlights: string[];
  timeline: string;
  idealFor: string;
  image: string;
  faqs: { question: string; answer: string }[];
}

export interface DoctorInfo {
  name: string;
  title: string;
  degrees: string;
  yearsActive: string;
  bio: string[];
  education: { institution: string; degree: string; detail?: string }[];
  affiliations: string[];
  quote: string;
  image: string;
}

export interface AppointmentFormData {
  service: string;
  dayPreference: string;
  timePreference: string;
  fullName: string;
  email: string;
  phone: string;
  insuranceType: string;
  notes: string;
  isNewPatient: boolean;
}
