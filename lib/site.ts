export const site = {
  name: 'SIBA HAIR STUDIO',
  descriptor: 'Hair & Beauty',
  tagline: 'The art of being beautifully you.',
  phone: process.env.NEXT_PUBLIC_SALON_PHONE || '',
  email: process.env.NEXT_PUBLIC_SALON_EMAIL || '',
  address: process.env.SIBA_ADDRESS || '',
  instagram: process.env.NEXT_PUBLIC_SALON_INSTAGRAM || '',
  whatsapp: process.env.SIBA_WHATSAPP || '919628020966',
  whatsappMessage:
    'Hello Siba Hair Studio, greetings from Lichi Industries LLP',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Our Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export type ServiceCategory = 'Hair' | 'Beauty' | 'Wellness';
export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  short: string;
  description: string;
  includes: string[];
  image: string;
  imageAlt?: string;
  imagePosition?: string;
  icon: 'scissors' | 'palette' | 'sparkles' | 'heart' | 'hand' | 'flower';
  startingPrice?: number;
  isSamplePrice?: boolean;
};

// Uploaded salon photographs and real stock photos illustrate the service categories.
export const services: Service[] = [
  {
    slug: 'haircut-styling',
    title: 'Haircut & Styling',
    category: 'Hair',
    icon: 'scissors',
    startingPrice: 499,
    isSamplePrice: true,
    short: 'A signature cut for every expression.',
    description:
      'A personalized consultation followed by precision cutting, finishing and styling for the look you want to create.',
    includes: [
      'Style consultation',
      'Precision cuts',
      'Wash and blow-dry',
      'Event styling',
    ],
    image: '/images/photo_gallery/10469834_store_images_17.webp',
    imageAlt: 'A stylist finishing a client’s hairstyle at Siba Hair Studio',
    imagePosition: 'center 40%',
  },
  {
    slug: 'hair-colour-treatments',
    title: 'Hair Colour & Treatments',
    category: 'Hair',
    icon: 'palette',
    startingPrice: 1499,
    isSamplePrice: true,
    short: 'Dimension, shine and healthy-looking hair.',
    description:
      'Thoughtful colour transformations and conditioning services tailored to your hair goals.',
    includes: [
      'Colour consultation',
      'Highlights and toning',
      'Hair spa',
      'Smoothing and care',
    ],
    image: '/images/photo_gallery/10469834_store_images_14.webp',
    imageAlt: 'Long, smooth black hair photographed at Siba Hair Studio',
    imagePosition: 'center 55%',
  },
  {
    slug: 'skin-facials',
    title: 'Skin & Facials',
    category: 'Beauty',
    icon: 'sparkles',
    startingPrice: 799,
    isSamplePrice: true,
    short: 'Restore your glow with a calming ritual.',
    description:
      'Skin-focused beauty rituals designed around relaxation, care and a refreshed feeling.',
    includes: [
      'Skin consultation',
      'Facial services',
      'Clean-up',
      'Relaxation ritual',
    ],
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Real stock photograph of a facial skincare treatment',
  },
  {
    slug: 'makeup-occasion',
    title: 'Makeup & Occasions',
    category: 'Beauty',
    icon: 'heart',
    startingPrice: 1999,
    isSamplePrice: true,
    short: 'Beauty that feels uniquely yours.',
    description:
      'Makeup looks for celebrations and special moments, from softly radiant to statement glamour.',
    includes: [
      'Party makeup',
      'Bridal enquiry',
      'Hair and makeup trial enquiries',
      'Event-ready looks',
    ],
    image: '/images/hero/bride_2-YKb89Bz8aqFb3ZyK.avif',
    imageAlt: 'Bridal makeup with shimmering eyeshadow and gold jewellery',
    imagePosition: 'center 35%',
  },
  {
    slug: 'nails-grooming',
    title: 'Nails & Grooming',
    category: 'Beauty',
    icon: 'hand',
    startingPrice: 599,
    isSamplePrice: true,
    short: 'The finishing details matter.',
    description:
      'Neat, polished and confident finishing touches for everyday elegance.',
    includes: [
      'Manicure enquiries',
      'Pedicure enquiries',
      'Nail care',
      'Grooming services',
    ],
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Real stock photograph of manicured nails',
  },
  {
    slug: 'spa-relaxation',
    title: 'Spa & Relaxation',
    category: 'Wellness',
    icon: 'flower',
    startingPrice: 1299,
    isSamplePrice: true,
    short: 'Make a little room for yourself.',
    description:
      'A soothing spa-inspired experience for moments when you want to slow down and recharge.',
    includes: [
      'Spa enquiries',
      'Relaxation treatments',
      'Wellness consultation',
      'Self-care packages',
    ],
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Real stock photograph illustrating spa and relaxation',
  },
];

export const gallery = [
  {
    src: '/images/photo_gallery/unnamed%20%282%29.webp',
    title: 'A Portrait at Siba Hair Studio',
    group: 'Siba Hair Studio',
    alt: 'A smiling woman with long, styled hair seated in a salon chair',
  },
  {
    src: '/images/siba-logo-recreated.png',
    title: 'An Emblem of Elegance',
    group: 'Siba Hair Studio',
    alt: 'Recreated Siba Hair Studio ornate gold S crest and salon wordmark',
  },
  {
    src: services[0].image,
    title: 'The Art of Hair',
    group: 'Siba Hair Studio',
    alt: 'A stylist finishing a client’s hairstyle at Siba Hair Studio',
  },
  {
    src: services[2].image,
    title: 'A Moment of Care',
    group: 'Inspiration',
    alt: 'Illustrative stock photo of facial skincare',
  },
  {
    src: '/images/photo_gallery/10469834_store_images_4.webp',
    title: 'Inside the Studio',
    group: 'Siba Hair Studio',
    alt: 'Styling chairs and gold-framed mirrors inside Siba Hair Studio',
  },
  {
    src: '/images/photo_gallery/10469834_store_images_12.webp',
    title: 'Hair Care Corner',
    group: 'Siba Hair Studio',
    alt: 'Hair-washing basins, reclining chairs and hair-care products',
  },
  {
    src: '/images/photo_gallery/10469834_store_images_14.webp',
    title: 'Long Hair Details',
    group: 'Siba Hair Studio',
    alt: 'Long black hair viewed from behind at the salon',
  },
  {
    src: '/images/photo_gallery/unnamed.webp',
    title: 'Our Signature Space',
    group: 'Siba Hair Studio',
    alt: 'A person beside the illuminated Siba Hair Studio sign',
  },
  {
    src: '/images/photo_gallery/unnamed.jpg',
    title: 'A Visit to the Studio',
    group: 'Siba Hair Studio',
    alt: 'A seated visitor reflected in a salon mirror',
  },
  {
    src: services[3].image,
    title: 'For Special Moments',
    group: 'Inspiration',
    alt: 'Bridal makeup with shimmering eyeshadow and gold jewellery',
  },
  {
    src: services[5].image,
    title: 'Pause & Restore',
    group: 'Inspiration',
    alt: 'Illustrative stock photo of a spa environment',
  },
] as const;

export const galleryVideos = [
  { src: '/images/gallery/Video-82609.mp4', title: 'Gallery video 1' },
  { src: '/images/gallery/Video-73731.mp4', title: 'Gallery video 2' },
  { src: '/images/gallery/Video-60881.mp4', title: 'Gallery video 3' },
] as const;
