'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Warning signs for teens
const warningSignsGroups = [
  {
    title: 'Alignment Issues',
    description: 'Common teeth and bite problems in teenagers.',
    signs: ['Crowded or overlapping teeth', 'Gaps between teeth', 'Crooked smile'],
  },
  {
    title: 'Bite Problems',
    description: 'Issues with how upper and lower teeth meet.',
    signs: ['Overbite or underbite', 'Crossbite', 'Open bite when closing'],
  },
  {
    title: 'Functional Concerns',
    description: 'Signs affecting daily activities.',
    signs: ['Difficulty chewing', 'Speech issues', 'Jaw pain or clicking'],
  },
];

// Treatment process steps
const processSteps = [
  {
    title: 'Consultation',
    description: 'Meet our team to discuss your smile goals and explore treatment options that fit your lifestyle.',
    tags: ['30 minutes', 'No obligation', 'Teen-friendly'],
  },
  {
    title: 'Digital Scan',
    description: 'State-of-the-art 3D scanning creates a precise model of your teeth - no messy impressions.',
    tags: ['No goop', '3D imaging', 'Quick & easy'],
  },
  {
    title: 'Custom Plan',
    description: 'See your predicted results before starting. Choose from braces, clear aligners, or combination.',
    tags: ['Preview results', 'Flexible options', 'Clear pricing'],
  },
  {
    title: 'Transform',
    description: 'Regular check-ins track your progress. Most teens see amazing results in 12-24 months.',
    tags: ['Progress tracking', 'Flexible scheduling', 'Expert care'],
  },
];

// What to expect items
const whatToExpectItems = [
  {
    title: 'Relaxed Environment',
    description: 'Our modern office is designed with teens in mind - comfortable, welcoming, and judgement-free.',
    tags: ['Teen-friendly vibe', 'Modern space', 'Positive atmosphere'],
  },
  {
    title: 'Advanced Technology',
    description: 'Digital scans, 3D treatment planning, and the latest orthodontic technology for better results.',
    tags: ['No impressions', '3D visualization', 'Precise planning'],
  },
  {
    title: 'Treatment Options',
    description: 'We\'ll explain all your options - from traditional braces to nearly invisible aligners.',
    tags: ['Clear explanations', 'Multiple options', 'Your choice'],
  },
  {
    title: 'Personalized Timeline',
    description: 'Get a clear picture of your treatment journey, including duration and what to expect at each stage.',
    tags: ['Clear timeline', 'Set expectations', 'Milestone tracking'],
  },
];

// Common treatments for teens
const treatmentOptions = [
  {
    title: 'Metal Braces',
    description: 'Classic, effective treatment with modern low-profile brackets. Customize with colored bands!',
    tags: ['Most effective', 'Color options', 'Affordable'],
  },
  {
    title: 'Clear/Ceramic Braces',
    description: 'Tooth-colored brackets that blend with your smile while delivering the same great results.',
    tags: ['Less visible', 'Same effectiveness', 'Popular choice'],
  },
  {
    title: 'Invisalign Teen',
    description: 'Clear, removable aligners designed specifically for teenage lifestyles and growing mouths.',
    tags: ['Nearly invisible', 'Removable', 'No food restrictions'],
  },
];

// Feature sections
const featureSections = [
  {
    number: '01',
    badge: 'Confidence',
    title: 'Your Smile',
    subtitle: 'Your Way',
    description: 'High school, sports, photos, prom - we get it. That\'s why we offer treatment options that fit your lifestyle and let you feel confident throughout.',
    features: [
      'Options for every lifestyle',
      'Minimal impact on activities',
      'Results you\'ll love',
      'Boost your confidence',
    ],
    image: '/teens-ortho.jpg',
    imagePosition: 'right',
  },
  {
    number: '02',
    badge: 'Technology',
    title: 'Next-Level',
    subtitle: 'Treatment',
    description: 'We use the latest technology to make your treatment faster, more comfortable, and more precise. See your future smile before you even start.',
    features: [
      '3D treatment simulation',
      'Digital scanning (no goop)',
      'Faster treatment times',
      'Fewer office visits',
    ],
    image: '/Gemini_Generated_Image_ojvtklojvtklojvt.png',
    imagePosition: 'left',
  },
  {
    number: '03',
    badge: 'Lifestyle',
    title: 'Life Doesn\'t',
    subtitle: 'Stop',
    description: 'Sports, music, social life - we design your treatment to work around what matters to you. Most activities continue without interruption.',
    features: [
      'Sports-friendly options',
      'Band & music compatible',
      'Easy to maintain',
      'Flexible appointments',
    ],
    image: '/teens-ortho.jpg',
    imagePosition: 'right',
  },
];

