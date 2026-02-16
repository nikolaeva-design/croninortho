'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// When surgical orthodontics may be needed
const indications = [
  {
    title: 'Severe Bite Issues',
    description: 'When braces alone cannot correct significant overbite, underbite, or crossbite.',
    icon: 'solar:bolt-circle-bold',
  },
  {
    title: 'Jaw Misalignment',
    description: 'Upper and lower jaws that don\'t align properly, affecting function and appearance.',
    icon: 'solar:ruler-angular-bold',
  },
  {
    title: 'Facial Imbalance',
    description: 'Asymmetry or disproportion that impacts both aesthetics and oral function.',
    icon: 'solar:user-circle-bold',
  },
  {
    title: 'TMJ Disorders',
    description: 'Chronic jaw pain, clicking, or limited movement caused by structural issues.',
    icon: 'solar:health-bold',
  },
];

// Treatment process steps
const processSteps = [
  {
    title: 'Consultation & Planning',
    description: 'Comprehensive evaluation with 3D imaging to determine if surgery is needed.',
    tags: ['3D Analysis', 'Custom Plan'],
  },
  {
    title: 'Pre-Surgical Orthodontics',
    description: 'Braces align your teeth in preparation for surgery (12-18 months).',
    tags: ['Braces Placement', 'Surgery Prep'],
  },
  {
    title: 'Orthognathic Surgery',
    description: 'An oral surgeon repositions your jaw bones. Hospital-based with 2-week recovery.',
    tags: ['Expert Surgeon', '2-Week Recovery'],
  },
  {
    title: 'Post-Surgical Refinement',
    description: 'Final adjustments fine-tune your bite. Braces removed within 6-12 months.',
    tags: ['Bite Perfection', 'Retainer Fitting'],
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
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

export default function SurgicalOrthodonticsPage() {
  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Gemini_Generated_Image_39qssw39qssw39qs.png"
            alt="Perfect smile after surgical orthodontics treatment"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 mb-8 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#c9a962] animate-pulse-glow" />
              <span className="text-white/90 text-sm font-medium">Advanced Treatment</span>
            </div>

            {/* Title */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="text-white">Surgical Orthodontics</span>
            </h1>

            {/* Description */}
            <p 
              className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Corrective jaw surgery combined with orthodontic treatment for cases where braces alone aren&apos;t enough.
            </p>

            {/* CTA */}
            <div 
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Button variant="primary" size="lg" href="/contact#contact-form">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Surgical Orthodontics Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
                What is Surgical
                <span className="text-white/50 block">Orthodontics?</span>
              </h2>
              <div className="space-y-6 mb-10">
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Surgical orthodontics (orthognathic surgery) treats severe cases involving bad bites, jaw bone abnormalities, and malocclusion. When the jaws don&apos;t align correctly and braces alone can&apos;t achieve proper bite, surgery helps reposition the jaw while orthodontics moves the teeth into place.
                </p>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Your orthodontist works with an oral and maxillofacial surgeon to ensure the best possible results. Surgery is typically performed after jaw growth is complete—around age 16 for females and 18 for males.
                </p>
              </div>
              <Button variant="primary" size="md" href="/contact#contact-form">
                Schedule Evaluation
              </Button>
            </AnimatedSection>

            {/* Right - Image */}
            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/5] max-h-[500px] lg:max-h-[600px] rounded-3xl overflow-hidden">
                <Image
                  src="/Gemini_Generated_Image_m36i52m36i52m36i.png"
                  alt="Woman with beautiful smile after surgical orthodontics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  quality={100}
                  unoptimized
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* When is Surgery Needed Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                When It May Be
                <span className="text-white/50 block">Recommended</span>
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Surgery is considered when jaw positioning issues are too significant for braces alone.
              </p>
            </div>
          </AnimatedSection>

          {/* Indications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indications.map((indication, index) => (
              <AnimatedSection key={indication.title} delay={index * 100}>
                <div className="h-full p-6 lg:p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[#c9a962]/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center mb-6">
                    <iconify-icon icon={indication.icon} width="28" height="28" className="text-[#c9a962]" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-3">
                    {indication.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {indication.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                The Treatment
                <span className="text-white/50 block">Process</span>
              </h2>
            </div>
          </AnimatedSection>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-px bg-white/20" />
            
            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.title} delay={index * 100}>
                  <div className="relative group">
                    {/* Step Number Circle */}
                    <div className="relative z-10 w-[120px] h-[120px] mx-auto mb-6 rounded-full bg-[#0a0a0a] border border-white/20 group-hover:border-[#c9a962]/50 transition-all duration-300 flex items-center justify-center">
                      <div className="w-[100px] h-[100px] rounded-full bg-white/[0.03] group-hover:bg-[#c9a962]/10 transition-all duration-300 flex items-center justify-center">
                        <span className="text-[#c9a962] text-4xl font-bold">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-white text-xl font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      {/* Tags */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow connector - Desktop only */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-[60px] -translate-y-1/2 right-0 translate-x-1/2 z-20">
                        <span className="text-[#c9a962] text-2xl font-light">→</span>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Schedule a consultation to find out if surgical orthodontics is right for you.
            </p>
            <Button variant="primary" size="lg" href="/contact#contact-form">
              Book Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
