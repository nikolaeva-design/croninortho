import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Dr. Mohymen Sarfraz (Dr. Mo)',
  description:
    'Meet Dr. Mohymen Sarfraz (Dr. Mo), a Langley, BC orthodontist specializing in advanced digital techniques and personalized care at CroninOrtho.',
};

export default function DrMoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
