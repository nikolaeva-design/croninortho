'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Complete Smile Components - 6 key elements arranged in circular layout
// Icons from: healthicons, mdi, fa6-solid, game-icons, fluent
const smileComponents = [
  {
    number: '01',
    title: 'Alignment & Contacts',
    description: 'Precise tooth positioning for seamless contact points and even bite force.',
    icon: 'fa6-solid:teeth',
  },
  {
    number: '02',
    title: 'Smile Arc & Width',
    description: 'Creating a harmonious curve that mirrors your lower lip for youthful aesthetics.',
    icon: 'mdi:sine-wave',
  },
  {
    number: '03',
    title: 'Tooth Position',
    description: 'Calibrating ideal tooth display (2-4mm at rest) for a vibrant appearance.',
    icon: 'mdi:tooth',
  },
  {
    number: '04',
    title: 'Midlines & Symmetry',
    description: 'Aligning dental and facial midlines for perfect symmetry and balance.',
    icon: 'mdi:reflect-vertical',
  },
  {
    number: '05',
    title: 'Tooth Shape & Gums',
    description: 'Golden ratio proportions with sculpted gingival contours for the ideal frame.',
    icon: 'solar:crown-minimalistic-bold',
  },
  {
    number: '06',
    title: 'Facial Balance',
    description: 'Designing your smile to complement your unique facial features.',
    icon: 'solar:face-scan-circle-bold',
  },
];

