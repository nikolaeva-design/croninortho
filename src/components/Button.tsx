'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  target,
  rel,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 
    font-medium transition-all duration-300 ease-out
    rounded-full cursor-pointer
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `;

  const variants = {
    primary: `
      bg-white text-[#1a2744]
      hover:bg-white/95 hover:scale-[1.02]
      focus:ring-white/50
      shadow-lg shadow-white/10
    `,
    secondary: `
      bg-transparent text-white
      border border-white/20
      hover:bg-white/5 hover:border-white/40 hover:scale-[1.02]
      focus:ring-white/30
    `,
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && (
        <iconify-icon
          icon={icon}
          width="16"
          height="16"
          aria-hidden="true"
        />
      )}
      {children}
    </>
  );

  if (href) {
    const isExternal =
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('//');

    // Use Next <Link> for internal navigation so basePath works (GitHub Pages).
    if (!isExternal && href.startsWith('/')) {
      return (
        <Link
          href={href}
          className={combinedStyles}
          onClick={onClick}
          aria-label={ariaLabel}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedStyles}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
