/**
 * Site-wide constants and configuration
 */

// Site Information
export const SITE_NAME = 'CroninOrtho';
export const SITE_DESCRIPTION =
  'Expert orthodontic treatment and smile correction by Dr. D.G. Cronin & Dr. M. Sarfraz';
export const SITE_URL = 'https://croninortho.com';

// Contact Information (update with real values)
export const CONTACT = {
  phone: '+16045331151',
  phoneDisplay: '(604) 533-1151',
  email: 'info@ronianortho.com',
  address: {
    street: '',
    city: 'Langley',
    state: 'BC',
    zip: '',
    country: 'Canada',
  },
} as const;

// Social Media Links (update with real values)
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/croninortho',
  instagram: 'https://instagram.com/croninortho',
  twitter: 'https://twitter.com/croninortho',
  linkedin: 'https://linkedin.com/company/croninortho',
} as const;

// Office Hours
export const OFFICE_HOURS = {
  monday: '8:00 AM - 5:00 PM',
  tuesday: '8:00 AM - 5:00 PM',
  wednesday: '8:00 AM - 5:00 PM',
  thursday: '8:00 AM - 5:00 PM',
  friday: 'Closed',
  saturday: 'Closed',
  sunday: 'Closed',
} as const;

// Navigation Items
export const NAV_ITEMS = [
  { label: 'Orthodontics', href: '#orthodontic-care', hasDropdown: true },
  { label: 'About Us', href: '#about', hasDropdown: true },
  { label: 'Aesthetics', href: '#aesthetic-services', hasDropdown: false },
  { label: 'Gallery', href: '#gallery', hasDropdown: false },
  { label: 'Other Services', href: '#services', hasDropdown: true },
] as const;

// Footer Links
export const FOOTER_LINKS = {
  innerPages: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Technology', href: '#gallery' },
    { label: 'Contact', href: '/contact#contact-form' },
  ],
  utilityPages: [
    { label: 'FAQs', href: '/faqs' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Sitemap', href: '/sitemap.xml' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
} as const;

// Design System Colors (matches globals.css)
export const COLORS = {
  background: '#0a0a0a',
  foreground: '#f5f5f7',
  accent: '#1e5a8a',
  accentLight: '#2a6a9a',
  navy: '#0f2a44',
  navyLight: '#1a3a5c',
  muted: '#86868b',
  cardBg: '#111214',
  cardBorder: '#1e2024',
} as const;

// Breakpoints (matches Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Animation Durations
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;
