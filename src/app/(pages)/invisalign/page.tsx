import type { Metadata } from 'next';
import { LegacySoftRedirect } from '@/components/LegacySoftRedirect';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Invisalign & clear aligners',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/services/treatments/` },
};

export default function LegacyInvisalignPage() {
  return (
    <LegacySoftRedirect
      to="/services/treatments/#clear-aligners"
      label="Continue to Clear Aligners (Invisalign)"
    />
  );
}
