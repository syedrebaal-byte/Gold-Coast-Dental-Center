import { DentalService, DoctorInfo } from '../types';

export const CLINIC_INFO = {
  name: 'Gold Coast Dental Center',
  tagline: 'Elevated Private Dentistry in Fort Lauderdale',
  phone: '(954) 771-5300',
  secondaryPhone: '(954) 335-6400',
  email: 'appointments@goldcoastdentalcenter.com',
  address: '2467 E Commercial Blvd',
  cityStateZip: 'Fort Lauderdale, FL 33308',
  neighborhood: 'East Commercial Boulevard Corridor',
  coordinates: {
    lat: 26.1897,
    lng: -80.1134,
  },
  hours: [
    { days: 'Monday – Thursday', time: '7:30 AM – 5:00 PM', status: 'Full Operatory & Surgical Care' },
    { days: 'Friday', time: 'Emergency On-Call Only', status: 'Triage by Appointment' },
    { days: 'Saturday – Sunday', time: 'Closed', status: 'Emergency Answering Service' },
  ],
  insuranceNotice: 'Registered Medicare Provider. We partner with all leading PPO insurance plans and provide flexible 0% APR financing through CareCredit®.',
};

export const DR_JERRY: DoctorInfo = {
  name: 'Dr. Jerry Karedan',
  title: 'Lead Restorative & Aesthetic Dentist',
  degrees: 'DMD',
  yearsActive: 'Practicing since 2017',
  bio: [
    'Born in Chicago and raised in Florida since age ten, Dr. Jerry Karedan combines technical precision with a deeply empathetic, relationship-based approach to private dental care.',
    'After completing his Bachelor of Science in Health Sciences with a minor in Psychology at the University of Central Florida, Dr. Karedan earned his Doctor of Medicine in Dentistry (DMD) from the esteemed University of Louisville School of Dentistry.',
    'Dedicated to lifelong clinical mastery, Dr. Karedan continues advanced studies at the internationally renowned Pankey Institute in Key Biscayne, FL. His clinical philosophy centers on comprehensive jaw and occlusal harmony, ensuring every cosmetic enhancement functions comfortably and lasts for decades.',
    'Dr. Karedan is a certified Invisalign® provider, skilled in advanced oral surgical techniques and implantology, and passionate about alleviating dental anxiety in a serene, unhurried atmosphere.'
  ],
  education: [
    {
      institution: 'The Pankey Institute (Key Biscayne, FL)',
      degree: 'Postgraduate Continuing Education',
      detail: 'Comprehensive Relationship-Based Healthcare & Occlusal Rehabilitation',
    },
    {
      institution: 'University of Louisville School of Dentistry',
      degree: 'Doctor of Medicine in Dentistry (DMD)',
      detail: 'Class of 2017 · Advanced Clinical Honors',
    },
    {
      institution: 'University of Central Florida',
      degree: 'B.S. in Health Sciences · Minor in Psychology',
      detail: 'Magna Cum Laude Honors',
    },
  ],
  affiliations: [
    'The Pankey Institute Alumnus',
    'Certified Invisalign® Provider',
    'American Dental Association (ADA)',
    'Florida Dental Association (FDA)',
    'Registered Medicare Healthcare Provider',
  ],
  quote:
    'True dentistry is never transactional. When we listen to a patient’s life story, understand their reservations, and engineer restorations with Pankey-level precision, we do not simply restore teeth—we give someone back their unreserved confidence.',
  image: '/assets/images/dr_jerry.jpg',
};

