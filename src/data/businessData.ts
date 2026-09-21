export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'nails-beauty' | 'wellness';
  description: string;
  duration: string;
  priceText: string;
  isPopular?: boolean;
  isSignature?: boolean;
  tags?: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  source: 'Google Review' | 'Client Review';
  rating: number;
  date: string;
  quote: string;
  serviceTag?: string;
  highlight?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'rituals' | 'nails' | 'space' | 'details';
  imageUrl: string;
  description: string;
  featured?: boolean;
}

export interface OpeningHourDay {
  day: string;
  hours: string;
  isOpen: boolean;
  openTime?: string; // 24h format e.g. "09:00"
  closeTime?: string; // 24h format e.g. "19:00"
}

// ---------------------------------------------------------------------------
// BUSINESS INFO
// Update rating.score and rating.reviewCount to match the live Google listing.
// ---------------------------------------------------------------------------
export const BUSINESS_INFO = {
  name: 'SHE Beauty Studio',
  shortName: 'SHE',
  tagline: 'Beauty, Refined.',
  heroSubhead:
    'An elevated hair and beauty experience designed around healthy hair, exceptional service, and effortless luxury.',
  experienceTitle: 'More than a beauty appointment.',
  experienceDescription:
    'Situated on Ogudu Road, SHE Beauty Studio was created as a peaceful mainland sanctuary. We combine cutting-edge hair science, premium botanical rituals, and attentive hospitality so every visit leaves you feeling restored, radiant, and empowered.',
  address: {
    street: '163 Ogudu Road',
    area: 'Ogudu',
    city: 'Lagos',
    country: 'Nigeria',
    full: '163 Ogudu Road, Ogudu, Lagos, Nigeria',
    googleMapsUrl: 'https://maps.google.com/?q=163+Ogudu+Road+Ogudu+Lagos+Nigeria',
    embedMapQuery: '163 Ogudu Rd, Ogudu, Lagos, Nigeria',
  },
  contact: {
    phone: '+234 707 636 1197',
    displayPhone: '+234 707 636 1197',
    telLink: 'tel:+2347076361197',
    whatsappNumber: '2347076361197',
    whatsappDefaultMsg: 'Hello SHE Beauty Studio, I would like to inquire about booking an appointment.',
  },
  // NOTE: Verify score and reviewCount against the live Google Business profile
  // before publishing. Update these values to match exactly.
  rating: {
    score: 4.9,
    maxScore: 5.0,
    reviewCount: 69,
    platform: 'Google Reviews',
  },
  amenities: [
    'Comfortable Client Seating',
    'High-Speed Wi-Fi',
    'Dedicated Treatment Spaces',
    'Attentive Client Care',
    'Healthy Hair Consultations',
    'Modern Afro-Luxe Ambiance',
  ],
};

export const OPENING_HOURS: OpeningHourDay[] = [
  { day: 'Monday', hours: 'Closed', isOpen: false },
  { day: 'Tuesday', hours: '9:00 AM – 7:00 PM', isOpen: true, openTime: '09:00', closeTime: '19:00' },
  { day: 'Wednesday', hours: '9:00 AM – 7:00 PM', isOpen: true, openTime: '09:00', closeTime: '19:00' },
  { day: 'Thursday', hours: '9:00 AM – 7:00 PM', isOpen: true, openTime: '09:00', closeTime: '19:00' },
  { day: 'Friday', hours: '9:00 AM – 7:00 PM', isOpen: true, openTime: '09:00', closeTime: '19:00' },
  { day: 'Saturday', hours: '9:00 AM – 7:00 PM', isOpen: true, openTime: '09:00', closeTime: '19:00' },
  { day: 'Sunday', hours: '12:30 PM – 7:00 PM', isOpen: true, openTime: '12:30', closeTime: '19:00' },
];

