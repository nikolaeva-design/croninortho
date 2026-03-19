import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Aesthetic Services',
  description:
    'Discover our comprehensive aesthetic services including facial balance analysis, tooth alignment, gum contouring, and smile design. Enhance your natural beauty with CroninOrtho.',
  openGraph: {
    title: `Aesthetic Services | ${SITE_NAME}`,
    description:
      'Discover our comprehensive aesthetic services including facial balance analysis, tooth alignment, gum contouring, and smile design.',
    type: 'website',
  },
};

export default function AestheticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
