import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet the Team',
  description:
    'Meet the CroninOrtho team — skilled professionals offering personalized orthodontic care in Langley, BC.',
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
