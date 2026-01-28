import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | CroninOrtho',
  description: 'View our smile transformations gallery. See before and after results from orthodontic treatments at CroninOrtho.',
  openGraph: {
    title: 'Gallery | CroninOrtho',
    description: 'View our smile transformations gallery. See before and after orthodontic treatment results.',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
