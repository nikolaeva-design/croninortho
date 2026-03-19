import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Splints',
  description: 'TMJ and bite therapy solutions with custom dental splints at CroninOrtho. Support jaw comfort and function with expert orthodontic care.',
  openGraph: {
    title: `Splints | ${SITE_NAME}`,
    description: 'TMJ and bite therapy solutions with custom dental splints. Support jaw comfort and function.',
  },
};

export default function SplintsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
