'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT } from '@/lib/constants';
import Location from './Location';

const innerPages = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#gallery' },
  { label: 'Contact', href: '/contact' },
];

const utilityPages = [
  { label: 'FAQs', href: '/faqs' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Sitemap', href: '/sitemap.xml' },
  { label: 'Accessibility', href: '/accessibility' },
];

export default function Footer() {
  const pathname = usePathname();
  // Hide CTA section on About page
  const hideCTA = pathname === '/about';
  return (
    <footer
      id="contact"
      className="relative overflow-hidden z-10 bg-[#141414]"
      role="contentinfo"
    >
      {/* Top Image Section */}
      {!hideCTA && (
        <div className="relative h-[280px] sm:h-[350px] lg:h-[420px] overflow-hidden">
          <Image
            src="/Gemini_Generated_Image_dbdv8ddbdv8ddbdv.png"
            alt="Close-up of a confident smile with clear braces at CroninOrtho"
            fill
            className="object-cover object-center"
            sizes="100vw"
            loading="lazy"
            quality={80}
          />
          {/* Bottom gradient - blends with footer */}
          <div
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#141414] to-transparent"
            aria-hidden="true"
          />
        </div>
      )}

      {/* CTA Section */}
      {!hideCTA && (
        <div className="bg-[#141414] py-12 lg:py-16">
          <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Ready for a Smile You&apos;ll Feel Confident In?
            </h2>
            <p className="text-white/50 text-base lg:text-lg max-w-xl mb-8">
              Book a complimentary consultation and see how personalized,
              technology-guided orthodontic care can transform your smile —
              comfortably, discreetly, and with results built to last.
            </p>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#141414] text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-300 mb-4"
            >
              Book Free Consultation →
            </Link>
            <p className="text-white/40 text-sm">
              ✓ Complimentary consultation · ✓ Personalized plan · ✓ No obligation
            </p>
          </div>
        </div>
      )}

      {/* Location Section - Only on homepage */}
      {pathname === '/' && <Location />}

      {/* Main Footer */}
      <div className="bg-[#141414] border-t border-white/5 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
            {/* Logo & Description */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-4">
              <Link
                href="/"
                className="inline-block mb-4"
                aria-label="CroninOrtho - Go to homepage"
              >
                <Image
                  src="/logo.svg"
                  alt="CroninOrtho Logo"
                  width={180}
                  height={36}
                  className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
                />
              </Link>
              
              {/* Address */}
              <div className="mb-3">
                <div className="flex items-start gap-2">
                  <iconify-icon icon="solar:map-point-bold" width="14" height="14" className="text-[#c9a962] mt-0.5" />
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                    {CONTACT.address.street}
                    <br />
                    {CONTACT.address.city}, {CONTACT.address.state} {CONTACT.address.zip}, {CONTACT.address.country}
                  </p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="mb-4">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-white/60 text-xs sm:text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <iconify-icon icon="solar:phone-bold" width="14" height="14" className="text-[#c9a962]" />
                  {CONTACT.phoneDisplay}
                </a>
              </div>
              
              <p className="text-white/40 text-xs sm:text-sm leading-relaxed max-w-sm">
                CroninOrtho provides comprehensive orthodontic and aesthetic
                care with personalized treatment planning, modern technology,
                and a patient-centered approach.
              </p>
            </div>

            {/* Inner Pages */}
            <nav className="col-span-1 lg:col-span-2 lg:col-start-7" aria-label="Main navigation">
              <h3 className="text-white text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                Inner Pages
              </h3>
              <ul className="space-y-2 sm:space-y-3" role="list">
                {innerPages.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-white/50 text-xs sm:text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/50 text-xs sm:text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Utility Pages */}
            <nav className="col-span-1 lg:col-span-3 lg:col-start-10" aria-label="Utility pages">
              <h3 className="text-white text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                Utility Pages
              </h3>
              <ul className="space-y-2 sm:space-y-3" role="list">
                {utilityPages.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-white/50 text-xs sm:text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/50 text-xs sm:text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#141414] border-t border-white/5 py-4 sm:py-6">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/30 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} CroninOrtho. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <a
              href={`tel:${CONTACT.phone}`}
              className="text-white/50 text-xs sm:text-sm hover:text-white transition-colors flex items-center gap-2"
            >
              <iconify-icon icon="solar:phone-bold" width="14" height="14" className="sm:w-4 sm:h-4" />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-white/50 text-xs sm:text-sm hover:text-white transition-colors"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