// Testimonials
const testimonials = [
  {
    quote: 'I was nervous about getting braces before junior year, but Dr. Cronin made me feel so comfortable. Plus, the colored bands are actually pretty cool!',
    author: 'Madison K.',
    role: 'Age 16, Metal Braces',
    avatar: 'M',
    rating: 5,
  },
  {
    quote: 'Invisalign was perfect for me since I play soccer. I can take them out for games and no one even knows I\'m in treatment.',
    author: 'Tyler R.',
    role: 'Age 15, Invisalign Teen',
    avatar: 'T',
    rating: 5,
  },
  {
    quote: 'The whole team treats you like a person, not just another patient. My smile looks amazing now and it only took 18 months!',
    author: 'Sophia L.',
    role: 'Age 17, Clear Braces',
    avatar: 'S',
    rating: 5,
  },
];

// FAQs
const faqs = [
  {
    question: 'How long will I need to wear braces?',
    answer: 'Most teen treatments take 12-24 months, depending on your specific needs. During your consultation, we\'ll give you a personalized timeline based on your treatment plan.',
  },
  {
    question: 'Can I still play sports with braces?',
    answer: 'Absolutely! We recommend wearing a mouthguard during contact sports, which we can provide. Many athletes successfully complete treatment while competing at high levels.',
  },
  {
    question: 'Do braces hurt?',
    answer: 'You may experience some discomfort for a few days after getting braces or adjustments, but it\'s usually manageable with over-the-counter pain relief. Most teens say it\'s much easier than expected.',
  },
  {
    question: 'What can\'t I eat with braces?',
    answer: 'You\'ll want to avoid hard, sticky, and chewy foods that can damage brackets. This includes things like popcorn, hard candy, gum, and biting directly into apples or corn on the cob.',
  },
  {
    question: 'Is Invisalign as effective as braces?',
    answer: 'For most cases, yes! Invisalign Teen is designed to handle the same issues as braces. We\'ll recommend the best option based on your specific needs.',
  },
  {
    question: 'How often do I need appointments?',
    answer: 'Typically every 6-8 weeks for adjustments. We work around school schedules and offer flexible appointment times to minimize classroom disruption.',
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

export default function TeensOrthodonticsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    teenName: '',
    parentName: '',
    age: '',
    phone: '',
    email: '',
    preferredTime: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/teens-ortho.jpg"
            alt="Teen with confident smile showing orthodontic treatment results"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
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
              <span className="text-white/90 text-sm font-medium">Ages 13–19 • Comprehensive Care</span>
            </div>

            {/* Title */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="text-white">Teen </span>
              <span className="text-white/50">Orthodontics</span>
            </h1>

            {/* Description */}
            <p 
              className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Modern orthodontic solutions designed for your lifestyle. Braces, clear aligners, and everything in between.
            </p>

            {/* CTAs */}
            <div 
              className="flex flex-wrap gap-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Button variant="primary" size="lg" href="#contact-form">
                Book Consultation
              </Button>
              <Button variant="secondary" size="lg" href="#info" icon="solar:arrow-down-linear">
                Explore Options
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator p-3 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll down"
        >
          <iconify-icon icon="solar:alt-arrow-down-linear" width="24" height="24" className="text-white/50" />
        </button>
      </section>


      {/* General Info Section */}
      <section id="info" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
                The Perfect Time
                <span className="text-white/50 block">For a Great Smile</span>
            </h2>
              <div className="space-y-6 mb-10">
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  The teenage years are actually the ideal time for orthodontic treatment. Your jaw is still growing, making it easier to guide teeth into their perfect positions - often with faster results than adult treatment.
                </p>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Whether you&apos;re looking for traditional braces with fun colored bands or prefer the nearly invisible Invisalign option, we have solutions that fit your style and lifestyle.
            </p>
          </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="md" href="#contact-form">
                  Get Started
                </Button>
                <Button variant="secondary" size="md" href="#treatments">
                  View Options
                </Button>
              </div>
            </AnimatedSection>

            {/* Right - Image Grid */}
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                  <Image
                    src="/teens-ortho.jpg"
                    alt="Teen with braces smiling"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mt-8">
                  <Image
                    src="/Gemini_Generated_Image_ojvtklojvtklojvt.png"
                    alt="Teen with Invisalign aligners"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Warning Signs Section - Bento Grid */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <AnimatedSection>
            <div className="mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium mb-6">
                <iconify-icon icon="solar:eye-bold" width="14" height="14" className="text-[#c9a962]" />
                Signs You Might Need Treatment
              </div>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Is It Time for Braces?
              </h2>
              <p className="text-white/50 text-lg max-w-2xl">
                Not sure if you need orthodontic treatment? These common signs can help you decide if it&apos;s time for a consultation.
              </p>
            </div>
          </AnimatedSection>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Large Card - First Group */}
            <AnimatedSection delay={100} className="lg:col-span-2 lg:row-span-2">
              <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden group">
                {/* Background Image */}
                <Image
                  src="/teens-ortho.jpg"
                  alt="Teen orthodontic evaluation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-xs font-medium w-fit mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
                    {warningSignsGroups[0].title}
                  </span>
                  <h3 className="text-white text-2xl lg:text-3xl font-semibold mb-3">
                    {warningSignsGroups[0].description}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {warningSignsGroups[0].signs.map((sign) => (
                      <span
                        key={sign}
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm"
                      >
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Small Card 1 - Second Group */}
            <AnimatedSection delay={200}>
              <div className="h-full min-h-[240px] p-6 lg:p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[#c9a962]/30 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center mb-6">
                  <iconify-icon icon="solar:health-bold" width="24" height="24" className="text-[#c9a962]" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {warningSignsGroups[1].title}
                </h3>
                <p className="text-white/50 text-sm mb-4 flex-grow">
                  {warningSignsGroups[1].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {warningSignsGroups[1].signs.map((sign) => (
                    <span
                      key={sign}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs"
                    >
                      {sign}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Small Card 2 - Third Group */}
            <AnimatedSection delay={300}>
              <div className="h-full min-h-[240px] p-6 lg:p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[#c9a962]/30 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center mb-6">
                  <iconify-icon icon="solar:chat-round-dots-bold" width="24" height="24" className="text-[#c9a962]" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {warningSignsGroups[2].title}
                </h3>
                <p className="text-white/50 text-sm mb-4 flex-grow">
                  {warningSignsGroups[2].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {warningSignsGroups[2].signs.map((sign) => (
                    <span
                      key={sign}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs"
                    >
                      {sign}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* CTA */}
          <AnimatedSection delay={400}>
            <div className="mt-10 text-center lg:text-left">
              <Button variant="secondary" size="md" href="#contact-form" icon="solar:arrow-right-linear">
                Schedule Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Treatment Process Section - Horizontal Timeline */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Your Path to a
                <span className="text-white/50 block">Perfect Smile</span>
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Getting braces is easier than you think. Here&apos;s what to expect from start to finish.
              </p>
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
                      {/* Inner circle with number */}
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
                        {step.tags.slice(0, 2).map((tag) => (
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

          {/* CTA */}
          <AnimatedSection delay={500}>
            <div className="text-center mt-16">
              <Button variant="primary" size="lg" href="#contact-form">
                Start Your Transformation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section id="treatments" className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Treatment Options
              </h2>
              <p className="text-white/50 text-lg mb-12">
                Choose the treatment that fits your style. All options deliver amazing results - it&apos;s about what works best for you.
              </p>

              {/* Treatment Options List */}
              <div className="space-y-8">
                {treatmentOptions.map((option, index) => (
                  <div
                    key={option.title}
                    className="relative pl-8 border-l-2 border-white/10 hover:border-[#c9a962]/60 transition-colors"
                  >
                    <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#0f0f0f] border-2 border-white/20 flex items-center justify-center text-white/50 text-xs">
                      {index + 1}
                    </span>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {option.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4">
                      {option.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {option.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right - Image */}
            <AnimatedSection delay={200}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/Gemini_Generated_Image_ojvtklojvtklojvt.png"
                alt="Teen with clear aligners"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <AnimatedSection>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/teens-ortho.jpg"
                  alt="Modern orthodontic office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </AnimatedSection>

            {/* Right Content */}
            <AnimatedSection delay={200}>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                What to Expect at
                <span className="text-white/50 block">Your First Visit</span>
              </h2>
              <p className="text-white/50 text-lg mb-12">
                No pressure, no judgement - just honest answers about your smile options.
              </p>

              {/* What to Expect Items */}
              <div className="space-y-8">
                {whatToExpectItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="relative pl-8 border-l-2 border-white/10 hover:border-[#c9a962]/60 transition-colors"
                  >
                    <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#0a0a0a] border-2 border-white/20 flex items-center justify-center text-white/50 text-xs">
                      {index + 1}
                    </span>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button variant="primary" size="md" href="#contact-form">
                  Book Your Visit
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      {featureSections.map((section, index) => (
        <section
          key={section.title}
          className={`py-24 lg:py-32 ${index % 2 === 0 ? 'bg-[#0f0f0f]' : 'bg-[#0a0a0a]'} relative overflow-hidden`}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <AnimatedSection delay={section.imagePosition === 'left' ? 0 : 200}>
                <div className={`relative ${section.imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                    
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 flex items-center gap-3">
                      <span className="text-white/20 text-6xl lg:text-7xl font-light leading-none">
                        {section.number}
                      </span>
                    </div>

                    {/* Badge Overlay */}
                    <div className="absolute bottom-6 left-6">
                      <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-[#c9a962]" />
                        <span className="text-white/80 text-sm font-medium">{section.badge}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection delay={section.imagePosition === 'left' ? 200 : 0}>
                <div className={section.imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'}>
                  <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-6">
                    {section.title}
                    <span className="text-white/50 block">{section.subtitle}</span>
                  </h2>
                  <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-8">
                    {section.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {section.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="secondary" size="md" href="#contact-form" icon="solar:arrow-right-linear">
                    Get Started
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Doctor Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <AnimatedSection>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden max-w-md mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c9a962]/20 to-[#c9a962]/5 flex items-center justify-center">
                    <div className="text-center">
                      <iconify-icon icon="solar:user-circle-bold" width="120" height="120" className="text-white/20" />
                      <p className="text-white/30 mt-4">Doctor Photo</p>
                    </div>
                  </div>
                </div>
                {/* Credentials Badge */}
                <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="solar:verified-check-bold" width="32" height="32" className="text-[#c9a962]" />
                    <div>
                      <div className="text-white font-semibold">AAO Member</div>
                      <div className="text-white/50 text-sm">Board Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection delay={200}>
              <span className="text-[#c9a962] text-sm font-semibold tracking-wider uppercase mb-4 block">Meet Your Doctor</span>
              <h2 className="text-white text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Dr. D.G. Cronin
                <span className="text-white/50 block text-2xl sm:text-3xl mt-2">Orthodontic Specialist</span>
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Dr. Cronin has helped thousands of teens achieve the smile they&apos;ve always wanted. His approachable style and expertise make the orthodontic experience comfortable and even fun.
                </p>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  As a member of the American Association of Orthodontists, Dr. Cronin stays at the forefront of orthodontic innovation, offering the latest treatments and technology.
                </p>
              </div>
              
              {/* Credentials */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm">
                  15+ Years Experience
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm">
                  Invisalign Diamond Provider
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm">
                  Teen Treatment Expert
                </span>
              </div>

              <Button variant="primary" size="md" href="#contact-form">
                Book With Dr. Cronin
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
                Real Teens
                <span className="text-white/50 block">Real Results</span>
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Hear from teens who&apos;ve been through it and came out with smiles they love.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.author} delay={index * 100}>
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-300 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <iconify-icon key={i} icon="solar:star-bold" width="20" height="20" className="text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-white/70 text-base leading-relaxed mb-8 flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a962] to-[#d4b978] flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-medium">{testimonial.author}</div>
                      <div className="text-white/50 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                Got Questions?
              </h2>
              <p className="text-white/50 text-lg">
                Here are the answers to what teens ask us most.
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
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-white font-medium pr-4">{faq.question}</span>
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
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Info */}
            <AnimatedSection>
              <span className="text-[#c9a962] text-sm font-semibold tracking-wider uppercase mb-4 block">Get Started</span>
              <h2 className="text-white text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Ready for Your
                <span className="text-white/50 block">Best Smile?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Take the first step toward the smile you deserve. Book your consultation and discover which treatment option is perfect for you.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a href="tel:+1234567890" className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <iconify-icon icon="solar:phone-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="text-white font-medium">(123) 456-7890</div>
                    <div className="text-white/50 text-sm">Call or text us</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center">
                    <iconify-icon icon="solar:clock-circle-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Mon-Fri: 9am - 6pm</div>
                    <div className="text-white/50 text-sm">After-school appointments available</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center">
                    <iconify-icon icon="solar:map-point-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="text-white font-medium">123 Main Street</div>
                    <div className="text-white/50 text-sm">City, State 12345</div>
                  </div>
                </div>
              </div>

              {/* Insurance Note */}
              <div className="p-4 rounded-2xl bg-[#c9a962]/10 border border-[#c9a962]/20">
                <div className="flex items-start gap-3">
                  <iconify-icon icon="solar:shield-check-bold" width="24" height="24" className="text-[#c9a962] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium mb-1">Insurance & Payment Plans</div>
                    <p className="text-white/60 text-sm">We accept most insurance and offer flexible monthly payment options to fit any budget.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Form */}
            <AnimatedSection delay={200}>
              <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                <h3 className="text-white text-2xl font-semibold mb-6">Request Consultation</h3>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="teenName" className="block text-white/70 text-sm mb-2">Teen&apos;s Name *</label>
                    <input
                      type="text"
                      id="teenName"
                      name="teenName"
                      value={formData.teenName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors"
                      placeholder="Teen's name"
                    />
                  </div>
                  <div>
                    <label htmlFor="parentName" className="block text-white/70 text-sm mb-2">Parent/Guardian Name</label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors"
                      placeholder="Parent's name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="age" className="block text-white/70 text-sm mb-2">Age *</label>
                    <select
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#c9a962] transition-colors"
                    >
                      <option value="" className="bg-[#1a1a1a]">Select age</option>
                      {[...Array(7)].map((_, i) => (
                        <option key={i + 13} value={i + 13} className="bg-[#1a1a1a]">{i + 13} years old</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white/70 text-sm mb-2">Phone Number *</label>
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
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-white/70 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="preferredTime" className="block text-white/70 text-sm mb-2">Preferred Time</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#c9a962] transition-colors"
                  >
                    <option value="" className="bg-[#1a1a1a]">Select preferred time</option>
                    <option value="morning" className="bg-[#1a1a1a]">Morning (9am - 12pm)</option>
                    <option value="afternoon" className="bg-[#1a1a1a]">After School (3pm - 5pm)</option>
                    <option value="evening" className="bg-[#1a1a1a]">Late Afternoon (5pm - 6pm)</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/70 text-sm mb-2">Anything we should know?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors resize-none"
                    placeholder="Questions, concerns, or what you're hoping to achieve..."
                  />
            </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-[#0a0a0a] font-semibold rounded-full hover:bg-white/90 transition-colors"
                >
                  Request Consultation
                </button>

                <p className="text-white/40 text-xs text-center mt-4">
                  By submitting this form, you agree to our privacy policy. We&apos;ll contact you within 24 hours.
                </p>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </div>
  );
}
