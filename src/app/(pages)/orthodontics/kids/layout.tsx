import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kids Orthodontics | Ages 7-12 | CroninOrtho',
  description:
    'Early orthodontic care for children ages 7-12. Growth modification, airway development, and preventive treatment at CroninOrtho.',
};

export default function KidsOrthodonticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