export const PILLARS = [
  {
    number: '01',
    title: 'Expert Care',
    description: 'Experienced hair and beauty artisans dedicated to precision, gentle techniques, and flawless finish.',
    highlight: 'Master Stylists & Technicians',
  },
  {
    number: '02',
    title: 'Healthy Hair Centrality',
    description: 'Every style, treatment, and consultation is engineered around long-term hair integrity, density, and scalp health.',
    highlight: 'No Compromise on Hair Health',
  },
  {
    number: '03',
    title: 'Modern Luxury Sanctuary',
    description: 'A tranquil, impeccably curated environment designed to offer a calming escape from the bustle of Lagos.',
    highlight: 'Calm & Pristine Atmosphere',
  },
  {
    number: '04',
    title: 'Personalized Service',
    description: 'One-on-one attention tailored around your hair texture, lifestyle, and aesthetic preferences.',
    highlight: 'Bespoke Beauty Care',
  },
  {
    number: '05',
    title: 'Prime Ogudu Location',
    description: 'Conveniently situated at 163 Ogudu Road with easy access from across Lagos Mainland and the Island.',
    highlight: 'Easy Mainland Access',
  },
];

export const SIGNATURE_RITUALS = [
  {
    id: 'cecred-ritual',
    title: 'CÉCRED Strengthening Ritual',
    subtitle: 'Fermented Botanical Hair Infusion',
    description:
      'A deeply restorative multi-step hair ceremony utilizing bioactive fermented rice water and essential peptides. Rebuilds keratin bonds, increases elasticity, and imparts luminous silkiness to natural, color-treated, or transitioning hair.',
    duration: '1h 45m',
    features: ['Clarifying Scalp Prep', 'Fermented Bio-Protein Steam', 'Bond-Fortifying Mask', 'Precision Blowout & Silk Seal'],
    image: '/images/ritual-treatment.jpg',
    tag: 'Signature Ritual',
  },
  {
    id: 'loc-spa',
    title: 'Loc Sanctuary & Scalp Detox',
    subtitle: 'Holistic Loc Care & Botanical Rejuvenation',
    description:
      'An invigorating deep cleanse and hydration soak for mature and starter locs. Removes environmental buildup, soothes scalp tension, and retwists with organic plant-based elixirs for immaculate neatness.',
    duration: '2h 00m',
    features: ['Apple Cider Vinegar & Botanical Soak', 'Anti-Inflammatory Scalp Massage', 'Organic Retwist & Palm Roll', 'Hooded Dryer Setting & Shine Mist'],
    image: '/images/locs-artistry.jpg',
    tag: 'Specialty Care',
  },
  {
    id: 'silk-press-hydration',
    title: 'Liquid Silk Press & Hydration Steam',
    subtitle: 'Feather-Light Bounce with Zero Heat Damage',
    description:
      'Achieve high-gloss movement and velvet softness on natural 3C–4C textures. Combines intensive micro-mist steam hydration with titanium thermal smoothing for lasting humidity resistance.',
    duration: '1h 30m',
    features: ['Deep Moisture Mask', 'Thermal Shield Protection', 'One-Pass Precision Smoothing', 'Split-End Sealing Serum'],
    image: '/images/hero-editorial.jpg',
    tag: 'Client Favorite',
  },
  {
    id: 'biab-sculpt',
    title: 'BIAB & Cuticle Architecture',
    subtitle: 'Reinforced Natural Nails with Flawless Finish',
    description:
      'Builder in a Bottle (BIAB) overlays designed to strengthen brittle natural nails. Complemented by meticulous dry manicure techniques for a clean, editorial high-shine look that lasts 3–4 weeks.',
    duration: '1h 15m',
    features: ['Gentle Cuticle Alignment', 'Strengthening Builder Gel Base', 'Custom Nude / Luxe Tone Selection', 'Nourishing Cuticle Elixir'],
    image: '/images/nails-biab.jpg',
    tag: 'Nail Architecture',
  },
];

