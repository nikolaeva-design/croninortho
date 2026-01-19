'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Button from './Button';

const navItems = [
  { label: 'Orthodontics', href: '#orthodontic-care', hasDropdown: true },
  { label: 'About Us', href: '#about', hasDropdown: true },
  { label: 'Aesthetics', href: '#aesthetic-services', hasDropdown: false },
  { label: 'Gallery', href: '#gallery', hasDropdown: false },
  { label: 'Other Services', href: '#services', hasDropdown: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl py-3' : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <nav
        className="max-w-[1400px] mx-auto px-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo Image */}
        <a
          href="/"
          className="flex items-center group focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
          aria-label="CroninOrtho - Go to homepage"
        >
          <Image
            src="/logo.svg"
            alt="CroninOrtho Logo - Dr. D.G. Cronin & Dr. M. Sarfraz Orthodontic Practice"
            width={160}
            height={32}
            className="h-8 lg:h-9 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center gap-6" role="list">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-all duration-300 uppercase tracking-wide group hover:-translate-y-0.5 focus:outline-none focus:text-white"
              >
                {item.label}
                {item.hasDropdown && (
                  <iconify-icon
                    icon="solar:alt-arrow-down-linear"
                    width="14"
                    height="14"
                    class="transform group-hover:rotate-180 transition-transform duration-300"
                    aria-hidden="true"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden xl:block">
          <Button variant="primary" size="sm" href="#contact">
            Book an appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <iconify-icon
            icon={
              mobileMenuOpen
                ? 'solar:close-circle-linear'
                : 'solar:hamburger-menu-linear'
            }
            width="28"
            height="28"
            class="transition-transform duration-300"
            aria-hidden="true"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`xl:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="p-6">
          <ul className="flex flex-col gap-4" role="list">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center justify-between text-white/80 hover:text-white py-2 border-b border-white/10 hover:translate-x-2 transition-all duration-300 focus:outline-none focus:text-white"
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={closeMenu}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <iconify-icon
                      icon="solar:alt-arrow-right-linear"
                      width="18"
                      height="18"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <Button
                variant="primary"
                size="md"
                href="#contact"
                className="w-full"
                onClick={closeMenu}
              >
                Book an appointment
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
