import type { Metadata } from 'next';
import { SEO_DOCTORS, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Common Treatments',
  description: `Invisalign®, clear aligners, braces, and more with ${SEO_DOCTORS} at ${SITE_NAME}. Surgical orthodontics, expanders, retainers, and personalized care in Langley, BC.`,
  openGraph: {
    title: `Common Treatments | ${SITE_NAME}`,
    description: `Invisalign and clear aligners, braces, and full orthodontic options with ${SEO_DOCTORS}.`,
  },
};

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
