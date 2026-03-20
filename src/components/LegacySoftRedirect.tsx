'use client';

import Link from 'next/link';
import { useEffect } from 'react';

type Props = {
  /** Path + optional hash, e.g. `/services/treatments/#clear-aligners` */
  to: string;
  /** Accessible label for the fallback link */
  label: string;
};

export function LegacySoftRedirect({ to, label }: Props) {
  useEffect(() => {
    const path = to.startsWith('/') ? to : `/${to}`;
    window.location.replace(`${window.location.origin}${path}`);
  }, [to]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-[#0a0a0a] text-white px-6 py-16 text-center">
      <p className="text-sm text-white/80 max-w-md leading-relaxed">
        Redirecting…{' '}
        <Link href={to} className="text-[#c9a962] underline hover:text-[#d4b872]">
          {label}
        </Link>
      </p>
    </div>
  );
}
