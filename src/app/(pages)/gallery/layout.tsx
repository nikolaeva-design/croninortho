import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View our smile transformations gallery. See before and after results from orthodontic treatments at CroninOrtho.',
  openGraph: {
    title: `Gallery | ${SITE_NAME}`,
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