// FAQ Data
const faqs = [
  {
    question: 'What is included in an aesthetic consultation?',
    answer:
      'Our aesthetic consultation includes a comprehensive facial analysis, digital smile design, discussion of your aesthetic goals, and a personalized treatment plan. We use advanced imaging technology to show you potential results before treatment begins.',
  },
  {
    question: 'How long does aesthetic treatment typically take?',
    answer:
      'Treatment duration varies based on your specific needs. Minor aesthetic improvements may take a few months, while comprehensive smile makeovers typically range from 12-24 months. We\'ll provide a detailed timeline during your consultation.',
  },
  {
    question: 'Is aesthetic orthodontic treatment painful?',
    answer:
      'Modern aesthetic treatments are designed for comfort. You may experience mild discomfort during adjustment periods, but most patients find treatment very manageable. We provide guidance on managing any temporary sensitivity.',
  },
  {
    question: 'Can adults benefit from aesthetic orthodontics?',
    answer:
      'Absolutely! There\'s no age limit for achieving a beautiful smile. Many of our adult patients choose discreet options like Invisalign or ceramic braces that fit seamlessly into their professional and personal lives.',
  },
  {
    question: 'How do you determine the ideal smile for my face?',
    answer:
      'We use digital facial analysis combined with artistic principles to design a smile that complements your unique features. This includes analyzing facial proportions, lip dynamics, tooth display, and your personal preferences.',
  },
  {
    question: 'What financing options are available?',
    answer:
      'We offer flexible payment plans and work with most insurance providers. During your consultation, we\'ll provide a detailed cost breakdown and discuss financing options to make treatment accessible.',
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

// Smile Card Component for desktop orbital layout
function SmileCard({
  component,
  index,
  activeComponent,
  setActiveComponent,
}: {
  component: { number: string; title: string; description: string; icon: string };
  index: number;
  activeComponent: number | null;
  setActiveComponent: (index: number | null) => void;
}) {
  const isActive = activeComponent === index;
  
  return (
    <div
      className="group w-[240px]"
      onMouseEnter={() => setActiveComponent(index)}
      onMouseLeave={() => setActiveComponent(null)}
    >
      <div
        className={`relative p-5 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-md
          ${isActive 
            ? 'bg-gradient-to-br from-[#c9a962]/25 to-[#c9a962]/5 border-[#c9a962]/60 shadow-2xl shadow-[#c9a962]/30 scale-105' 
            : 'bg-[#0a0a0a]/90 border-white/[0.08] hover:bg-[#0a0a0a]/95 hover:border-white/15 hover:scale-[1.02]'}
          border`}
      >
        {/* Background number watermark */}
        <div 
          className={`absolute -right-2 -bottom-4 text-6xl font-bold transition-all duration-500 pointer-events-none select-none
            ${isActive ? 'text-[#c9a962]/15' : 'text-white/[0.03]'}`}
        >
          {component.number}
        </div>

        {/* Icon & Number */}
        <div className="relative z-10 flex items-start justify-between mb-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
            ${isActive 
              ? 'bg-[#c9a962] shadow-lg shadow-[#c9a962]/40' 
              : 'bg-white/[0.05] border border-white/10'}`}>
            <iconify-icon
              icon={component.icon}
              width="20"
              height="20"
              className={`transition-colors duration-300 ${isActive ? 'text-[#0a0a0a]' : 'text-white/60'}`}
            />
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full transition-all duration-300
            ${isActive ? 'bg-[#c9a962]/20 text-[#c9a962]' : 'bg-white/5 text-white/40'}`}>
            {component.number}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className={`font-semibold text-base mb-2 transition-colors duration-300
            ${isActive ? 'text-[#c9a962]' : 'text-white'}`}>
            {component.title}
          </h3>
          <p className={`text-xs leading-relaxed transition-colors duration-300
            ${isActive ? 'text-white/70' : 'text-white/50'}`}>
            {component.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// Mobile Card Component for smaller screens
function MobileCard({
  component,
  index,
  activeComponent,
  setActiveComponent,
}: {
  component: { number: string; title: string; description: string; icon: string };
  index: number;
  activeComponent: number | null;
  setActiveComponent: (index: number | null) => void;
}) {
  const isActive = activeComponent === index;
  
  return (
    <div
      className="group relative"
      onMouseEnter={() => setActiveComponent(index)}
      onMouseLeave={() => setActiveComponent(null)}
    >
      <div
        className={`relative p-5 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden
          ${isActive 
            ? 'bg-gradient-to-br from-[#c9a962]/15 to-[#c9a962]/5 border-[#c9a962]/50 shadow-xl shadow-[#c9a962]/20' 
            : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10'}
          border backdrop-blur-sm`}
      >
        {/* Background number */}
        <div 
          className={`absolute -right-1 -bottom-2 text-5xl font-bold transition-all duration-500 pointer-events-none select-none
            ${isActive ? 'text-[#c9a962]/10' : 'text-white/[0.02]'}`}
        >
          {component.number}
        </div>

        {/* Icon & Number */}
        <div className="relative z-10 flex items-start justify-between mb-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
            ${isActive 
              ? 'bg-[#c9a962] shadow-lg shadow-[#c9a962]/40' 
              : 'bg-white/[0.05] border border-white/10'}`}>
            <iconify-icon
              icon={component.icon}
              width="20"
              height="20"
              className={`transition-colors duration-300 ${isActive ? 'text-[#0a0a0a]' : 'text-white/60'}`}
            />
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full transition-all duration-300
            ${isActive ? 'bg-[#c9a962]/20 text-[#c9a962]' : 'bg-white/5 text-white/40'}`}>
              {component.number}
            </span>
          </div>
          
        {/* Content */}
        <div className="relative z-10">
          <h3 className={`font-semibold text-base mb-2 transition-colors duration-300
            ${isActive ? 'text-[#c9a962]' : 'text-white'}`}>
            {component.title}
          </h3>
          <p className={`text-xs leading-relaxed transition-colors duration-300
            ${isActive ? 'text-white/70' : 'text-white/50'}`}>
            {component.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AestheticsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeComponent, setActiveComponent] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll contact you shortly to schedule your consultation.');
  };

  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src="/cta-consultation-bg.png"
            alt="Aesthetic smile design showcasing facial balance and harmony"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
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
              <span className="text-white/90 text-sm font-medium">
                Aesthetic Excellence
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="text-white">Aesthetic </span>
              <span className="text-white/50">Services</span>
            </h1>

            {/* Description */}
            <p
              className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              More than just straight teeth — a comprehensive approach to smile
              design that considers every detail of facial aesthetics.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Button variant="primary" size="lg" href="/contact#contact-form">
                Book Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#smile-components"
              >
                Discover More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          className="absolute bottom-8 left-0 right-0 mx-auto w-fit z-10 scroll-indicator p-3 rounded-full hover:bg-white/10 transition-colors"
          onClick={() =>
            document
              .getElementById('smile-components')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          aria-label="Scroll down"
        >
          <iconify-icon
            icon="solar:alt-arrow-down-linear"
            width="24"
            height="24"
            className="text-white/50"
          />
        </button>
      </section>

      {/* Smile Components Section - Semi-Circular Layout */}
      <section
        id="smile-components"
        className="py-24 lg:py-40 bg-[#0a0a0a] relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#c9a962]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#c9a962]/5 rounded-full blur-[120px]" />
        </div>

        {/* Section Header - inside padded container */}
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium mb-6">
                <iconify-icon
                  icon="solar:star-shine-bold"
                  width="14"
                  height="14"
                  className="text-[#c9a962]"
                />
                6 Components of Perfection
              </div>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                The Science of a
                <span className="text-[#c9a962] block">Beautiful Smile</span>
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Every exceptional smile is built on these 6 fundamental components,
                each carefully analyzed and optimized for your unique features.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Circular/Orbital Layout - Desktop */}
        <div className="hidden lg:flex justify-center items-center w-full" style={{ minHeight: '850px' }}>
          <div className="relative" style={{ width: '900px', height: '850px' }}>
              
              {/* Center circle with glow */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Outer glow */}
                <div className="absolute -inset-8 bg-[#c9a962]/20 rounded-full blur-[60px]" />
                
                {/* Golden ring with image */}
                <div className="relative w-[280px] h-[280px] rounded-full border-[3px] border-[#c9a962]/60 overflow-hidden">
                  <Image
                    src="/Gemini_Generated_Image_g4z48ug4z48ug4z4-copy-2.png"
                    alt="Beautiful smile showcasing all components"
                    fill
                    className="object-cover object-[center_55%] scale-110"
                    sizes="280px"
                  />
                </div>
              </div>

              {/* 6 Cards arranged clockwise: 01→02→03→04→05→06 */}
              {/* Card 01 - Top Center */}
              <div 
                className="absolute z-20"
                style={{ left: '50%', top: '3%', transform: 'translateX(-50%)' }}
              >
                <SmileCard 
                  component={smileComponents[0]} 
                  index={0}
                  activeComponent={activeComponent}
                  setActiveComponent={setActiveComponent}
                />
              </div>

              {/* Card 02 - Upper Right */}
              <div 
                className="absolute z-20"
                style={{ right: '3%', top: '20%' }}
              >
                <SmileCard 
                  component={smileComponents[1]} 
                  index={1}
                  activeComponent={activeComponent}
                  setActiveComponent={setActiveComponent}
                />
              </div>

              {/* Card 03 - Lower Right */}
              <div 
                className="absolute z-20"
                style={{ right: '3%', bottom: '20%' }}
              >
                <SmileCard 
                  component={smileComponents[2]} 
                  index={2}
                  activeComponent={activeComponent}
                  setActiveComponent={setActiveComponent}
                />
              </div>

              {/* Card 04 - Bottom Center */}
              <div 
                className="absolute z-20"
                style={{ left: '50%', bottom: '3%', transform: 'translateX(-50%)' }}
              >
                <SmileCard 
                  component={smileComponents[3]} 
                  index={3}
                  activeComponent={activeComponent}
                  setActiveComponent={setActiveComponent}
                />
              </div>

              {/* Card 05 - Lower Left */}
              <div 
                className="absolute z-20"
                style={{ left: '3%', bottom: '20%' }}
              >
                <SmileCard 
                  component={smileComponents[4]} 
                  index={4}
                  activeComponent={activeComponent}
                  setActiveComponent={setActiveComponent}
                />
              </div>

              {/* Card 06 - Upper Left */}
              <div 
                className="absolute z-20"
                style={{ left: '3%', top: '20%' }}
              >
                <SmileCard 
                  component={smileComponents[5]} 
                  index={5}
                  activeComponent={activeComponent}
                  setActiveComponent={setActiveComponent}
                />
              </div>
            </div>
          </div>

        {/* Mobile Layout and CTA - inside padded container */}
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Mobile Layout - Grid */}
          <div className="lg:hidden">
            {/* Center Image for Mobile */}
            <AnimatedSection delay={100} className="mb-8">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden border-4 border-[#c9a962]/30 shadow-xl shadow-[#c9a962]/20">
                <Image
                  src="/Gemini_Generated_Image_g4z48ug4z48ug4z4-copy-2.png"
                  alt="Beautiful smile showcasing all components"
                  fill
                  className="object-cover object-[center_55%] scale-110"
                  sizes="250px"
                />
              </div>
              </AnimatedSection>

            {/* Mobile Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {smileComponents.map((component, index) => (
                <AnimatedSection key={component.number} delay={200 + index * 80}>
                  <MobileCard
                  component={component} 
                    index={index}
                  activeComponent={activeComponent}
                  setActiveComponent={setActiveComponent}
                />
                  </AnimatedSection>
            ))}
            </div>
          </div>

          {/* CTA */}
          <AnimatedSection delay={600}>
            <div className="text-center mt-16 lg:mt-24">
              <p className="text-white/50 mb-6">
                Ready to discover your perfect smile?
              </p>
              <Button variant="primary" size="lg" href="/contact#contact-form">
                Start Your Smile Analysis
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                FAQs
              </h2>
              <p className="text-white/50 text-lg">
                Common questions about our aesthetic services.
              </p>
            </div>
          </AnimatedSection>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 50}>
                <div className="rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                  >
                    <span className="text-white font-medium pr-4">
                      {faq.question}
                    </span>
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      width="20"
                      height="20"
                      className={`text-white/50 transition-transform duration-300 flex-shrink-0 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 pb-6 text-white/50 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-12 text-center">
              <p className="text-white/50 mb-4">Still have questions?</p>
              <Button variant="secondary" size="md" href="/contact#contact-form">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Info */}
            <AnimatedSection>
              <h2 className="text-white text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Ready for Your
                <span className="text-[#c9a962] block">Perfect Smile?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Book your aesthetic consultation today and discover how we can
                transform your smile with precision and artistry.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:info@ronianortho.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#c9a962]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <iconify-icon
                      icon="solar:letter-bold"
                      width="24"
                      height="24"
                      className="text-[#c9a962]"
                    />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">Email</div>
                    <div className="text-white font-medium">
                      info@ronianortho.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+16045331151"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#c9a962]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <iconify-icon
                      icon="solar:phone-bold"
                      width="24"
                      height="24"
                      className="text-[#c9a962]"
                    />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">Phone</div>
                    <div className="text-white font-medium">(604) 533-1151</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center">
                    <iconify-icon
                      icon="solar:map-point-bold"
                      width="24"
                      height="24"
                      className="text-[#c9a962]"
                    />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">Address</div>
                    <div className="text-white font-medium">
                      Langley, BC, Canada
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Form */}
            <AnimatedSection delay={200}>
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5"
              >
                <h3 className="text-white text-2xl font-semibold mb-6">
                  Request Consultation
                </h3>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white/70 text-sm mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-white/70 text-sm mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors"
                        placeholder="(604) 533-1151"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white/70 text-sm mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-white/70 text-sm mb-2"
                    >
                      Primary Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#c9a962] transition-colors"
                    >
                      <option value="" className="bg-[#1a1a1a]">
                        Select an option
                      </option>
                      <option value="smile-analysis" className="bg-[#1a1a1a]">
                        Complete Smile Analysis
                      </option>
                      <option value="alignment" className="bg-[#1a1a1a]">
                        Alignment & Straightening
                      </option>
                      <option value="aesthetics" className="bg-[#1a1a1a]">
                        Aesthetic Enhancement
                      </option>
                      <option value="consultation" className="bg-[#1a1a1a]">
                        General Consultation
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white/70 text-sm mb-2"
                    >
                      Tell Us About Your Goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors resize-none"
                      placeholder="What would you like to achieve with your smile?"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 px-8 py-4 bg-[#c9a962] text-[#0a0a0a] font-semibold rounded-full hover:bg-[#d4b978] transition-colors"
                >
                  Request Consultation
                </button>

                <p className="text-white/40 text-xs text-center mt-4">
                  By submitting, you agree to our privacy policy. We&apos;ll
                  contact you within 24 hours.
                </p>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
