'use client';

import React from 'react';
import Image from 'next/image';

const innerPages = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const utilityPages = [
  { label: 'FAQs', href: '/faqs' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Sitemap', href: '/sitemap.xml' },
  { label: 'Accessibility', href: '/accessibility' },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden z-10 bg-[#141414]"
      role="contentinfo"
    >
      {/* Top Image Section */}
      <div className="relative h-[200px] lg:h-[300px] overflow-hidden">
        <Image
          src="/smile-woman.png"
          alt="Happy patient showing confident smile after orthodontic treatment at CroninOrtho"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141414]"
          aria-hidden="true"
        />
      </div>

      {/* CTA Section */}
      <div className="bg-[#141414] py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            START YOUR SMILE JOURNEY TODAY
          </h2>
          <p className="text-white/50 text-base lg:text-lg max-w-md mb-8">
            Schedule your free consultation and discover the difference
            personalized orthodontic care makes.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white text-sm font-medium rounded-full border border-white/30 hover:bg-white hover:text-[#141414] transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#141414] border-t border-white/5 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Logo & Description */}
            <div className="lg:col-span-4">
              <a
                href="/"
                className="inline-block mb-4"
                aria-label="CroninOrtho - Go to homepage"
              >
                <Image
                  src="/logo.svg"
                  alt="CroninOrtho Logo"
                  width={180}
                  height={36}
                  className="h-10 lg:h-12 w-auto object-contain"
                />
              </a>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                CroninOrtho provides comprehensive orthodontic and aesthetic
                care with personalized treatment planning, modern technology,
                and a patient-centered approach.
              </p>
            </div>

            {/* Inner Pages */}
            <nav className="lg:col-span-2" aria-label="Main navigation">
              <h3 className="text-white text-sm font-semibold mb-6">
                Inner Pages
              </h3>
              <ul className="space-y-3" role="list">
                {innerPages.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Utility Pages */}
            <nav className="lg:col-span-2" aria-label="Utility pages">
              <h3 className="text-white text-sm font-semibold mb-6">
                Utility Pages
              </h3>
              <ul className="space-y-3" role="list">
                {utilityPages.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Newsletter */}
            <div className="lg:col-span-4">
              <h3 className="text-white text-sm font-semibold mb-4">
                Subscribe to Newsletter
              </h3>
              <p className="text-white/40 text-sm mb-6">
                Stay updated with our latest news, tips, and special
                offers—straight to your inbox.
              </p>

              <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Newsletter subscription form"
              >
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    autoComplete="email"
                    className="w-full px-5 py-4 bg-transparent border border-white/10 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-[#141414] text-sm font-medium rounded-full hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#141414]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#141414] border-t border-white/5 py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} CroninOrtho. All rights reserved.
          </p>
          <a
            href="mailto:contact@croninortho.com"
            className="text-white/50 text-sm hover:text-white transition-colors"
          >
            contact@croninortho.com
          </a>
        </div>
      </div>
    </footer>
  );
}
