import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Dr. Cronin | Dr. D.G. Cronin - CroninOrtho',
  description: 'Meet Dr. D.G. Cronin, a highly experienced specialist orthodontist at CroninOrtho dedicated to achieving clinical excellence and transformative results.',
};

export default function DrCroninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
