'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Gold color from logo
const gold = {
  base: '#c9a962',
  light: '#d4b978',
  dark: '#b8975f',
};

// Warning signs - grouped for display
const warningSignsGroups = [
  {
    title: 'Bite & Alignment',
    description: 'Small signs today can mean bigger problems later.',
    signs: ['Teeth look crowded or overlap', 'Your child struggles to bite into food (apples, sandwiches)', 'Teeth don\'t meet evenly when they close', 'Front teeth stick out or don\'t touch'],
  },
  {
    title: 'Jaw & Speech',
    description: 'Subtle signs that your child\'s jaw may not be developing as it should.',
    signs: ['Jaw clicks or shifts when opening/closing', 'Speech sounds unclear or hard to understand', 'Face looks slightly uneven in photos', 'Child complains of jaw tiredness or soreness'],
  },
  {
    title: 'Oral Habits',
    description: 'Persistent habits that may affect dental development.',
    signs: ['Thumb sucking past age 5', 'Mouth breathing', 'Tongue thrusting'],
  },
];

// Treatment process steps
const processSteps = [
  {
    title: 'Consultation',
    description: 'No pressure. Just clarity. Meet our team, let your child get comfortable, and get honest answers about what (if anything) your child needs.',
    tags: ['Quick', 'No obligation', 'Parent questions welcome'],
  },
  {
    title: 'Comprehensive Evaluation',
    description: 'We look at the full picture — not just the teeth. Photos, gentle 3D imaging, and a careful exam help us understand how your child\'s smile and jaw are growing.',
    tags: ['Clear visuals', 'Kid-friendly', 'No guessing'],
  },
  {
    title: 'Custom Plan For Your Child',
    description: 'One child. One plan. We\'ll walk you through the options, timing, and what works best for your child\'s needs and your family\'s schedule.',
    tags: ['Tailored approach', 'Clear timeline', 'No surprises'],
  },
  {
    title: 'Treatment',
    description: 'Comfortable visits. Encouraging team. Real progress. We make appointments positive and motivating — so kids leave feeling proud of their progress.',
    tags: ['Fun visits', 'Progress tracking', 'Ongoing support'],
  },
];

// What to expect items
const whatToExpectItems = [
  {
    title: 'Comprehensive Diagnosis',
    description: 'Our friendly team greets you and your child, making everyone feel at home.',
    tags: ['Kid-friendly office', 'Welcoming staff', 'Relaxed atmosphere'],
  },
  {
    title: 'Digital Imaging',
    description: 'Quick, comfortable CBCT and photos to see the complete picture of your child\'s smile.',
    tags: ['Low radiation', 'Fast & painless', 'Detailed views'],
  },
  {
    title: 'Detailed Orthodontic Consultation',
    description: 'Our orthodontist examines your child\'s teeth, jaw, and bite in a comfortable, pressure-free setting.',
    tags: ['Thorough check', 'No discomfort', 'Child-focused'],
  },
  {
    title: 'Multiple Treatment Plans',
    description: 'We explain our findings, answer your questions, and discuss next steps if treatment is needed.',
    tags: ['Plain language', 'All questions answered', 'No pressure'],
  },
];

// Common treatments with links to treatments page
const treatmentOptions = [
  {
    title: 'Phase 1 Treatment',
    description: 'Early intervention to address developing problems while permanent teeth are still coming in.',
    tags: [
      { name: 'Palatal expanders', id: 'palatal-expander' },
      { name: 'Space maintainers', id: 'types-of-appliances' },
      { name: 'Habit appliances', id: 'types-of-appliances' },
    ],
  },
  {
    title: 'Growth Appliances',
    description: 'Custom devices that guide jaw growth and create space for permanent teeth.',
    tags: [
      { name: 'Headgear', id: 'types-of-appliances' },
      { name: 'Functional appliances', id: 'types-of-appliances' },
      { name: 'Jaw repositioning', id: 'tmj-tmd' },
    ],
  },
  {
    title: 'Limited Braces',
    description: 'Targeted treatment on specific teeth to correct immediate concerns.',
    tags: [
      { name: 'Partial braces', id: 'metal-braces' },
      { name: 'Clear aligners', id: 'clear-aligners' },
      { name: 'Removable appliances', id: 'types-of-appliances' },
    ],
  },
];

