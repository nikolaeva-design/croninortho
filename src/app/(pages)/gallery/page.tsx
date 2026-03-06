'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components';

// Placeholder gallery items
const galleryItems = [
  {
    id: 1,
    category: 'braces',
    treatment: 'Traditional Braces',
    duration: '18 months',
    description: 'Corrected severe crowding and overbite',
  },
  {
    id: 2,
    category: 'invisalign',
    treatment: 'Invisalign',
    duration: '12 months',
    description: 'Fixed spacing issues and mild crowding',
  },
  {
    id: 3,
    category: 'adults',
    treatment: 'Clear Braces',
    duration: '16 months',
    description: 'Adult treatment for crossbite correction',
  },
  {
    id: 4,
    category: 'teens',
    treatment: 'Traditional Braces',
    duration: '20 months',
    description: 'Teen treatment for open bite',
  },
  {
    id: 5,
    category: 'invisalign',
    treatment: 'Invisalign',
    duration: '14 months',
    description: 'Corrected underbite and crowding',
  },
  {
    id: 6,
    category: 'braces',
    treatment: 'Traditional Braces',
    duration: '22 months',
    description: 'Complex case with extraction',
  },
  {
    id: 7,
    category: 'adults',
    treatment: 'Invisalign',
    duration: '10 months',
    description: 'Minor alignment correction',
  },
  {
    id: 8,
    category: 'teens',
    treatment: 'Clear Braces',
    duration: '15 months',
    description: 'Gap closure and alignment',
  },
  {
    id: 9,
    category: 'invisalign',
    treatment: 'Invisalign',
    duration: '11 months',
    description: 'Overcrowding correction',
  },
];

// Animation hook for scroll-triggered animations
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Animated section wrapper component
function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Placeholder image component
function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] flex items-center justify-center">
      <div className="text-center">
        <iconify-icon
          icon="solar:gallery-bold"
          width="32"
          height="32"
          className="text-white/20 mb-2"
        />
        <p className="text-white/30 text-xs">{label}</p>
      </div>
    </div>
  );
}

// Gallery card component
function GalleryCard({
  item,
  index,
}: {
  item: (typeof galleryItems)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedSection delay={index * 50}>
      <div
        className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-[#c9a962]/30 transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
      >
        {/* Before/After Container */}
        <div className="relative aspect-[4/3]">
          {/* Before Image */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <PlaceholderImage label="Before" />
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
              <span className="text-white/80 text-[10px] sm:text-xs font-medium">Before</span>
            </div>
          </div>

          {/* After Image */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <PlaceholderImage label="After" />
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#c9a962]/80 backdrop-blur-sm">
              <span className="text-[#0a0a0a] text-[10px] sm:text-xs font-medium">After</span>
            </div>
          </div>

          {/* Hover/Tap indicator */}
          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
            <iconify-icon
              icon="solar:cursor-bold"
              width="12"
              height="12"
              className="text-white/60 sm:w-3.5 sm:h-3.5"
            />
            <span className="text-white/60 text-[10px] sm:text-xs hidden sm:inline">Hover to see result</span>
            <span className="text-white/60 text-[10px] sm:hidden">Tap to see result</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/20 text-[#c9a962] text-[10px] sm:text-xs font-medium">
              {item.treatment}
            </span>
            <span className="text-white/40 text-[10px] sm:text-xs">{item.duration}</span>
          </div>
          <p className="text-white/60 text-xs sm:text-sm">{item.description}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function GalleryPage() {
  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero & Coming Soon Section */}
      <section id="gallery" className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#c9a962]/5 rounded-full blur-[100px] sm:blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#c9a962]/5 rounded-full blur-[80px] sm:blur-[120px]" />
        </div>

        {/* Content */}
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 py-20 sm:py-32 lg:py-40 w-full text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 mb-6 sm:mb-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a962] animate-pulse-glow" />
            <span className="text-white/90 text-xs sm:text-sm font-medium">
              Smile Transformations
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 sm:mb-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="text-white">Our </span>
            <span className="text-white/50">Gallery</span>
          </h1>

          {/* Gallery Icon */}
          <div
            className="mb-8 sm:mb-10 flex justify-center animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center">
              <iconify-icon
                icon="solar:gallery-bold"
                width="40"
                height="40"
                className="text-[#c9a962]"
              />
            </div>
          </div>

          {/* Description */}
          <p
            className="text-white/60 text-sm sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            We're preparing an amazing collection of before and after smile transformations. 
            Check back soon to see the incredible results our patients have achieved!
          </p>
        </div>
      </section>

      {/* Gallery Section - HIDDEN FOR NOW (images not ready) */}
      {/* 
      <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {galleryItems.map((item, index) => (
              <GalleryCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
      */}

    </div>
  );
}
