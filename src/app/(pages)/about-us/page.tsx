import type { Metadata } from 'next';
import { LegacySoftRedirect } from '@/components/LegacySoftRedirect';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About us',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/about/` },
};

export default function LegacyAboutUsPage() {
  return <LegacySoftRedirect to="/about/" label="Continue to about us" />;
}
