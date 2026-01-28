import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retainers | CroninOrtho',
  description: 'Learn about orthodontic retainers at CroninOrtho. Maintain your perfect smile with removable and fixed retainer options. Expert care for lasting results.',
  openGraph: {
    title: 'Retainers | CroninOrtho',
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
