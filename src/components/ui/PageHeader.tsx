'use client';

import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

/**
 * Reusable page header component
 * Use this at the top of interior pages for consistent styling
 */
export default function PageHeader({
  title,
  subtitle,
  centered = false,
  className = '',
}: PageHeaderProps) {
  return (
    <div
      className={`py-16 lg:py-24 bg-gradient-to-b from-navy/50 to-background ${className}`}
    >
      <div
        className={`max-w-[1400px] mx-auto px-6 lg:px-12 ${centered ? 'text-center' : ''}`}
      >
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 text-lg lg:text-xl max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
