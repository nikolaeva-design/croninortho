import { CONTACT, OFFICE_HOURS, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_LINKS } from '@/lib/constants';

const orgId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

function openingHoursSpecification() {
  const openDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'] as const;
  if (
    OFFICE_HOURS.monday.startsWith('Closed') ||
    !OFFICE_HOURS.monday.includes('-')
  ) {
    return undefined;
  }
  const [opens, closes] = OFFICE_HOURS.monday.split(' - ').map((s) => s.trim());
  const to24 = (t: string) => {
    const m = t.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (!m) return '09:00';
    let h = parseInt(m[1], 10);
    const min = m[2];
    const ap = m[3].toUpperCase();
    if (ap === 'PM' && h !== 12) h += 12;
    if (ap === 'AM' && h === 12) h = 0;
    return `${h.toString().padStart(2, '0')}:${min}`;
  };
  return {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: [...openDays],
    opens: to24(opens),
    closes: to24(closes),
  };
}

/** Key destinations aligned with primary nav — helps search engines map URLs to site sections. */
const primaryNavItems: { name: string; path: string }[] = [
  { name: 'Contact Us', path: '/contact/' },
  { name: 'About Us', path: '/about/' },
  { name: 'Meet Dr. D.G. Cronin', path: '/about/dr-cronin/' },
  {
    name: 'Meet Dr. Mohymen Sarfraz (Dr. Mo)',
    path: '/about/dr-mo/',
  },
  { name: 'Meet the Team', path: '/about/team/' },
  { name: 'Patient', path: '/patient/' },
  { name: 'Patient Care', path: '/patient-care/' },
  { name: 'Common Treatments', path: '/services/treatments/' },
  { name: 'Orthodontics for Kids', path: '/orthodontics/kids/' },
  { name: 'Orthodontics for Teens', path: '/orthodontics/teens/' },
  { name: 'Orthodontics for Adults', path: '/orthodontics/adults/' },
  { name: 'Gallery', path: '/gallery/' },
  { name: 'Aesthetics', path: '/aesthetics/' },
  { name: 'Blog', path: '/blog/' },
  { name: 'Emergency', path: '/emergency/' },
];

export function buildSiteJsonLdGraph() {
  const hours = openingHoursSpecification();
  const sameAs = Object.values(SOCIAL_LINKS).filter(
    (u) => typeof u === 'string' && u.startsWith('http')
  );

  const dentist = {
    '@type': 'Dentist' as const,
    '@id': orgId,
    name: SITE_NAME,
    description:
      'Expert orthodontic treatment and smile correction by Dr. D.G. Cronin & Dr. Mohymen Sarfraz',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/hero-image.png`,
    telephone: CONTACT.phoneDisplay,
    email: CONTACT.email,
    priceRange: '$$',
    medicalSpecialty: 'Orthodontics',
    address: {
      '@type': 'PostalAddress' as const,
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.state,
      postalCode: CONTACT.address.zip,
      addressCountry: CONTACT.address.country,
    },
    ...(hours ? { openingHoursSpecification: hours } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Orthodontic Treatment',
        description: 'Comprehensive orthodontic care for all ages',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Invisalign',
        description: 'Clear aligner therapy for discreet teeth straightening',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Braces',
        description: 'Traditional and ceramic braces for teeth alignment',
      },
    ],
    employee: [
      { '@type': 'Dentist', name: 'Dr. D.G. Cronin', jobTitle: 'Orthodontist' },
      { '@type': 'Dentist', name: 'Dr. Mohymen Sarfraz', jobTitle: 'Orthodontist' },
    ],
  };

  const website = {
    '@type': 'WebSite' as const,
    '@id': websiteId,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: 'en-CA',
    publisher: { '@id': orgId },
    about: { '@id': orgId },
  };

  const navList = {
    '@type': 'ItemList' as const,
    '@id': `${SITE_URL}/#primary-navigation`,
    name: 'Main sections',
    numberOfItems: primaryNavItems.length,
    itemListElement: primaryNavItems.map((item, i) => ({
      '@type': 'ListItem' as const,
      position: i + 1,
      item: {
        '@type': 'WebPage' as const,
        name: item.name,
        url: `${SITE_URL}${item.path}`,
      },
    })),
  };

  return [website, dentist, navList];
}
