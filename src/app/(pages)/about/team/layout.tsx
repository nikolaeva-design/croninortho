import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet the Team | Cronin Ortho',
  description: 'Meet the incredible team at Cronin Ortho - skilled, experienced professionals dedicated to providing high-quality, personalized orthodontic care in Langley, BC.',
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
