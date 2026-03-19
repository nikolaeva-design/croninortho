import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Retainers',
  description: 'Learn about orthodontic retainers at CroninOrtho. Maintain your perfect smile with removable and fixed retainer options. Expert care for lasting results.',
  openGraph: {
    title: `Retainers | ${SITE_NAME}`,
    description: 'Maintain your perfect smile with orthodontic retainers. Expert care for lasting results.',
  },
};

export default function RetainersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
