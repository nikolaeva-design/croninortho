'use client';

import React from 'react';
import Image from 'next/image';

export default function LogoSection() {
  return (
    <>
      {/* Fixed background section - stays in place */}
      <section
        className="fixed inset-0 bg-[#e8e8e8] flex items-center justify-center overflow-hidden z-0"
        aria-label="Accepted Payment Methods"
      >
        <div className="relative max-w-[1400px] w-full mx-auto px-6 lg:px-12 min-h-[500px] lg:min-h-[600px]">
          {/* Floating Logos - Using Iconify for reliable display */}

          {/* Top Left - Apple Pay */}
          <div
            className="absolute top-8 left-8 lg:top-12 lg:left-16 opacity-40 hover:opacity-100 transition-opacity duration-300"
            aria-label="Apple Pay accepted"
          >
            <iconify-icon
              icon="logos:apple-pay"
              width="48"
              height="24"
              aria-hidden="true"
            />
          </div>

          {/* Top Right - Google Pay */}
          <div
            className="absolute top-8 right-8 lg:top-12 lg:right-16 opacity-40 hover:opacity-100 transition-opacity duration-300"
            aria-label="Google Pay accepted"
          >
            <iconify-icon
              icon="logos:google-pay"
              width="48"
              height="24"
              aria-hidden="true"
            />
          </div>

          {/* Center - Main Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/logo.svg"
              alt="CroninOrtho - Dr. D.G. Cronin & Dr. M. Sarfraz Orthodontic Practice"
              width={280}
              height={56}
              className="h-14 lg:h-16 xl:h-20 w-auto object-contain invert"
            />
          </div>

          {/* Middle Left - Visa */}
          <div
            className="absolute top-[55%] left-4 lg:left-8 opacity-40 hover:opacity-100 transition-opacity duration-300"
            aria-label="Visa accepted"
          >
            <iconify-icon
              icon="logos:visa"
              width="48"
              height="24"
              aria-hidden="true"
            />
          </div>

          {/* Middle Right - Mastercard */}
          <div
            className="absolute top-[55%] right-4 lg:right-8 opacity-40 hover:opacity-100 transition-opacity duration-300"
            aria-label="Mastercard accepted"
          >
            <iconify-icon
              icon="logos:mastercard"
              width="48"
              height="24"
              aria-hidden="true"
            />
          </div>

          {/* Bottom Center Left - Amex */}
          <div
            className="absolute bottom-[30%] left-[20%] lg:left-[25%] opacity-40 hover:opacity-100 transition-opacity duration-300"
            aria-label="American Express accepted"
          >
            <iconify-icon
              icon="logos:amex"
              width="48"
              height="24"
              aria-hidden="true"
            />
          </div>

          {/* Bottom Left - Discover */}
          <div
            className="absolute bottom-12 left-8 lg:bottom-16 lg:left-16 opacity-40 hover:opacity-100 transition-opacity duration-300"
            aria-label="Discover accepted"
          >
            <iconify-icon
              icon="logos:discover"
              width="48"
              height="24"
              aria-hidden="true"
            />
          </div>

          {/* Bottom Right - Diners Club */}
          <div
            className="absolute bottom-12 right-8 lg:bottom-16 lg:right-16 opacity-40 hover:opacity-100 transition-opacity duration-300"
            aria-label="Diners Club accepted"
          >
            <iconify-icon
              icon="logos:diners-club"
              width="48"
              height="24"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Spacer to maintain scroll height */}
      <div className="h-screen" aria-hidden="true" />
    </>
  );
}
