'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './Button';

const navItems = [
  { label: 'Orthodontics', href: '#orthodontic-care', hasDropdown: true },
  { label: 'About Us', href: '#about', hasDropdown: true },
  { label: 'Aesthetics', href: '#aesthetics', hasDropdown: false },
  { label: 'Patients', href: '#patients', hasDropdown: true },
  { label: 'Emergency Management', href: '#emergency', hasDropdown: false },
  { label: 'Other Services', href: '#services', hasDropdown: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0a]/90 backdrop-blur-xl py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo Image */}
        <a href="#" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="CroninOrtho - Dr. D.G. Cronin & Dr. M. Sarfraz"
            width={240}
            height={60}
            className="h-12 lg:h-14 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-all duration-300 uppercase tracking-wide group hover:-translate-y-0.5"
            >
              {item.label}
              {item.hasDropdown && (
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  width="14" 
                  height="14" 
                  className="transform group-hover:rotate-180 transition-transform duration-300"
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden xl:block">
          <Button variant="primary" size="sm" href="#contact">
            Book an appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <iconify-icon
            icon={mobileMenuOpen ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'}
            width="28"
            height="28"
            className="transition-transform duration-300"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`xl:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between text-white/80 hover:text-white py-2 border-b border-white/10 hover:translate-x-2 transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
                {item.hasDropdown && (
                  <iconify-icon icon="solar:alt-arrow-right-linear" width="18" height="18" />
                )}
              </a>
            ))}
            <Button variant="primary" size="md" href="#contact" className="mt-4 w-full">
              Book an appointment
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
