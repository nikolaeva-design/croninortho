import type { Metadata } from 'next';
import { LegacySoftRedirect } from '@/components/LegacySoftRedirect';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Orthodontics',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}/orthodontics/kids/` },
};

export default function LegacyOrthodonticsIndexPage() {
  return <LegacySoftRedirect to="/orthodontics/kids/" label="Continue to orthodontics for kids" />;
}
