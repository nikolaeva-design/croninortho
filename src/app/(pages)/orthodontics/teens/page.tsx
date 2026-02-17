'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Warning signs for teens
const warningSignsGroups = [
  {
    title: 'Alignment Issues',
    description: 'What parents notice in everyday life',
    signs: ['Teeth look crowded or overlap', 'Visible gaps between teeth', 'Smile looks uneven in photos'],
  },
  {
    title: 'Bite Problems',
    description: 'How teeth fit together when they close',
    signs: ['Front teeth stick out or sit too far back', 'Teeth don\'t line up when biting down', 'Top and bottom teeth don\'t meet evenly'],
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
    title: 'Comprehensive Diagnosis',
    description: 'Our friendly team greets you and your teen, making everyone feel at home.',
    tags: ['Teen-friendly office', 'Welcoming staff', 'Relaxed atmosphere'],
  },
  {
    title: 'Digital Imaging',
    description: 'Quick, comfortable CBCT and photos to see the complete picture of your teen\'s smile.',
    tags: ['Low radiation', 'Fast & painless', 'Detailed views'],
  },
  {
    title: 'Detailed Orthodontic Consultation',
    description: 'Our orthodontist examines your teen\'s teeth, jaw, and bite in a comfortable, pressure-free setting.',
    tags: ['Thorough check', 'No discomfort', 'Teen-focused'],
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
    tags: ['Better control', 'Color options', 'Affordable'],
  },
  {
    title: 'Clear/Ceramic Braces',
    description: 'Tooth-colored brackets that blend with your smile while delivering the same great results.',
    tags: ['Less visible', 'Aesthetic', 'Popular choice'],
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
    title: 'Your Smile. Your Style.',
    subtitle: 'Your Moment.',
    description: 'High school, sports, photos, prom — we get it. That\'s why we offer flexible treatment options that fit your lifestyle, stay low-key when you want them to, and help you feel confident every step of the way.',
    features: [
      'Options that fit your style (braces or Invisalign)',
      'Minimal impact on sports & daily life',
      'Results you\'ll be proud to show off',
      'A real confidence boost in photos & social moments',
    ],
    image: '/teens-ortho.jpg',
    imagePosition: 'right',
    cta: 'Start My Smile Journey →',
  },
  {
    number: '02',
    badge: 'Technology',
    title: 'Next-Level Treatment,',
    subtitle: 'Made for Real Life',
    description: 'We use modern digital technology to make treatment easier on your schedule and more comfortable for your teen—with clearer results and fewer surprises along the way. Your teen can even preview their future smile before treatment begins.',
    features: [
      'See your future smile in 3D before you start',
      'Digital scans (no messy impressions)',
      'Faster, more efficient treatment timelines',
      'Fewer office visits = less time away from school & activities',
    ],
    image: '/teens-treatment-1.png',
    imagePosition: 'left',
    cta: 'See My Future Smile →',
  },
  {
    number: '03',
    badge: 'Lifestyle',
    title: 'Your Life Doesn\'t',
    subtitle: 'Pause for Braces',
    description: 'School, sports, music, photos, hanging with friends — your life keeps moving. We design treatment that fits your routine, stays low-key when you want it to, and doesn\'t get in the way of doing your thing.',
    features: [
      'Low-key for school, photos & socials',
      'Sports-friendly options (yes, mouthguards work)',
      'Music-friendly (sing, play, perform)',
      'Flexible appointments around your schedule',
    ],
    image: '/teens-treatment-2.png',
    imagePosition: 'right',
    cta: 'Start My Smile Journey →',
  },
];

