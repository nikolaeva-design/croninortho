import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aesthetic Services | CroninOrtho',
  description:
    'Discover our comprehensive aesthetic services including facial balance analysis, tooth alignment, gum contouring, and smile design. Enhance your natural beauty with CroninOrtho.',
  openGraph: {
    title: 'Aesthetic Services | CroninOrtho',
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
