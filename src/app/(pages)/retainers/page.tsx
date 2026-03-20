import type { Metadata } from 'next';
import { LegacySoftRedirect } from '@/components/LegacySoftRedirect';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Retainers',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/services/retainers/` },
};

export default function LegacyRetainersPage() {
  return <LegacySoftRedirect to="/services/retainers/" label="Continue to retainers" />;
}
