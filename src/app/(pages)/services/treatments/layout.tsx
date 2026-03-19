import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Common Treatments',
  description: 'Learn about orthodontic treatments at CroninOrtho. Explore surgical orthodontics, TMJ-TMD, clear braces, metal braces, aligners, palatal expanders, and more.',
  openGraph: {
    title: `Common Treatments | ${SITE_NAME}`,
    description: 'Explore our comprehensive orthodontic treatment options. Expert care for every smile.',
  },
};

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
