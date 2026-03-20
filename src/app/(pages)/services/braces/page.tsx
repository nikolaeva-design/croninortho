import type { Metadata } from 'next';
import { LegacySoftRedirect } from '@/components/LegacySoftRedirect';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Braces',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/services/treatments/` },
};

export default function LegacyServicesBracesPage() {
  return (
    <LegacySoftRedirect
      to="/services/treatments/#metal-braces"
      label="Continue to metal braces"
    />
  );
}
