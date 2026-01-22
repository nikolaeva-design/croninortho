import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Dr. Mo | Dr. M. Sarfraz - CroninOrtho',
  description: 'Meet Dr. M. Sarfraz (Dr. Mo), an experienced orthodontist at CroninOrtho dedicated to creating beautiful, healthy smiles for patients of all ages.',
};

export default function DrMoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
