import { ServiceItem, GalleryItem, Testimonial } from '../types';

export const SALON_INFO = {
  name: 'Scalp Hair and Beauty',
  category: 'Hair Salon & Beauty Parlor',
  address: '55 Kuruppu Rd, Colombo 00800',
  phone: '0773158182',
  phoneInternational: '+94773158182',
  whatsappNumber: '94773158182',
  makeItLiveWhatsApp: '94772788239',
  email: 'info@scalphairandbeauty.com',
  developerName: 'Kaveej Binujika',
  hours: [
    { days: 'Tuesday – Saturday', time: '9:00 AM – 7:30 PM' },
    { days: 'Sunday', time: '10:00 AM – 6:00 PM' },
    { days: 'Monday', time: 'Closed (VIP Bridal by Appointment)' }
  ],
  googleMapsUrl: 'https://maps.google.com/?q=55+Kuruppu+Rd,+Colombo+00800'
};

export const SERVICES_DATA: ServiceItem[] = [
  // Scalp Care
  {
    id: 'scalp-detox',
    name: 'Deep Follicle Detox & Scalp Spa',
    category: 'scalp',
    categoryLabel: 'Scalp Care',
    duration: '60 mins',
    price: 'LKR 8,500',
    description: 'Purifying scalp exfoliation with ozone steam, micro-circulation massage, and botanical tonic to clear build-up and revitalize roots.',
    benefits: ['Deep pore unclogging', 'Eliminates product residue', 'Stimulates natural hair growth'],
    popular: true
  },
  {
    id: 'scalp-thinning-anti-hairfall',
    name: 'Advanced Anti-Hairfall & Density Therapy',
    category: 'scalp',
    categoryLabel: 'Scalp Care',
    duration: '75 mins',
    price: 'LKR 12,000',
    description: 'Targeted peptide infusion therapy coupled with high-frequency stimulation to fortify weakened roots and promote stronger hair shafts.',
    benefits: ['Strengthens hair bulb', 'Reduces seasonal shedding', 'Noticeable scalp soothing']
  },
  {
    id: 'scalp-hydration-dandruff',
    name: 'Soothing Anti-Dandruff & Moisture Balance',
    category: 'scalp',
    categoryLabel: 'Scalp Care',
    duration: '50 mins',
    price: 'LKR 7,500',
    description: 'Gentle pH-balancing herbal mask combined with tea tree, aloe vera, and restorative ampoules for irritated or flaking scalps.',
    benefits: ['Instantly calms itchiness', 'Hydrates dry scalp barrier', 'Long-lasting flake control']
  },

  // Hair Treatments
  {
    id: 'keratin-silk-smooth',
    name: 'Signature Keratin Silk Infusion',
    category: 'treatments',
    categoryLabel: 'Hair Treatments',
    duration: '150 mins',
    price: 'LKR 22,000+',
    description: 'Formaldehyde-free intensive smoothing treatment that eliminates frizz, delivers mirror-shine gloss, and lasts up to 5 months.',
    benefits: ['Zero frizz humidity protection', 'Silky effortless blowouts', 'Nutrient-rich protein seal'],
    popular: true
  },
  {
    id: 'deep-hair-botox',
    name: 'Deep Bonding Hair Botox & Fiber Repair',
    category: 'treatments',
    categoryLabel: 'Hair Treatments',
    duration: '90 mins',
    price: 'LKR 16,500',
    description: 'Deep restorative cellular treatment replenishing lost keratin, hyaluronic acid, and collagen for bleached or damaged hair.',
    benefits: ['Restores elasticity & bounce', 'Mends split-ends', 'Weightless natural body']
  },
  {
    id: 'japanese-rebonding',
    name: 'Japanese Precision Straightening & Glaze',
    category: 'treatments',
    categoryLabel: 'Hair Treatments',
    duration: '180 mins',
    price: 'LKR 28,000+',
    description: 'Permanent sleek straightening paired with deep thermal conditioning to deliver pin-straight, ultra-reflective silk hair.',
    benefits: ['Permanent sleek texture', 'High-gloss glass hair finish', 'Tailored to hair porosity']
  },

  // Hair Styling & Coloring
  {
    id: 'balayage-french-ombre',
    name: 'Custom French Balayage & Glossing',
    category: 'styling-color',
    categoryLabel: 'Hair Styling & Coloring',
    duration: '180 mins',
    price: 'LKR 26,000+',
    description: 'Hand-painted dimensional highlights blended seamlessly with customized toner and bond-builder for natural sun-kissed perfection.',
    benefits: ['Low-maintenance soft grow-out', 'Tailored face-framing tones', 'Olaplex bond protection included'],
    popular: true
  },
  {
    id: 'precision-designer-cut',
    name: 'Designer Haircut & Volume Blowout',
    category: 'styling-color',
    categoryLabel: 'Hair Styling & Coloring',
    duration: '60 mins',
    price: 'LKR 5,500',
    description: 'Detailed face-shape consultation followed by precision dry/wet cutting, scalp massage, and red-carpet glam blowout styling.',
    benefits: ['Personalized silhouette', 'Enhances facial contours', 'Effortless home styling']
  },
  {
    id: 'full-color-root-touchup',
    name: 'Full Rich Dimensional Color & Root Melt',
    category: 'styling-color',
    categoryLabel: 'Hair Styling & Coloring',
    duration: '120 mins',
    price: 'LKR 14,000+',
    description: 'Ammonia-free luxury European pigments providing 100% luminous grey coverage and intense radiant shine.',
    benefits: ['Vibrant fade-resistant shades', '100% seamless grey coverage', 'Infused with nourishing argan oil']
  },

  // Bridal & Groom Dressing
  {
    id: 'signature-bridal-package',
    name: 'Signature Bridal Hair & Dressing Suite',
    category: 'bridal-groom',
    categoryLabel: 'Bridal & Groom',
    duration: '240 mins',
    price: 'LKR 45,000+',
    description: 'Complete royal bridal package: bespoke bridal hair sculpting, saree/veil draping, jewelry setting, pre-wedding consultation & trial.',
    benefits: ['Pre-wedding hair trial', 'All-day durability hold', 'Exclusive bridal suite access'],
    popular: true
  },
  {
    id: 'groom-styling-sculpting',
    name: 'Executive Groom Hair Styling & Beard Craft',
    category: 'bridal-groom',
    categoryLabel: 'Bridal & Groom',
    duration: '75 mins',
    price: 'LKR 8,000',
    description: 'Precision haircut, hot towel beard trim and razor outline, invigorating scalp tonic, and matte finish styling for the groom.',
    benefits: ['Sharp razor-line finish', 'Hot towel steam & massage', 'Camera-ready groom look']
  },
  {
    id: 'bridesmaid-glam',
    name: 'Bridesmaids & Party Hair Artistry',
    category: 'bridal-groom',
    categoryLabel: 'Bridal & Groom',
    duration: '60 mins',
    price: 'LKR 7,500',
    description: 'Elegant chignons, textured Hollywood waves, or bohemian half-up braids styled to complement party and bridal themes.',
    benefits: ['Long-lasting party hold', 'Complementary theme coordination', 'Includes luxury finishing spray']
  },

  // Facials & Grooming
  {
    id: 'radiance-glow-facial',
    name: 'Hydra-Infusion Radiance Glow Facial',
    category: 'facials',
    categoryLabel: 'Facials & Grooming',
    duration: '60 mins',
    price: 'LKR 9,500',
    description: 'Multi-step skin rejuvenation featuring gentle ultrasonic peeling, hyaluronic acid deep infusion, and cryo-globe lymphatic drainage.',
    benefits: ['Instant dewy glass glow', 'Deep pore extraction', 'Reduces puffiness & redness']
  },
  {
    id: 'gold-collagen-anti-aging',
    name: '24K Gold Collagen Rejuvenation Facial',
    category: 'facials',
    categoryLabel: 'Facials & Grooming',
    duration: '75 mins',
    price: 'LKR 14,000',
    description: 'Luxury anti-aging treatment with pure 24K gold micro-foil and marine collagen peptide mask to firm, smooth, and restore youthful elasticity.',
    benefits: ['Tightens and contours skin', 'Diminishes fine lines', 'Deep cellular hydration'],
    popular: true
  },
  {
    id: 'stress-relief-head-neck',
    name: 'Aromatherapy Head, Neck & Shoulder Massage',
    category: 'facials',
    categoryLabel: 'Facials & Grooming',
    duration: '45 mins',
    price: 'LKR 5,000',
    description: 'Deep pressure-point massage using organic lavender and eucalyptus oils to relieve tension, improve circulation, and melt stress away.',
    benefits: ['Relieves tension headaches', 'Promotes cranial blood circulation', 'Deep mental relaxation']
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Sun-Kissed Caramel Balayage',
    category: 'colors',
    categoryLabel: 'Colors & Balayage',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=900&auto=format&fit=crop',
    description: 'Seamless dimensional highlights with soft face-framing ribbons and gloss finish.'
  },
  {
    id: 'g2',
    title: 'Modern Salon Ambiance',
    category: 'ambiance',
    categoryLabel: 'Salon Ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop',
    description: 'Our luxurious modern styling floor located at 55 Kuruppu Rd, Colombo 00800.'
  },
  {
    id: 'g3',
    title: 'Bridal Crown & Hair Sculpting',
    category: 'bridal',
    categoryLabel: 'Bridal Couture',
    imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=900&auto=format&fit=crop',
    description: 'Intricate wedding hair updo styled with delicate fresh floral pins and veil anchor.'
  },
  {
    id: 'g4',
    title: 'Micro-Mist Scalp Spa Session',
    category: 'scalp',
    categoryLabel: 'Scalp & Care',
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=900&auto=format&fit=crop',
    description: 'Warm ozone misting and botanical scalp massage stimulating follicle rejuvenation.'
  },
  {
    id: 'g5',
    title: 'Glass Hair Keratin Transformation',
    category: 'makeovers',
    categoryLabel: 'Hair Makeovers',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop',
    description: 'Smooth mirror-finish keratin transformation restoring softness to dry locks.'
  },
  {
    id: 'g6',
    title: 'Ash Blonde Melt & Beach Waves',
    category: 'colors',
    categoryLabel: 'Colors & Balayage',
    imageUrl: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=900&auto=format&fit=crop',
    description: 'Smoky cool ash tones with dimensional depth and lived-in textured waves.'
  },
  {
    id: 'g7',
    title: 'Private Styling & Wash Suite',
    category: 'ambiance',
    categoryLabel: 'Salon Ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=900&auto=format&fit=crop',
    description: 'Ergonomic wash basins with ambient lighting for relaxing scalp therapies.'
  },
  {
    id: 'g8',
    title: 'Executive Groom Haircut & Beard Trim',
    category: 'makeovers',
    categoryLabel: 'Hair Makeovers',
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=900&auto=format&fit=crop',
    description: 'Tailored fade haircut and precision sculpted beard for the modern gentleman.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dinithi Senanayake',
    service: 'Signature Scalp Detox & Keratin',
    comment: 'Scalp Hair and Beauty has completely changed my hair health. My scalp feels so fresh and the keratin gave me the silkiness I have always wanted in Colombo’s humidity!',
    rating: 5,
    date: 'February 2026'
  },
  {
    id: 't2',
    name: 'Shehan Perera',
    service: 'Groom Dressing & Styling',
    comment: 'Booked my wedding groom dressing here. Outstanding precision, welcoming staff, and an ultra-clean, relaxing atmosphere right on Kuruppu Road.',
    rating: 5,
    date: 'January 2026'
  },
  {
    id: 't3',
    name: 'Amaaya Fernando',
    service: 'French Balayage & Glaze',
    comment: 'The best hair colorist in Colombo! The blend is completely seamless, zero brassiness, and they genuinely care about keeping hair strands nourished.',
    rating: 5,
    date: 'March 2026'
  }
];

export const SALON_FEATURES = [
  {
    icon: 'Sparkles',
    title: 'Scalp & Follicle Diagnostics',
    description: 'We prioritize the root cause of hair health with customized scalp analysis before every specialized treatment.'
  },
  {
    icon: 'Award',
    title: 'Certified Master Stylists',
    description: 'Our artistic directors bring years of precision cutting, international color training, and bridal couture styling.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Premium Organic & Salon Grade',
    description: 'Exclusively utilizing European ammonia-free colorants, pure botanical extracts, and formaldehyde-free keratin.'
  },
  {
    icon: 'HeartHandshake',
    title: '1-on-1 Personalized Luxury',
    description: 'Private consultation, relaxing head massages, and bespoke pampering tailored to your individual lifestyle.'
  }
];
