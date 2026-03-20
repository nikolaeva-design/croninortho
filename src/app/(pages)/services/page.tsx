import type { Metadata } from 'next';
import { LegacySoftRedirect } from '@/components/LegacySoftRedirect';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/services/treatments/` },
};

export default function LegacyServicesIndexPage() {
  return (
    <LegacySoftRedirect to="/services/treatments/" label="Continue to common treatments" />
  );
}
