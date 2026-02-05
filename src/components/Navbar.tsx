'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Button from './Button';

const orthodonticsDropdown = [
  { label: 'Kids', href: '/orthodontics/kids', description: 'Early treatment for children' },
  { label: 'Teens', href: '/orthodontics/teens', description: 'Braces & aligners for teenagers' },
  { label: 'Adults', href: '/orthodontics/adults', description: 'Modern solutions for adults' },
];

const aboutUsDropdown = [
  { label: 'Meet Dr. Mo', href: '/about/dr-mo', description: 'Dr. M. Sarfraz' },
  { label: 'Meet Dr. Cronin', href: '/about/dr-cronin', description: 'Dr. D.G. Cronin' },
  { label: 'Meet the Team', href: '/about/team', description: 'Our dedicated staff' },
  { label: 'About Us', href: '/about', description: 'Our story and values' },
];

const otherServicesDropdown = [
  { label: 'Retainers', href: '/services/retainers', description: 'Maintain your perfect smile' },
  { label: 'Night Guards', href: '/services/nightguards', description: 'Protect teeth while you sleep' },
  { label: 'Splints', href: '/services/splints', description: 'TMJ & bite therapy solutions' },
];

const moreDropdown = [
  { label: 'Patient', href: '/patient', description: 'Forms, visits, and helpful resources' },
  { label: 'Patient Care', href: '/patient-care', description: 'Video guides for your treatment' },
  { label: 'Emergency', href: '/emergency', description: 'What to do and who to contact' },
];

const navItems = [
  { label: 'Orthodontic Care', href: '#orthodontic-care', hasDropdown: true, dropdownItems: orthodonticsDropdown },
  { label: 'About Us', href: '#about', hasDropdown: true, dropdownItems: aboutUsDropdown },
  { label: 'Aesthetics', href: '/aesthetics', hasDropdown: false },
  { label: 'Gallery', href: '/gallery', hasDropdown: false },
  { label: 'Other Services', href: '#services', hasDropdown: true, dropdownItems: otherServicesDropdown },
  { label: 'More', href: '#more', hasDropdown: true, dropdownItems: moreDropdown },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  // Reset scroll state and check position when pathname changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    // Reset to top state on route change, then check actual position
    setScrolled(false);
    // Use requestAnimationFrame to check after browser has settled
    requestAnimationFrame(() => {
      handleScroll();
    });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black py-3' : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <nav
        className="max-w-[2000px] mx-auto px-6 lg:px-12 2xl:px-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo Image */}
        <a
          href="/"
          className="flex items-center group focus:outline-none"
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
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.hasDropdown ? undefined : item.href}
                className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-all duration-300 uppercase tracking-wide group hover:-translate-y-0.5 focus:outline-none focus:text-white cursor-pointer"
              >
                {item.label}
                {item.hasDropdown && (
                  <iconify-icon
                    icon="solar:alt-arrow-down-linear"
                    width="14"
                    height="14"
                    className={`transform transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                )}
              </a>
              {/* Dropdown Menu */}
              {item.hasDropdown && item.dropdownItems && (
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                    activeDropdown === item.label
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-[#1a1a1a]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-2 min-w-[280px] shadow-2xl">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors group whitespace-nowrap"
                      >
                        <span className="text-white text-sm font-medium group-hover:translate-x-1 transition-transform">
                          {dropdownItem.label}
                        </span>
                        <span className="text-white/40 text-sm">
                          — {dropdownItem.description}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden xl:block">
          <Button variant="primary" size="sm" href="/contact">
            Book an appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 text-white rounded-lg focus:outline-none"
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
            className="transition-transform duration-300"
            aria-hidden="true"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`xl:hidden glass mt-2 mx-4 rounded-2xl transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-[calc(100vh-100px)] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="p-6">
          <ul className="flex flex-col gap-2" role="list">
            {navItems.map((item, index) => (
              <li key={item.label}>
                {item.hasDropdown && item.dropdownItems ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between text-white/80 hover:text-white py-3 border-b border-white/10 transition-all duration-300 focus:outline-none focus:text-white"
                      style={{ transitionDelay: `${index * 50}ms` }}
                      onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.label ? null : item.label)}
                      tabIndex={mobileMenuOpen ? 0 : -1}
                    >
                      {item.label}
                      <iconify-icon
                        icon="solar:alt-arrow-down-linear"
                        width="18"
                        height="18"
                        className={`transform transition-transform duration-300 ${mobileDropdownOpen === item.label ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    {/* Mobile Dropdown Items */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileDropdownOpen === item.label ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="py-2 pl-4 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="flex flex-col gap-0.5 py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
                            onClick={closeMenu}
                            tabIndex={mobileMenuOpen ? 0 : -1}
                          >
                            <span className="text-white text-sm font-medium">
                              {dropdownItem.label}
                            </span>
                            <span className="text-white/50 text-xs">
                              {dropdownItem.description}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center justify-between text-white/80 hover:text-white py-3 border-b border-white/10 hover:translate-x-2 transition-all duration-300 focus:outline-none focus:text-white"
                    style={{ transitionDelay: `${index * 50}ms` }}
                    onClick={closeMenu}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="mt-4">
              <Button
                variant="primary"
                size="md"
                href="/contact"
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
