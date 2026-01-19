import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adult Orthodontics | Ages 20+ | CroninOrtho',
  description:
    'Discreet orthodontic solutions for adults. Invisalign, clear braces, and modern treatment options at CroninOrtho.',
};

export default function AdultsOrthodonticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