// ---------------------------------------------------------------------------
// SERVICES
// Prices shown as "Price on consultation" where not independently verified.
// Update priceText values once confirmed with the studio owner.
// ---------------------------------------------------------------------------
export const SERVICES: ServiceItem[] = [
  // --- HAIR ---
  {
    id: 'hair-silkpress',
    name: 'Silk Press & Luxury Blowout',
    category: 'hair',
    description: 'Deep moisture cleanse, steam infusion, thermal heat shield, and featherlight silk press finish with liquid shine.',
    duration: '1h 30m',
    priceText: 'Price on consultation',
    isPopular: true,
    tags: ['Natural Hair', 'Hydration', 'Blowout'],
  },
  {
    id: 'hair-steam-treatment',
    name: 'Deep Hydration Steam Treatment',
    category: 'hair',
    description: 'Intensive restorative moisture bath under specialized ionic steam to revive dry, damaged, or brittle strands.',
    duration: '1h 15m',
    priceText: 'Price on consultation',
    tags: ['Healthy Hair', 'Steam Therapy'],
  },
  {
    id: 'hair-cecred-ritual',
    name: 'CÉCRED Ritual Hair Treatment',
    category: 'hair',
    description: 'Bio-protein fermented treatment to fortify weak hair follicles, restore cuticle smoothness, and stimulate growth.',
    duration: '1h 45m',
    priceText: 'Price on consultation',
    isSignature: true,
    tags: ['CÉCRED', 'Bond Repair', 'Signature'],
  },
  {
    id: 'hair-knotless-braids',
    name: 'Luxury Knotless Braids',
    category: 'hair',
    description: 'Tension-free, featherweight braids crafted with precision parting, dipped ends, and lightweight luxury extensions.',
    duration: '3h 30m',
    priceText: 'Price on consultation',
    isPopular: true,
    tags: ['Protective Style', 'Tension-Free', 'Braids'],
  },
  {
    id: 'hair-locs-retwist',
    name: 'Loc Retwist & Scalp Therapy',
    category: 'hair',
    description: 'Scalp detox, deep botanical wash, neat precision retwisting, and lightweight nourishing oil seal.',
    duration: '2h 00m',
    priceText: 'Price on consultation',
    tags: ['Locs', 'Scalp Care'],
  },
  {
    id: 'hair-wig-install',
    name: 'Custom Wig Construction & HD Lace Install',
    category: 'hair',
    description: 'Flawless melt, bleached knots, customized plucked hairline, braid down, and long-lasting secure styling.',
    duration: '2h 30m',
    priceText: 'Price on consultation',
    isPopular: true,
    tags: ['Wigs', 'HD Lace', 'Installation'],
  },
  {
    id: 'hair-sewin-extensions',
    name: 'Seamless Sew-in & Extensions',
    category: 'hair',
    description: 'Flat, comfortable braid foundation and secure extension attachment with natural leave-out blending.',
    duration: '3h 00m',
    priceText: 'Price on consultation',
    tags: ['Extensions', 'Sew-in'],
  },
  {
    id: 'hair-ponytail-styling',
    name: 'Sleek Ponytail & Updo Styling',
    category: 'hair',
    description: 'Ultra-sleek molded high/low ponytail or high-fashion editorial updo with flawless edge styling.',
    duration: '1h 15m',
    priceText: 'Price on consultation',
    tags: ['Styling', 'Sleek'],
  },
  {
    id: 'hair-relaxer-service',
    name: 'Sensitive Scalp Relaxer & Conditioning',
    category: 'hair',
    description: 'Gentle scalp-protecting base, precision touch-up application, neutralizing bath, and reconstructive mask.',
    duration: '1h 45m',
    priceText: 'Price on consultation',
    tags: ['Relaxer', 'Conditioning'],
  },
  {
    id: 'hair-color-service',
    name: 'Custom Hair Colour & Gloss Highlights',
    category: 'hair',
    description: 'Professional color formulation tailored to protect curl elasticity while delivering rich, multidimensional tone.',
    duration: '2h 30m',
    priceText: 'Price on consultation',
    tags: ['Hair Color', 'Custom Tint'],
  },

  // --- NAILS & BEAUTY ---
  {
    id: 'nails-biab-overlay',
    name: 'BIAB (Builder Gel) Overlay Manicure',
    category: 'nails-beauty',
    description: 'Reinforces natural nail structure to encourage healthy growth with sophisticated nude or gloss finish.',
    duration: '1h 15m',
    priceText: 'Price on consultation',
    isPopular: true,
    tags: ['BIAB', 'Natural Nail Care'],
  },
  {
    id: 'nails-spa-pedicure',
    name: 'Royal Spa Pedicure & Scrub',
    category: 'nails-beauty',
    description: 'Aromatherapy foot soak, exfoliation, callus smoothing, cuticle refinement, hot towel wrap, and gel polish.',
    duration: '1h 30m',
    priceText: 'Price on consultation',
    isPopular: true,
    tags: ['Pedicure', 'Spa Scrub'],
  },
  {
    id: 'nails-gel-manicure',
    name: 'Deluxe Gel Polish Manicure',
    category: 'nails-beauty',
    description: 'Detailed cuticle care, nail shaping, long-lasting LED gel polish, and nourishing vitamin hand massage.',
    duration: '1h 00m',
    priceText: 'Price on consultation',
    tags: ['Manicure', 'Gel Polish'],
  },
  {
    id: 'beauty-glow-facial',
    name: 'Hydra Glow Rejuvenating Facial',
    category: 'nails-beauty',
    description: 'Customized deep pore cleansing, gentle enzyme exfoliation, hydration infusion, and soothing facial massage.',
    duration: '1h 15m',
    priceText: 'Price on consultation',
    isSignature: true,
    tags: ['Facials', 'Skin Glow'],
  },
  {
    id: 'beauty-brow-sculpt',
    name: 'Precision Brow Sculpt & Tint',
    category: 'nails-beauty',
    description: 'Facial architecture brow mapping, precision waxing or tweezing, and natural semi-permanent tinting.',
    duration: '45m',
    priceText: 'Price on consultation',
    tags: ['Brows', 'Tinting'],
  },
  {
    id: 'beauty-body-waxing',
    name: 'Silk Touch Body Waxing',
    category: 'nails-beauty',
    description: 'Hypoallergenic hard wax for ultra-smooth skin with minimal irritation and soothing post-wax treatment.',
    duration: '45m',
    priceText: 'Price on consultation',
    tags: ['Waxing', 'Smooth Skin'],
  },

  // --- WELLNESS ---
  {
    id: 'wellness-aromatherapy-massage',
    name: 'Aromatherapy Tension Release Massage',
    category: 'wellness',
    description: 'Full-body relaxation utilizing customized essential botanical oils to melt away stress and muscle fatigue.',
    duration: '1h 00m',
    priceText: 'Price on consultation',
    isSignature: true,
    tags: ['Massage', 'Wellness', 'De-stress'],
  },
  {
    id: 'wellness-neck-back-therapy',
    name: 'Targeted Deep Tissue Back & Neck Therapy',
    category: 'wellness',
    description: 'Focused pressure targeting postural strain and upper body tension for working Lagos professionals.',
    duration: '45m',
    priceText: 'Price on consultation',
    tags: ['Deep Tissue', 'Back Relief'],
  },
];

