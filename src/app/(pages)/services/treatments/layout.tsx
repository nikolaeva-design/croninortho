import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Common Treatments | CroninOrtho',
  description: 'Learn about orthodontic treatments at CroninOrtho. Explore surgical orthodontics, TMJ-TMD, clear braces, metal braces, aligners, palatal expanders, and more.',
  openGraph: {
    title: 'Common Treatments | CroninOrtho',
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
