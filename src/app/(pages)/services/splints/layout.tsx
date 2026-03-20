import type { Metadata } from 'next';
import { SEO_DOCTORS, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Splints',
  description: `Custom TMJ and bite splints with ${SEO_DOCTORS} at ${SITE_NAME}. Support jaw comfort and function with expert orthodontic care in Langley, BC.`,
  openGraph: {
    title: `Splints | ${SITE_NAME}`,
    description: `TMJ and bite therapy splints with ${SEO_DOCTORS}. Jaw comfort and expert orthodontic care.`,
  },
};

export default function SplintsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
