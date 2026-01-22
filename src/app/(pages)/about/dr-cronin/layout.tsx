import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Dr. D.G. Cronin | Cronin Ortho',
  description: 'Meet Dr. D.G. Cronin, a specialist orthodontist with over 25 years of experience providing quality orthodontic care in Langley, BC.',
};

export default function DrCroninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