// Feature sections
const featureSections = [
  {
    number: '01',
    badge: 'Phase 1',
    title: 'Early Intervention',
    subtitle: 'Treatment',
    description: 'Phase 1 treatment addresses developing problems while your child still has a mix of baby and permanent teeth. This proactive approach can prevent more serious issues from developing.',
    features: [
      'Correct harmful oral habits',
      'Guide jaw growth patterns',
      'Create space for erupting teeth',
      'Reduce risk of trauma to protruding teeth',
    ],
    image: '/kids-treatment-1.png',
    imagePosition: 'right',
  },
  {
    number: '02',
    badge: 'Growth',
    title: 'Jaw Development',
    subtitle: 'and Sleep Apnea',
    description: 'Proper jaw development is crucial for children\'s overall health and growth. We focus on creating balanced facial growth and ensuring optimal functionality.',
    features: [
      'Improve breathing patterns',
      'Address sleep-related issues',
      'Balance facial symmetry',
      'Prevent TMJ problems',
    ],
    image: '/kids-treatment-2.png',
    imagePosition: 'left',
  },
  {
    number: '03',
    badge: 'Prevention',
    title: 'Setting Up',
    subtitle: 'For Success',
    description: 'Early treatment sometimes means simpler, and maybe shorter treatment as a teenager.',
    features: [
      'Efficient phase 2',
      'Reduced need for extractions',
      'Better long-term stability',
      'Improved self-confidence',
    ],
    image: '/kids-treatment-3.png',
    imagePosition: 'right',
  },
];

// Testimonials
const testimonials = [
  {
    quote: 'I\'ve had an outstanding experience at Dr. Cronin Ortho Clinic, where my child has been receiving orthodontic treatment. Dr. Mohymen Sarfraz has been exceptional—patient, gentle, and incredibly thorough. The whole clinic runs with genuine care, professionalism, and kindness.',
    author: 'Samina Jafar',
    role: 'Parent',
    avatar: 'S',
  },
  {
    quote: 'Cronin Ortho has been Great!! This is our 3rd kid to go here for braces and they are amazing! Our kids teeth look great! They are easy to work with, helping move appointments if necessary and very accommodating. Professional but fun!',
    author: 'Paul Blackman',
    role: 'Parent',
    avatar: 'P',
  },
  {
    quote: 'My kids like to visit the orthodontists at Cronin Ortho! The staff are super friendly, convenient appointment times and the whole process has been easy. From getting expanders and now braces. My kids smiles are looking amazing.',
    author: 'Michelle Borrill',
    role: 'Parent',
    avatar: 'M',
  },
  {
    quote: 'We had a very good experience for my child who needed expanders to prevent crowding. It has brought a good smile and we are glad we chose Dr.Mo.',
    author: 'Sajjin M.',
    role: 'Parent',
    avatar: 'S',
  },
  {
    quote: 'I recently visited this orthodontic clinic for treatment, and I couldn\'t be happier with the experience. The service was exceptional, and the staff were incredibly helpful, friendly, and knowledgeable. Highly recommend this clinic!',
    author: 'Waseem Mian',
    role: 'Parent',
    avatar: 'W',
  },
  {
    quote: 'Dr. Cronin, and his team are fantastic. They clearly communicated the treatment plan to us and made sure my child felt comfortable and understood what was happening.',
    author: 'Joseph Asmaro',
    role: 'Parent',
    avatar: 'J',
  },
];

