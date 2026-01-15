'use client';

import React from 'react';

const innerPages = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#' },
  { label: 'Contact', href: '#contact' },
];

const utilityPages = [
  { label: 'FAQs', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Sitemap', href: '#' },
  { label: 'Accessibility', href: '#' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden z-10 bg-[#141414]">
      {/* Top Image Section */}
      <div className="relative h-[200px] lg:h-[300px] overflow-hidden">
        <img
          src="/smile-woman.png"
          alt="Beautiful smile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141414]" />
      </div>

      {/* CTA Section */}
      <div className="bg-[#141414] py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            START YOUR SMILE JOURNEY TODAY
          </h2>
          <p className="text-white/50 text-base lg:text-lg max-w-md mb-8">
            Schedule your free consultation and discover the difference personalized orthodontic care makes.
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
              <a href="#" className="inline-block mb-4">
                <img
                  src="/logo.png"
                  alt="CroninOrtho"
                  className="h-12 lg:h-14 w-auto object-contain"
                />
              </a>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                CroninOrtho provides comprehensive orthodontic and aesthetic care with personalized treatment planning, modern technology, and a patient-centered approach.
              </p>
            </div>

            {/* Inner Pages */}
            <div className="lg:col-span-2">
              <h4 className="text-white text-sm font-semibold mb-6">Inner Pages</h4>
              <ul className="space-y-3">
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
            </div>

            {/* Utility Pages */}
            <div className="lg:col-span-2">
              <h4 className="text-white text-sm font-semibold mb-6">Utility Page</h4>
              <ul className="space-y-3">
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
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-4">
              <h4 className="text-white text-sm font-semibold mb-4">Subscribe Newsletter</h4>
              <p className="text-white/40 text-sm mb-6">
                Stay updated with our latest news, tips, and special offers—straight to your inbox.
              </p>
              
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-5 py-4 bg-transparent border border-white/10 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                />
                <button className="w-full px-8 py-4 bg-white text-[#141414] text-sm font-medium rounded-full hover:bg-white/90 transition-colors">
                  Discover More
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#141414] border-t border-white/5 py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} CroninOrtho. All rights reserved. Powered by Webflow.
          </p>
          <a href="#contact" className="text-white/50 text-sm hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
