'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Welcome to CroninOrtho"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-smile-braces.png"
          alt="Close-up of a confident smile with aesthetic orthodontic braces system for precise teeth alignment"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
          unoptimized
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Main Content - Full width */}
      <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24 2xl:px-32 pb-12 lg:pb-16">
        <div className="max-w-[2200px] mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] xl:text-[76px] 2xl:text-[90px] font-bold leading-[1.05] tracking-tight mb-8 lg:mb-10">
            <span
              className="block animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              Personalized
            </span>
            <span
              className="block lg:ml-24 xl:ml-32 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Orthodontic Care
            </span>
            <span
              className="block animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              & <span className="text-gradient">Aesthetic Smile Design</span>
            </span>
          </h1>

          {/* Subtext and CTA - Full width row */}
          <div
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Custom treatment plans for children, teens, and adults — combining
              precision with aesthetic-focused smile design for natural, confident
              results.
            </p>

            <div className="flex flex-row gap-4 flex-shrink-0">
              <a
                href="/contact#contact-form"
                className="inline-flex items-center justify-center px-10 py-4 text-base font-medium bg-white text-[#1a2744] rounded-full hover:bg-white/95 hover:scale-[1.02] transition-all duration-300 shadow-lg whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Book Your Smile Consultation
              </a>
              <a
                href="/contact#contact-form"
                className="inline-flex items-center justify-center px-10 py-4 text-base font-medium bg-white/10 text-white border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                See Your Options
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 scroll-indicator p-2 rounded-full hover:bg-white/10 transition-colors"
        onClick={() =>
          document
            .getElementById('orthodontic-care')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        aria-label="Scroll down to view orthodontic care options"
      >
        <iconify-icon
          icon="solar:alt-arrow-down-linear"
          width="24"
          height="24"
          className="text-white/40"
          aria-hidden="true"
        />
      </button>
    </section>
  );
}