// FAQs
const faqs = [
  {
    question: 'When should my child first see an orthodontist?',
    answer: 'The American Association of Orthodontists recommends children have their first orthodontic evaluation by age 7. At this age, enough permanent teeth have emerged to identify potential issues.',
  },
  {
    question: 'Does my child need treatment now, or can we wait?',
    answer: 'Not every child needs early treatment. After evaluation, we\'ll recommend the best timing for your child. Some issues benefit from early intervention, while others are better addressed once all permanent teeth have erupted.',
  },
  {
    question: 'How long is phase 1?',
    answer: 'Usually 6-9 months, followed by a resting period where we monitor growth and development before determining if Phase 2 treatment is needed.',
  },
  {
    question: 'Will my child still need braces as a teenager?',
    answer: 'Many children who have Phase 1 treatment still benefit from Phase 2 treatment as teenagers, but it\'s typically shorter and less complex than it would have been without early intervention.',
  },
  {
    question: 'What are the signs my child might need early orthodontic treatment?',
    answer: 'Common signs include difficulty chewing or biting, mouth breathing, thumb sucking past age 5, crowded or misplaced teeth, jaws that shift or make sounds, and speech difficulties.',
  },
  {
    question: 'Is early treatment more expensive than waiting?',
    answer: 'While Phase 1 treatment is an additional investment, it often reduces the complexity and duration of Phase 2 treatment. We offer interest-free flexible payment plans to make treatment accessible for your family.',
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

export default function KidsOrthodonticsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
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
            src="/kids-hero-smile.png"
            alt="Child receiving early orthodontic treatment"
            fill
            className="object-cover object-top"
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
              <span className="text-white/90 text-sm font-medium">Ages 7–12 • Early Intervention</span>
            </div>

            {/* Title */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="text-white">Kids Orthodontics </span>
              <span className="text-white/50">(Ages 7–12)</span>
            </h1>

            {/* Description */}
            <p 
              className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Gentle early treatment to guide healthy growth and prevent bigger problems later.
            </p>

            {/* CTAs */}
            <div 
              className="flex items-center gap-3 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Button variant="primary" size="lg" href="/contact#contact-form">
                Book Consultation
              </Button>
              <Button variant="secondary" size="lg" href="#info" icon="solar:arrow-down-linear">
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
                Orthodontics for
                <span className="text-white/50 block">Growing Smiles</span>
            </h2>
              <div className="space-y-6 mb-10">
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  The American Association of Orthodontists recommends children see an orthodontist by age 7. At this age, we can spot hidden bite and jaw concerns early—often before they&apos;re visible—and guide healthy growth while your child is still developing.
                </p>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Early evaluations don&apos;t always mean early braces. Sometimes, the best care is simply watching growth and stepping in at the perfect time—so treatment can be shorter, easier, and more comfortable later on.
            </p>
          </div>
              <div className="flex flex-col gap-2">
                <Button variant="primary" size="md" href="/contact#contact-form">
                  Check My Child&apos;s Smile
                </Button>
                <p className="text-white/40 text-sm">Quick records • No commitment • Just expert clarity</p>
              </div>
            </AnimatedSection>

            {/* Right - Image */}
            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden max-w-md lg:max-w-lg mx-auto">
                <Image
                  src="/kids-early-treatment.png"
                  alt="Happy smiling child showing growing teeth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 400px, 500px"
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
                Early Detection
              </div>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Signs to Watch For
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mb-2">
                Does your child do any of these? Most parents notice at least one.
              </p>
              <p className="text-white/40 text-base max-w-2xl">
                These everyday signs can be easy to miss—but they often point to hidden bite or growth issues that are much easier to guide early.
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
                  src="/kids-appliances.png"
                  alt="Smiling child showing teeth for orthodontic evaluation"
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
              <p className="text-white/60 text-base mb-4">Worried this might be your child?</p>
              <Button variant="secondary" size="md" href="/contact#contact-form" icon="solar:arrow-right-linear">
                Check Their Smile
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
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto">
                From First Visit to Confident Smile
                <span className="text-white/50 block">— Here&apos;s How Easy It Is</span>
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Our simple, stress-free process makes orthodontic care easy for you and fun for your child.
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
                Start Your Journey
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
                We offer a range of early orthodontic treatments tailored to your child&apos;s specific needs and development stage.
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
                        <a
                          key={`${tag.id}-${tag.name}`}
                          href={`/services/treatments#${tag.id}`}
                          className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:bg-[#c9a962]/20 hover:border-[#c9a962]/40 hover:text-white transition-all duration-200"
                        >
                          {tag.name}
                        </a>
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
                src="/kids-ortho.png"
                alt="Child with orthodontic appliance"
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

      {/* What to Expect Section - Treatment Options Style */}
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
                We make the first visit fun and stress-free for both you and your child.
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
                What Parents
                <span className="text-white/50 block">Are Saying</span>
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Don&apos;t just take our word for it — hear from families who&apos;ve experienced the difference.
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
                className="shrink-0 w-[400px] p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col h-[280px]"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" width="18" height="18" className="text-[#c9a962]" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed flex-1">
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
                className="shrink-0 w-[400px] p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col h-[280px]"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" width="18" height="18" className="text-[#c9a962]" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed flex-1">
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
                Common Questions
              </h2>
              <p className="text-white/50 text-lg">
                Everything you need to know about early orthodontic care for your child.
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
              <span className="text-[#c9a962] text-sm font-semibold tracking-wider uppercase mb-4 block">Consultation</span>
              <h2 className="text-white text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Ready to Get Started?
                <span className="text-white/50 block">We&apos;re Here to Help</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Schedule your child&apos;s free consultation today. We&apos;ll evaluate their orthodontic needs and create a personalized plan for their healthiest smile.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a href="tel:+16045331151" className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <iconify-icon icon="solar:phone-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="text-white font-medium">(604) 533-1151</div>
                    <div className="text-white/50 text-sm">Call us directly</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center">
                    <iconify-icon icon="solar:clock-circle-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Mon-Fri: 9am - 6pm</div>
                    <div className="text-white/50 text-sm">Office hours</div>
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
                    <label htmlFor="parentName" className="block text-white/70 text-sm mb-2">Parent Name *</label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="childName" className="block text-white/70 text-sm mb-2">Child&apos;s Name *</label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors"
                      placeholder="Child's name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="childAge" className="block text-white/70 text-sm mb-2">Child&apos;s Age *</label>
                    <select
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#c9a962] transition-colors"
                    >
                      <option value="" className="bg-[#1a1a1a]">Select age</option>
                      {[...Array(6)].map((_, i) => (
                        <option key={i + 7} value={i + 7} className="bg-[#1a1a1a]">{i + 7} years old</option>
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
                    <option value="afternoon" className="bg-[#1a1a1a]">Afternoon (12pm - 3pm)</option>
                    <option value="evening" className="bg-[#1a1a1a]">Late Afternoon (3pm - 6pm)</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/70 text-sm mb-2">Additional Notes</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors resize-none"
                    placeholder="Any concerns or questions..."
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
