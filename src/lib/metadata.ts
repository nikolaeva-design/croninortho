import { Metadata } from 'next';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './constants';

interface GenerateMetadataOptions {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  pathname?: string;
}

/**
 * Generate metadata for a page
 * Use this utility to ensure consistent SEO across all pages
 */
export function generatePageMetadata({
  title,
  description = SITE_DESCRIPTION,
  keywords = [],
  image = '/og-image.png',
  noIndex = false,
  pathname = '/',
}: GenerateMetadataOptions): Metadata {
  const url = `${SITE_URL}${pathname}`;
  const fullTitle = title === 'Home' ? SITE_NAME : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      'orthodontist',
      'braces',
      'Invisalign',
      'teeth alignment',
      'orthodontic treatment',
      ...keywords,
    ],
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: image.startsWith('http') ? image : `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image.startsWith('http') ? image : `${SITE_URL}${image}`],
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate JSON-LD structured data for different page types
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/hero-image.png`,
    priceRange: '$$',
    medicalSpecialty: 'Orthodontics',
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.name,
    description: service.description,
    url: service.url
      ? service.url.startsWith('http')
        ? service.url
        : `${SITE_URL}${service.url}`
      : undefined,
  };
}