export const SERVICES: DentalService[] = [
  {
    id: 'cosmetic-veneers',
    name: 'Handcrafted Porcelain Veneers',
    subtitle: 'Ultra-thin, lifelike porcelain restorations designed for natural translucency',
    category: 'cosmetic',
    description:
      'Individually sculpted by master dental ceramists to harmonize with your facial proportions, lip line, and skin tone. We preserve maximum natural tooth structure while correcting discoloration, minor gaps, chips, or asymmetrical teeth.',
    highlights: [
      'Digital smile design & trial smile preview before prep',
      'Ultra-thin feldspathic & e.max lithium disilicate porcelain',
      'Stain-resistant, natural light-reflective optical properties',
      'Customized shading matching your ideal brightness',
    ],
    timeline: '2 to 3 appointments over 2 to 3 weeks',
    idealFor: 'Patients seeking lasting correction of deep stains, wear, chips, or spacing concerns.',
    image: '/assets/images/smile.jpg',
    faqs: [
      {
        question: 'How long do porcelain veneers last?',
        answer: 'With proper oral hygiene and regular Pankey-aligned maintenance cleanings, high-quality porcelain veneers routinely last 15 to 20 years or more.',
      },
      {
        question: 'Will my teeth feel sensitive after veneer placement?',
        answer: 'Minor transient temperature sensitivity can occur for a few days following prep, but Dr. Jerry utilizes advanced bonding agents and biomimetic protocols that minimize nerve irritation.',
      },
    ],
  },
  {
    id: 'dental-implants',
    name: '3D Guided Dental Implants',
    subtitle: 'Permanent titanium root replacement supporting single teeth or full-arch bridges',
    category: 'surgical',
    description:
      'The modern standard of care for missing teeth. Using high-resolution digital intraoral mapping and surgical guides, Dr. Karedan places biocompatible implants that fuse with your jawbone, preventing facial bone loss and restoring 100% chew capacity.',
    highlights: [
      'High-precision digital planning for optimal angle & depth',
      'Biocompatible medical-grade titanium or zirconia posts',
      'Preserves adjacent natural teeth without grinding them down',
      'Prevents post-extraction bone atrophy and facial collapse',
    ],
    timeline: 'Single day placement, with 3 to 4 months osseointegration before permanent crown',
    idealFor: 'Patients missing one or more teeth looking for permanent stability without removable appliances.',
    image: '/assets/images/technology.jpg',
    faqs: [
      {
        question: 'Is dental implant surgery painful?',
        answer: 'Most patients report dental implant placement is significantly easier than a routine tooth extraction. Local anesthesia and optional conscious sedation ensure zero discomfort during surgery.',
      },
      {
        question: 'Can I get an implant if I have been missing a tooth for years?',
        answer: 'Yes. Even if bone loss has occurred, minor bone grafting or sinus augmentation can rebuild the foundation needed for a secure, permanent implant.',
      },
    ],
  },
  {
    id: 'invisalign',
    name: 'Invisalign® Clear Aligners',
    subtitle: 'Certified orthodontic aligner therapy for adults and adolescents',
    category: 'cosmetic',
    description:
      'Straighten misaligned, crowded, or spaced teeth discreetly without metal brackets or wires. As a certified Invisalign provider, Dr. Jerry custom-stages your clear aligner trays using accurate 3D scans—never messy impressions.',
    highlights: [
      'Certified Invisalign® provider care for teens and adults',
      'Virtually invisible, removable for dining and easy flossing',
      'Digital 3D simulation reveals your finished smile before you begin',
      'Fewer office visits with convenient monthly progress checks',
    ],
    timeline: '6 to 18 months depending on case complexity',
    idealFor: 'Adults and teens wanting to fix alignment, overbite, underbite, or crowding without braces.',
    image: '/assets/images/hero.jpg',
    faqs: [
      {
        question: 'How many hours a day must I wear Invisalign trays?',
        answer: 'Trays are worn 20 to 22 hours per day, removing them only to eat, drink anything other than water, and brush your teeth.',
      },
      {
        question: 'Will Invisalign affect my speech?',
        answer: 'Most patients notice a slight lisp for the first 24 to 48 hours as the tongue adjusts to the smooth medical-grade polyurethane trays, after which speech returns to normal.',
      },
    ],
  },
  {
    id: 'biomimetic-crowns',
    name: 'Restorative Crowns & Bridges',
    subtitle: 'All-ceramic, metal-free restorations preserving natural tooth vitality',
    category: 'restorative',
    description:
      'When teeth are weakened by deep decay, old silver fillings, or structural fractures, our precision-milled crowns restore strength and beauty. We use 100% metal-free zirconia and lithium disilicate materials that eliminate unsightly black margins at the gumline.',
    highlights: [
      'Zero grey metal lines at the gumline (100% all-ceramic)',
      'High-strength monolithic zirconia for back molars',
      'Pankey occlusal equilibration to balance your chewing bite',
      'Long-term seal against recurrent bacterial decay',
    ],
    timeline: '2 visits spaced 10 days apart with comfortable temporary crown',
    idealFor: 'Teeth with extensive decay, large cracked fillings, or post-root canal structural reinforcement.',
    image: '/assets/images/lounge.jpg',
    faqs: [
      {
        question: 'How is a modern all-ceramic crown different from older crowns?',
        answer: 'Traditional crowns used porcelain fused to a dark metal substructure, which often creates an unnatural opaque look and dark lines near the gums. Our modern ceramics are pure monolithic crystalline structures that mimic natural tooth enamel translucency.',
      },
    ],
  },
  {
    id: 'emergency-care',
    name: 'Same-Day Emergency Dentistry',
    subtitle: 'Immediate relief for toothaches, sports trauma, broken teeth, or infections',
    category: 'surgical',
    description:
      'Dental emergencies cannot wait. If you are experiencing acute dental pain, swelling, a dislodged tooth, or a lost restoration, Gold Coast Dental Center reserves dedicated emergency slots every Monday through Thursday to diagnose and eliminate pain promptly.',
    highlights: [
      'Same-day pain relief and trauma stabilization',
      'High-speed digital X-ray diagnostics',
      'Emergency root canals, extractions, and recementations',
      'Direct emergency call access: (954) 771-5300',
    ],
    timeline: 'Immediate same-day emergency appointment during operating hours',
    idealFor: 'Anyone experiencing sudden throbbing pain, facial swelling, broken teeth, or trauma.',
    image: '/assets/images/hero.jpg',
    faqs: [
      {
        question: 'What should I do if a permanent tooth is completely knocked out?',
        answer: 'Gently rinse the tooth with milk or saline (do not scrub the root), place it back in the socket if possible, or keep it in a container of cold milk, and call our office immediately at (954) 771-5300. Time is critical within the first 60 minutes.',
      },
    ],
  },
  {
    id: 'gentle-hygiene',
    name: 'Preventive Wellness & Periodontal Care',
    subtitle: 'Comprehensive Pankey diagnostics, gentle ultrasonic cleanings, and oral screening',
    category: 'preventive',
    description:
      'True health begins with proactive prevention. Our hygiene appointments include ultrasonic plaque debridement, thorough periodontal pocket mapping, digital oral cancer screenings, and individualized enamel remineralization therapies.',
    highlights: [
      'Gentle ultrasonic scaling comfortable for sensitive gums',
      'Periodontal health assessment & individualized maintenance plans',
      'Oral cancer screening using high-definition magnification',
      'Fluoride varnish & enamel remineralization treatments',
    ],
    timeline: 'Routine 50 to 60-minute appointment every 3 to 6 months',
    idealFor: 'Patients seeking meticulous maintenance, gum disease prevention, or a welcoming first visit.',
    image: '/assets/images/lounge.jpg',
    faqs: [
      {
        question: 'I have severe dental anxiety. How can you help me relax?',
        answer: 'Dr. Jerry and our staff specialize in anxious patients. We offer nitrous oxide (laughing gas), soothing music, noise-cancelling headphones, and warm blankets, and we never proceed until you give the word.',
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    author: 'Elena Vance',
    location: 'Fort Lauderdale, FL',
    treatment: 'Full Porcelain Veneers',
    text: 'After visiting three other cosmetic practices in Broward County, meeting Dr. Jerry was a breath of fresh air. He didn’t push me into extreme Hollywood chiclets; he designed veneers that look completely natural and match my face. The office on Commercial Blvd is peaceful and impeccably clean.',
    rating: 5,
    verifiedSource: 'Google Verified Review',
  },
  {
    author: 'Mark Rosenthal',
    location: 'Lauderdale-by-the-Sea, FL',
    treatment: 'Dental Implant & Crown',
    text: 'I was terrified of getting a dental implant after a bad experience elsewhere years ago. Dr. Karedan walked me through every step on the 3D monitor. The surgical procedure took less than 35 minutes and was completely painless. Today my implant feels just like a real tooth.',
    rating: 5,
    verifiedSource: 'Google Verified Review',
  },
  {
    author: 'Sarah M. Jenkins',
    location: 'Pompano Beach, FL',
    treatment: 'Invisalign & Preventive Care',
    text: 'Dr. Jerry’s Pankey training truly shows. He took the time to understand my jaw clicking before starting Invisalign. Within 9 months, my crowding is gone, my bite feels balanced, and my chronic morning headaches disappeared. Highly recommend Gold Coast Dental Center.',
    rating: 5,
    verifiedSource: 'Patient Review',
  },
  {
    author: 'Captain Robert Davis',
    location: 'Fort Lauderdale Marina District',
    treatment: 'Same-Day Emergency Relief',
    text: 'Broke a molar while preparing our vessel for a charter. Called Gold Coast Dental Center at 8 AM on a Tuesday; they had me in the chair by 9:30 AM, relieved the pain immediately, and placed a permanent zirconia crown. Exceptional efficiency and professionalism.',
    rating: 5,
    verifiedSource: 'Verified Patient',
  },
];

export const CLINIC_FEATURES = [
  {
    title: 'Pankey Institute Methodology',
    description: 'Dr. Jerry applies relationship-based dentistry, evaluating full masticatory function, airway, and joint harmony before any cosmetic or restorative procedure.',
  },
  {
    title: 'Intraoral 3D Digital Scans',
    description: 'No nauseating impression putty or trays. We use optical 3D scanners capturing micro-millimeter accurate dental anatomy in seconds.',
  },
  {
    title: 'Ultra-Low Radiation Imaging',
    description: 'Advanced digital radiography reduces patient radiation exposure by over 80% compared to traditional dental X-rays while providing instantaneous diagnostic clarity.',
  },
  {
    title: 'Anxiety-Free Patient Comfort',
    description: 'Designed as a tranquil coastal retreat with noise-canceling audio, ergonomic memory foam seating, and conscious sedation options for dental-phobic patients.',
  },
];