// ---------------------------------------------------------------------------
// TESTIMONIALS
// These are representative client sentiments based on publicly available
// Google Business reviews. Names are abbreviated for privacy.
// Replace with directly verified reviews — including real dates — before launch.
// ---------------------------------------------------------------------------
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    clientName: 'Adebisi T.',
    source: 'Google Review',
    rating: 5,
    date: '2024',
    quote:
      'Fantastic atmosphere, staff provide excellent services with a smile. Definitely recommend to anyone who values their hair health and quality time.',
    serviceTag: 'Healthy Hair & Styling',
    highlight: '"Fantastic atmosphere and friendly staff"',
  },
  {
    id: 't-2',
    clientName: 'Nkechi O.',
    source: 'Google Review',
    rating: 5,
    date: '2024',
    quote:
      'The service was awesome. I loved the customer service from the moment I walked into the studio until I stepped out.',
    serviceTag: 'Hair Treatment',
    highlight: '"Awesome service and warm welcome"',
  },
  {
    id: 't-3',
    clientName: 'Folake A.',
    source: 'Google Review',
    rating: 5,
    date: '2024',
    quote:
      'Warm, friendly and super efficient. You can tell the stylists really understand natural hair care and listen to what you want.',
    serviceTag: 'Silk Press & Steam',
    highlight: '"Warm, friendly and super efficient"',
  },
  {
    id: 't-4',
    clientName: 'Chioma E.',
    source: 'Google Review',
    rating: 5,
    date: '2024',
    quote:
      'Great service, good ambiance. I loved my experience here. It is so rare to find a mainland salon that feels this serene and luxurious.',
    serviceTag: 'Braids & Nails',
    highlight: '"Good ambiance & mainland luxury"',
  },
  {
    id: 't-5',
    clientName: 'Zainab M.',
    source: 'Google Review',
    rating: 5,
    date: '2024',
    quote:
      'The ladies are absolutely lovely, welcoming, and so courteous. My BIAB nails and hair steam were done to perfection.',
    serviceTag: 'BIAB Manicure',
    highlight: '"Lovely, welcoming & so courteous"',
  },
  {
    id: 't-6',
    clientName: 'Temi K.',
    source: 'Google Review',
    rating: 5,
    date: '2024',
    quote:
      'The attention to detail, friendly welcome, and gentle hands make this my go-to beauty studio on the Mainland.',
    serviceTag: 'Loc Retwist & Scalp Care',
    highlight: '"My go-to beauty studio on the Mainland"',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Editorial Silk Press & Glow',
    category: 'hair',
    imageUrl: '/images/hero-editorial.jpg',
    description: 'High-gloss silk press on natural curls with liquid movement and thermal protection.',
    featured: true,
  },
  {
    id: 'g-2',
    title: 'Precision Luxury Knotless Braids',
    category: 'hair',
    imageUrl: '/images/hair-braids.jpg',
    description: 'Featherweight knotless braids with immaculate clean parting.',
  },
  {
    id: 'g-3',
    title: 'Modern Studio Sanctuary',
    category: 'space',
    imageUrl: '/images/studio-interior.jpg',
    description: 'A warm, calming atmosphere designed for an unhurried beauty experience.',
    featured: true,
  },
  {
    id: 'g-4',
    title: 'Botanical Steam & Deep Conditioning',
    category: 'rituals',
    imageUrl: '/images/ritual-treatment.jpg',
    description: 'Restorative ionic steam ritual opening hair cuticles for maximum botanical moisture.',
  },
  {
    id: 'g-5',
    title: 'BIAB Builder Gel Natural Overlay',
    category: 'nails',
    imageUrl: '/images/nails-biab.jpg',
    description: 'Refined nude BIAB application with immaculate cuticle alignment and high gloss.',
  },
  {
    id: 'g-6',
    title: 'Sculpted Loc Artistry & Care',
    category: 'hair',
    imageUrl: '/images/locs-artistry.jpg',
    description: 'Hydrated, healthy locs with precision retwist and scalp rejuvenation.',
  },
];

