import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Dr. Mohymen Sarfraz (Dr. Mo) | Cronin Ortho',
  description: 'Meet Dr. Mohymen Sarfraz (Dr. Mo), an orthodontist at Cronin Ortho specializing in advanced digital techniques and personalized care in Langley, BC.',
};

export default function DrMoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
