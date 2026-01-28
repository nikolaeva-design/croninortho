import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Splints | CroninOrtho',
  description: 'TMJ and bite therapy solutions with custom dental splints at CroninOrtho. Support jaw comfort and function with expert orthodontic care.',
  openGraph: {
    title: 'Splints | CroninOrtho',
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