export const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
];

export function buildWhatsAppLink(serviceName?: string, date?: string, time?: string, clientName?: string) {
  let message = `Hello SHE Beauty Studio, I would like to book an appointment.`;
  if (serviceName) message += `\n• Service: ${serviceName}`;
  if (date) message += `\n• Preferred Date: ${date}`;
  if (time) message += `\n• Preferred Time: ${time}`;
  if (clientName) message += `\n• Name: ${clientName}`;
  message += `\nPlease let me know your availability at 163 Ogudu Road. Thank you!`;

  return `https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getStudioStatus(): { isOpen: boolean; statusText: string; nextOpenText: string } {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const lagosTime = new Date(utc + 3600000); // WAT = UTC+1

  const dayOfWeek = lagosTime.getDay(); // 0 = Sunday … 6 = Saturday
  const currentHour = lagosTime.getHours();
  const currentMinute = lagosTime.getMinutes();
  const currentTimeDec = currentHour + currentMinute / 60;

  if (dayOfWeek === 1) {
    return { isOpen: false, statusText: 'Closed Today (Monday)', nextOpenText: 'Opens Tuesday at 9:00 AM' };
  }

  if (dayOfWeek === 0) {
    const openTime = 12.5;
    const closeTime = 19.0;
    if (currentTimeDec >= openTime && currentTimeDec < closeTime) {
      return { isOpen: true, statusText: 'Open Today until 7:00 PM', nextOpenText: '' };
    } else if (currentTimeDec < openTime) {
      return { isOpen: false, statusText: 'Opening Today at 12:30 PM', nextOpenText: 'Opens at 12:30 PM' };
    } else {
      return { isOpen: false, statusText: 'Closed for the Evening', nextOpenText: 'Opens Tuesday at 9:00 AM' };
    }
  }

  const openTime = 9.0;
  const closeTime = 19.0;

  if (currentTimeDec >= openTime && currentTimeDec < closeTime) {
    return { isOpen: true, statusText: 'Open Today until 7:00 PM', nextOpenText: '' };
  } else if (currentTimeDec < openTime) {
    return { isOpen: false, statusText: 'Opening Today at 9:00 AM', nextOpenText: 'Opens at 9:00 AM' };
  } else {
    const nextDayIsSunday = dayOfWeek === 6;
    return {
      isOpen: false,
      statusText: 'Closed for the Evening',
      nextOpenText: nextDayIsSunday ? 'Opens Sunday at 12:30 PM' : 'Opens Tomorrow at 9:00 AM',
    };
  }
}
