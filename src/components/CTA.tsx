'use client';

import React from 'react';
import Image from 'next/image';

export default function CTA() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/cta-consultation-bg.png"
          alt="Patient receiving orthodontic consultation at CroninOrtho clinic"
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
          priority={false}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-6 2xl:px-12 py-24 lg:py-32 text-center">
        {/* Headline */}
        <h2
          id="cta-heading"
          className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6"
        >
          Designed With Precision.
          <br />
          Delivered With Care. Built to Last.
        </h2>

        {/* Subtitle */}
        <p className="text-white/70 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-12 lg:mb-16">
          Thoughtful treatment planning, advanced technology, and a
          patient-centered approach — all focused on creating results that look
          natural and stand the test of time.
        </p>

        {/* White Card */}
        <div className="inline-block bg-white rounded-3xl p-6 lg:p-8 shadow-2xl max-w-xl mx-auto">
          {/* Card Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#0a0a0a]">
            <Image
              src="/cta-small.png"
              alt="Golden ratio smile analysis demonstrating precise aesthetic planning"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 500px"
            />
          </div>

          {/* Card Content */}
          <h3 className="text-[#1d1d1f] text-xl lg:text-2xl font-semibold tracking-tight mb-3">
            Custom, Precision-Engineered Smile Design
          </h3>
          <p className="text-[#1d1d1f]/60 text-sm lg:text-base leading-relaxed">
            We use advanced 3D imaging, digital simulations, and treatment
            planning to design and produce highly personalized smiles — built
            for accuracy, comfort, and long-term stability.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 lg:mt-16 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact#contact-form"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1d1d1f] text-sm font-semibold rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            Schedule Free Consultation
          </a>
          <a
            href="tel:+16045331151"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white text-sm font-medium rounded-full border border-white/30 hover:bg-white/10 transition-colors duration-200"
            aria-label="Call us at (604) 533-1151"
          >
            <iconify-icon
              icon="solar:phone-linear"
              width="18"
              height="18"
              aria-hidden="true"
            />
            Call (604) 533-1151
          </a>
        </div>
      </div>
    </section>
  );
}
