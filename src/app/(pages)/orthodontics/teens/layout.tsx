import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teen Orthodontics | Ages 13-19 | CroninOrtho',
  description:
    'Comprehensive orthodontic treatment for teenagers. Braces, clear aligners, and modern solutions for teens at CroninOrtho.',
};

export default function TeensOrthodonticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
