import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Dr. D.G. Cronin',
  description:
    'Meet Dr. D.G. Cronin — Langley, BC specialist orthodontist with 25+ years of experience in quality orthodontic care at CroninOrtho.',
};

export default function DrCroninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
