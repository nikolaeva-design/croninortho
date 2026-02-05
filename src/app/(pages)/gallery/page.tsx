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
        className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-[#c9a962]/30 transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
              <span className="text-white/80 text-xs font-medium">Before</span>
            </div>
          </div>

          {/* After Image */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <PlaceholderImage label="After" />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#c9a962]/80 backdrop-blur-sm">
              <span className="text-[#0a0a0a] text-xs font-medium">After</span>
            </div>
          </div>

          {/* Hover indicator */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
            <iconify-icon
              icon="solar:cursor-bold"
              width="14"
              height="14"
              className="text-white/60"
            />
            <span className="text-white/60 text-xs">Hover to see result</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/20 text-[#c9a962] text-xs font-medium">
              {item.treatment}
            </span>
            <span className="text-white/40 text-xs">{item.duration}</span>
          </div>
          <p className="text-white/60 text-sm">{item.description}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function GalleryPage() {
  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9a962]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#c9a962]/5 rounded-full blur-[120px]" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px),
                             linear-gradient(180deg, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Content */}
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40 w-full text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 mb-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a962] animate-pulse-glow" />
            <span className="text-white/90 text-sm font-medium">
              Smile Transformations
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="text-white">Our </span>
            <span className="text-white/50">Gallery</span>
          </h1>

          {/* Description */}
          <p
            className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Explore real smile transformations from our patients. Hover over each case to see the before and after results.
          </p>

          {/* CTA */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <Button variant="primary" size="lg" href="#gallery">
              View Transformations
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryItems.map((item, index) => (
              <GalleryCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div className="text-center">
                <div className="text-[#c9a962] text-5xl lg:text-6xl font-bold mb-2">30k</div>
                <p className="text-white/50 text-sm lg:text-base">Happy Patients</p>
              </div>
              <div className="text-center">
                <div className="text-[#c9a962] text-5xl lg:text-6xl font-bold mb-2">35+</div>
                <p className="text-white/50 text-sm lg:text-base">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-[#c9a962] text-5xl lg:text-6xl font-bold mb-2">99%</div>
                <p className="text-white/50 text-sm lg:text-base">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-[#c9a962] text-5xl lg:text-6xl font-bold mb-2">30k+</div>
                <p className="text-white/50 text-sm lg:text-base">Smile Transformations</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Join our community of happy patients and start your smile journey today. Book a consultation to discuss your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" href="/contact">
                Book Consultation
              </Button>
              <Button variant="secondary" size="lg" href="/orthodontics/adults">
                Explore Treatments
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