// Testimonials
const testimonials = [
  {
    quote: 'The overall experience was pretty good. It was fairly straightforward and it got me out of school for a bit. To sum it up, ortho has been a good experience and I would recommend.',
    author: 'Levi N.',
    role: 'Teen',
    avatar: 'L',
  },
  {
    quote: 'Dr.Cronin is amazing and so is his staff! I came here as a teen and now my own kids are seeing them. Hands down the best ortho in the province ;)',
    author: 'C Rae',
    role: 'Former Teen Patient',
    avatar: 'C',
  },
  {
    quote: 'Great care of teeth, I have been with them for my braces for 5 months so far. Honestly, great and gentle care of teeth. Lots of progress seen so far.',
    author: 'Terrence',
    role: 'Teen',
    avatar: 'T',
  },
  {
    quote: 'Dr Cronin and Dr Mo are the best. I went as a child and my teeth are still perfect and now my kids see them!',
    author: 'Krista Groat',
    role: 'Former Teen Patient',
    avatar: 'K',
  },
  {
    quote: 'Dr. Cronin was my orthodontist as a child in the 90\'s and now my kids come here too! A consistently positive experience, highly recommend!',
    author: 'Joelle Henderson',
    role: 'Former Teen Patient',
    avatar: 'J',
  },
  {
    quote: 'Dr. Mo is an amazing orthodontist! He\'s so fun, kind and attentive. The staff are wonderful too, every visit runs smoothly. I look forward to every appointment and can\'t wait to see my smile when the braces come off!',
    author: 'Kuljeet Sandhu',
    role: 'Teen',
    avatar: 'K',
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
            src="/teens-hero-smile.png"
            alt="Teen with confident smile showing orthodontic treatment results"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
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
              <span className="text-white">The Perfect Time for a </span>
              <span className="text-white/50">Confident, Camera-Ready Smile</span>
            </h1>

            {/* Description */}
            <p 
              className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              The teenage years are one of the best times for orthodontic treatment. Your teen&apos;s jaw is still growing, which often means quicker, more comfortable results than waiting until adulthood.
            </p>

            {/* CTAs */}
            <div 
              className="flex items-center gap-3 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Button variant="primary" size="lg" href="/contact#contact-form">
                Book Consultation
              </Button>
              <Button variant="secondary" size="lg" href="#treatments" icon="solar:arrow-down-linear">
                Learn More
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
                Teen Orthodontics
                <span className="text-white/50 block">(Ages 13–19)</span>
            </h2>
              <div className="space-y-6 mb-10">
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Modern treatment options that fit your teen&apos;s lifestyle — and build lasting confidence.
                </p>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  We offer customized orthodontic care to straighten teeth, correct bite issues, and improve long-term oral health — with flexible options like braces or clear aligners to suit your teen&apos;s comfort and confidence.
            </p>
          </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="md" href="/contact#contact-form">
                  Book a Free Teen Smile Check
                </Button>
                <Button variant="secondary" size="md" href="#treatments">
                  See Braces &amp; Invisalign Options
                </Button>
              </div>
            </AnimatedSection>

            {/* Right - Image */}
            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden max-w-lg mx-auto">
                <Image
                  src="/teens-braces-options.png"
                  alt="Teen with beautiful confident smile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={100}
                  unoptimized
                />
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
                  src="/teens-clear-aligners.png"
                  alt="Teen smiling during orthodontic evaluation"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  quality={90}
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
              <Button variant="secondary" size="md" href="/contact#contact-form" icon="solar:arrow-right-linear">
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
              <Button variant="primary" size="lg" href="/contact#contact-form">
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
                src="/teens-treatment-results.png"
                alt="Teen girl smiling with braces"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
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
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-black">
                <Image
                  src="/skeletal-malocclusion.jpeg"
                  alt="Cephalometric X-ray analysis for orthodontic evaluation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={100}
                />
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
                <Button variant="primary" size="md" href="/contact#contact-form">
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

                  <Button variant="secondary" size="md" href="/contact#contact-form" icon="solar:arrow-right-linear">
                    Get Started
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

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
        </div>

        {/* Infinite Marquee */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-6">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, idx) => (
              <div
                key={`first-${idx}`}
                className="shrink-0 w-[400px] p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col h-[360px]"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" width="18" height="18" className="text-[#c9a962]" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed flex-1 overflow-hidden">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Author - Always at bottom */}
                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a962] to-[#d4b978] flex items-center justify-center text-white text-sm font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.author}</div>
                    <div className="text-white/50 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, idx) => (
              <div
                key={`second-${idx}`}
                className="shrink-0 w-[400px] p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col h-[360px]"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" width="18" height="18" className="text-[#c9a962]" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed flex-1 overflow-hidden">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Author - Always at bottom */}
                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a962] to-[#d4b978] flex items-center justify-center text-white text-sm font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.author}</div>
                    <div className="text-white/50 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
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
                <a href="tel:+16045331151" className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <iconify-icon icon="solar:phone-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="text-white font-medium">(604) 533-1151</div>
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
                    <div className="text-white font-medium">Langley, BC</div>
                    <div className="text-white/50 text-sm">Canada</div>
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
                      placeholder="(604) 533-1151"
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
