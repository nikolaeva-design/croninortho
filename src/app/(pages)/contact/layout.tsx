import type { Metadata } from 'next';
import {
  SEO_DOCTORS,
  SEO_LOCATION_SHORT,
  SITE_NAME,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${SITE_NAME} in ${SEO_LOCATION_SHORT}. ${SEO_DOCTORS} — book a consultation, call, email, or send a message.`,
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: `Contact Us | ${SITE_NAME}`,
    description: `Reach ${SEO_DOCTORS} at ${SITE_NAME} in ${SEO_LOCATION_SHORT} — appointments, questions, and emergency guidance.`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
