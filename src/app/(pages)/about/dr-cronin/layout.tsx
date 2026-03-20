import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Dr. D.G. Cronin',
  description: `Meet Dr. D.G. Cronin — Langley, BC specialist orthodontist with 25+ years of experience at CroninOrtho alongside Dr. M. Sarfraz.`,
  openGraph: {
    title: 'Meet Dr. D.G. Cronin | CroninOrtho',
    description:
      'Meet Dr. D.G. Cronin — Langley, BC orthodontist with 25+ years of experience; CroninOrtho with Dr. M. Sarfraz.',
  },
};

export default function DrCroninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
