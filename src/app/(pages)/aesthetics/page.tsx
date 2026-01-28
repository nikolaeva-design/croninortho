'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Complete Smile Components - 9 key elements
// Icons from: healthicons, mdi, fa6-solid, game-icons, fluent
const smileComponents = [
  {
    number: '01',
    title: 'Alignment & Contacts',
    description: 'Precise tooth positioning for seamless contact points and even bite force distribution.',
    icon: 'fa6-solid:teeth',
  },
  {
    number: '02',
    title: 'Smile Width',
    description: 'Optimizing the buccal corridor for a fuller, naturally radiant smile.',
    icon: 'mdi:emoticon-happy-outline',
  },
  {
    number: '03',
    title: 'Smile Arc',
    description: 'Creating a harmonious curve that mirrors your lower lip for youthful aesthetics.',
    icon: 'mdi:sine-wave',
  },
  {
    number: '04',
    title: 'Upper Tooth Position',
    description: 'Calibrating ideal tooth display (2-4mm at rest) for a vibrant appearance.',
    icon: 'mdi:tooth',
  },
  {
    number: '05',
    title: 'Midlines',
    description: 'Aligning dental and facial midlines for perfect symmetry and balance.',
    icon: 'mdi:reflect-vertical',
  },
  {
    number: '06',
    title: 'Occlusion',
    description: 'Ensuring proper bite alignment for comfort and long-term oral health.',
    icon: 'solar:layers-bold',
  },
  {
    number: '07',
    title: 'Tooth Shape & Proportion',
    description: 'Applying golden ratio principles for naturally beautiful tooth proportions.',
    icon: 'mdi:tooth-outline',
  },
  {
    number: '08',
    title: 'Gum Display & Shape',
    description: 'Sculpting balanced gingival contours for the ideal smile frame.',
    icon: 'solar:crown-minimalistic-bold',
  },
  {
    number: '09',
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

// Bento Card Component
function BentoCard({
  component,
  index,
  isFeatured,
  activeComponent,
  setActiveComponent,
}: {
  component: { number: string; title: string; description: string; icon: string };
  index: number;
  isFeatured: boolean;
  activeComponent: number | null;
  setActiveComponent: (index: number | null) => void;
}) {
  return (
    <div
      className="group relative h-full min-h-[200px]"
      style={{ transformStyle: 'preserve-3d' }}
      onMouseEnter={() => setActiveComponent(index)}
      onMouseLeave={() => setActiveComponent(null)}
    >
      {/* Card with 3D tilt effect */}
      <div
        className={`relative h-full rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden
          ${isFeatured ? 'p-6 lg:p-8' : 'p-5 lg:p-6'}
          ${activeComponent === index 
            ? 'bg-gradient-to-br from-[#c9a962]/15 to-[#c9a962]/5 border-[#c9a962]/50 shadow-2xl shadow-[#c9a962]/20' 
            : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10'}
          border backdrop-blur-sm
          group-hover:[transform:rotateX(2deg)_rotateY(-2deg)_translateZ(10px)]
          group-hover:shadow-[0_25px_50px_-12px_rgba(201,169,98,0.15)]`}
        style={{ 
          transformStyle: 'preserve-3d',
          transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease, background 0.5s ease, border-color 0.5s ease'
        }}
      >
        {/* Animated shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
        </div>

        {/* Large decorative number in background */}
        <div 
          className={`absolute -right-2 -bottom-4 font-bold transition-all duration-500 pointer-events-none select-none
            ${isFeatured ? 'text-[90px] lg:text-[110px]' : 'text-6xl lg:text-7xl'}
            ${activeComponent === index ? 'text-[#c9a962]/10' : 'text-white/[0.02]'}`}
          style={{ transform: 'translateZ(-20px)' }}
        >
          {component.number}
        </div>

        {/* Icon with 3D float effect */}
        <div 
          className="absolute top-4 right-4 lg:top-5 lg:right-5 z-10"
          style={{ transform: 'translateZ(30px)' }}
        >
          <div className={`relative ${isFeatured ? 'w-11 h-11 lg:w-12 lg:h-12' : 'w-9 h-9 lg:w-10 lg:h-10'} rounded-xl flex items-center justify-center transition-all duration-300
            ${activeComponent === index 
              ? 'bg-[#c9a962] shadow-lg shadow-[#c9a962]/40' 
              : 'bg-white/[0.05] border border-white/10'}`}>
            <iconify-icon
              icon={component.icon}
              width={isFeatured ? '22' : '18'}
              height={isFeatured ? '22' : '18'}
              className={`transition-colors duration-300 ${activeComponent === index ? 'text-[#0a0a0a]' : 'text-white/50'}`}
            />
          </div>
        </div>

        {/* Decorative corner lines */}
        <div className={`absolute top-3 right-3 w-12 h-12 lg:w-14 lg:h-14 transition-opacity duration-300 pointer-events-none
          ${activeComponent === index ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-[#c9a962]/30 rounded-tr-2xl" />
        </div>
        <div className={`absolute bottom-3 left-3 w-12 h-12 lg:w-14 lg:h-14 transition-opacity duration-300 pointer-events-none
          ${activeComponent === index ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-0 left-0 w-full h-full border-b-2 border-l-2 border-[#c9a962]/30 rounded-bl-2xl" />
        </div>

        {/* Content with 3D depth */}
        <div 
          className="relative z-10"
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Number badge */}
          <div className={`inline-flex items-center justify-center rounded-xl mb-3 transition-all duration-300
            ${isFeatured ? 'w-11 h-11 lg:w-12 lg:h-12' : 'w-9 h-9 lg:w-10 lg:h-10'}
            ${activeComponent === index 
              ? 'bg-[#c9a962] shadow-lg shadow-[#c9a962]/30' 
              : 'bg-white/[0.05] border border-white/10'}`}>
            <span className={`font-bold transition-colors duration-300
              ${isFeatured ? 'text-base lg:text-lg' : 'text-sm lg:text-base'}
              ${activeComponent === index ? 'text-[#0a0a0a]' : 'text-white/70'}`}>
              {component.number}
            </span>
          </div>
          
          {/* Title */}
          <h3 className={`font-semibold transition-colors duration-300 pr-12 lg:pr-14 mb-2
            ${isFeatured ? 'text-lg lg:text-xl' : 'text-base lg:text-lg'}
            ${activeComponent === index ? 'text-[#c9a962]' : 'text-white'}`}>
            {component.title}
          </h3>
          
          {/* Description */}
          <p className={`leading-relaxed transition-colors duration-300
            ${isFeatured ? 'text-sm lg:text-base' : 'text-xs lg:text-sm'}
            ${activeComponent === index ? 'text-white/70' : 'text-white/50'}`}>
            {component.description}
          </p>

          {/* Extra content for featured cards */}
          {isFeatured && (
            <div className={`mt-4 pt-4 border-t transition-colors duration-300 ${activeComponent === index ? 'border-[#c9a962]/20' : 'border-white/5'}`}>
              <div className="flex items-center gap-2 text-sm">
                <iconify-icon
                  icon="solar:star-bold"
                  width="14"
                  height="14"
                  className={`transition-colors duration-300 ${activeComponent === index ? 'text-[#c9a962]' : 'text-white/40'}`}
                />
                <span className={`text-xs lg:text-sm transition-colors duration-300 ${activeComponent === index ? 'text-[#c9a962]' : 'text-white/40'}`}>
                  Key component
                </span>
              </div>
            </div>
          )}
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
            src="/facial-balance-harmony-v2.png"
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

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px),
                             linear-gradient(180deg, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

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
              <Button variant="primary" size="lg" href="#contact">
                Book Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#smile-components"
                icon="solar:arrow-down-linear"
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
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#c9a962]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#c9a962]/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-[1800px] mx-auto px-6 lg:px-12 w-full">
          {/* Section Header */}
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-24">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium mb-6">
                <iconify-icon
                  icon="solar:star-shine-bold"
                  width="14"
                  height="14"
                  className="text-[#c9a962]"
                />
                9 Components of Perfection
              </div>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                The Science of a
                <span className="text-[#c9a962] block">Beautiful Smile</span>
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Every exceptional smile is built on these 9 fundamental components,
                each carefully analyzed and optimized for your unique features.
              </p>
            </div>
          </AnimatedSection>

          {/* Bento Grid Layout with 3D Tilt */}
          {/* Layout: 
              Row 1: [01 - 2col] [02] [03]
              Row 2: [04] [05] [IMAGE - 2col, 2rows]
              Row 3: [06] [07] [IMAGE cont.]
              Row 4: [08 - 2col] [09 - 2col]
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 perspective-[2000px]">
            {/* Row 1: Card 01 (2col) + Card 02 + Card 03 */}
            {smileComponents.slice(0, 3).map((component, index) => {
              const isFeatured = index === 0; // Only first card is featured in row 1
              
              return (
                <AnimatedSection 
                  key={component.number}
                  delay={100 + index * 60}
                  className={`${isFeatured ? 'md:col-span-2' : ''} h-full`}
                >
                  <BentoCard 
                    component={component} 
                    index={index} 
                    isFeatured={isFeatured}
                    activeComponent={activeComponent}
                    setActiveComponent={setActiveComponent}
                  />
            </AnimatedSection>
              );
            })}

            {/* Row 2: Card 04 + Card 05 + Image Block (starts here, spans 2 rows) */}
            {smileComponents.slice(3, 5).map((component, index) => (
              <AnimatedSection 
                key={component.number}
                delay={280 + index * 60}
                className="h-full"
              >
                <BentoCard 
                  component={component} 
                  index={index + 3} 
                  isFeatured={false}
                  activeComponent={activeComponent}
                  setActiveComponent={setActiveComponent}
                />
                </AnimatedSection>
              ))}

            {/* Image Block - spans 2 columns and 2 rows */}
            <AnimatedSection 
              delay={400}
              className="md:col-span-2 lg:col-span-2 lg:row-span-2 h-full"
            >
              <div className="group relative h-full min-h-[280px] lg:min-h-full rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#c9a962]/30 transition-all duration-500">
                {/* Background Image */}
                <Image
                  src="/smile-woman.png"
                  alt="Beautiful smile showcasing all 9 components"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a962]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a962]/20 backdrop-blur-sm border border-[#c9a962]/30 w-fit">
                          <iconify-icon
                        icon="solar:star-shine-bold"
                        width="14"
                        height="14"
                        className="text-[#c9a962]"
                      />
                      <span className="text-[#c9a962] text-xs font-medium">Aesthetic Excellence</span>
                        </div>
                    <h4 className="text-white text-xl lg:text-2xl font-semibold">
                      9 Specialized Services<br />
                      <span className="text-white/60">For Your Perfect Smile</span>
                    </h4>
                    <p className="text-white/50 text-sm max-w-xs">
                      Comprehensive aesthetic treatments designed to enhance every aspect of your smile.
                          </p>
                        </div>
                      </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-[#c9a962]/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-[#c9a962]/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </AnimatedSection>

            {/* Row 3: Card 06 + Card 07 (Image continues from row 2) */}
            {smileComponents.slice(5, 7).map((component, index) => (
              <AnimatedSection 
                key={component.number}
                delay={460 + index * 60}
                className="h-full"
              >
                <BentoCard 
                  component={component} 
                  index={index + 5} 
                  isFeatured={false}
                  activeComponent={activeComponent}
                  setActiveComponent={setActiveComponent}
                />
              </AnimatedSection>
            ))}

            {/* Row 4: Card 08 (2col) + Card 09 (2col) */}
            {smileComponents.slice(7, 9).map((component, index) => (
              <AnimatedSection 
                key={component.number}
                delay={580 + index * 60}
                className="md:col-span-1 lg:col-span-2 h-full"
              >
                <BentoCard 
                  component={component} 
                  index={index + 7} 
                  isFeatured={true}
                  activeComponent={activeComponent}
                  setActiveComponent={setActiveComponent}
                />
                  </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={600}>
            <div className="text-center mt-16 lg:mt-24">
              <p className="text-white/50 mb-6">
                Ready to discover your perfect smile?
              </p>
              <Button variant="primary" size="lg" href="#contact">
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
              <Button variant="secondary" size="md" href="#contact">
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
                  href="mailto:info@croninortho.com"
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
                      info@croninortho.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+1234567890"
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
                    <div className="text-white font-medium">(123) 456-7890</div>
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
                      123 Main St, City, State 12345
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
                        placeholder="(123) 456-7890"
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
