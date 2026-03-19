import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Surgical Orthodontics | Orthognathic Surgery',
  description:
    'Surgical orthodontics for complex jaw and bite corrections. Expert orthognathic surgery coordination at CroninOrtho.',
};

export default function SurgicalOrthodonticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
