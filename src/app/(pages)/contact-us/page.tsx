import type { Metadata } from 'next';
import { LegacySoftRedirect } from '@/components/LegacySoftRedirect';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/contact/` },
};

export default function LegacyContactUsPage() {
  return <LegacySoftRedirect to="/contact/" label="Continue to contact" />;
}
