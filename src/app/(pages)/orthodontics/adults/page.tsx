'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Common concerns for adults
const concernGroups = [
  {
    title: 'Aesthetic Goals',
    description: 'Common smile concerns adults want to address.',
    signs: ['Crooked or crowded teeth', 'Gaps between teeth', 'Uneven smile line', 'Missing teeth'],
  },
  {
    title: 'Functional Issues',
    description: 'Problems affecting daily comfort and health.',
    signs: ['Difficulty cleaning teeth', 'Jaw pain or TMJ', 'Uneven wear on teeth'],
  },
  {
    title: 'Previous Treatment',
    description: 'Addressing changes over time.',
    signs: ['Teeth have shifted', 'Lost or broken retainer', 'Never had braces'],
  },
];

// Treatment process steps
const processSteps = [
  {
    title: 'Consultation',
    description: 'Discuss your goals, concerns, and explore treatment options that fit your lifestyle and budget.',
    tags: ['30 minutes', 'No commitment', 'All options explained'],
  },
  {
    title: 'Digital Planning',
    description: 'Advanced 3D scanning creates a precise treatment plan. See your projected results before starting.',
    tags: ['3D simulation', 'No impressions', 'Preview results'],
  },
  {
    title: 'Custom Treatment',
    description: 'Your personalized plan begins. Most adults choose discreet options like Invisalign or clear braces.',
    tags: ['Discreet options', 'Flexible scheduling', 'Expert care'],
  },
  {
    title: 'Your New Smile',
    description: 'Enjoy your transformed smile. Retainers keep your results perfect for years to come.',
    tags: ['Lasting results', 'Retention plan', 'Confidence boost'],
  },
];

// What to expect items
const whatToExpectItems = [
  {
    title: 'Comprehensive Diagnosis',
    description: 'Our friendly team welcomes you in a professional, comfortable environment designed for adult patients.',
    tags: ['Professional setting', 'Welcoming staff', 'Relaxed atmosphere'],
  },
  {
    title: 'Digital Imaging',
    description: 'Quick, comfortable CBCT and photos provide a complete picture of your dental health and treatment options.',
    tags: ['Low radiation', 'Fast & painless', 'Detailed views'],
  },
  {
    title: 'Detailed Orthodontic Consultation',
    description: 'Our orthodontist examines your teeth, jaw, and bite, explaining all findings in a pressure-free setting.',
    tags: ['Thorough check', 'No discomfort', 'Adult-focused'],
  },
  {
    title: 'Multiple Treatment Plans',
    description: 'We present all your options clearly, including timelines, costs, and what to realistically expect from each.',
    tags: ['Plain language', 'All questions answered', 'No pressure'],
  },
];

// Treatment options for adults
const treatmentOptions = [
  {
    title: 'Clear Aligners',
    description: 'Nearly invisible clear aligners that fit seamlessly into your professional and social life.',
    tags: ['Virtually invisible', 'Removable', 'Most popular'],
  },
  {
    title: 'Clear Ceramic Braces',
    description: 'Tooth-colored brackets that offer the precision of braces with a more subtle appearance.',
    tags: ['Discreet look', 'Effective results', 'Great for complex cases'],
  },
  {
    title: 'Metal Braces',
    description: 'Traditional metal braces offer precise control and excellent results for even the most complex cases.',
    tags: ['Proven results', 'Cost-effective', 'Great for complex cases'],
  },
];

// Feature sections
const featureSections = [
  {
    number: '01',
    badge: 'Discretion',
    title: 'Treatment That',
    subtitle: 'Fits Your Life',
    description: 'We understand that as an adult, you need treatment options that don\'t interrupt your career or lifestyle. Our discreet solutions let you straighten your teeth without anyone knowing.',
    features: [
      'Nearly invisible options',
      'No impact on professional image',
      'Flexible appointment times',
      'Work around your schedule',
    ],
    image: '/adults-ortho.png',
    imagePosition: 'right',
  },
  {
    number: '02',
    badge: 'Technology',
    title: 'Precision',
    subtitle: 'Results',
    description: 'Advanced digital technology means more accurate treatment, fewer appointments, and better results. See your transformation before you even start.',
    features: [
      '3D treatment simulation',
      'Precise tooth movement',
      'Shorter treatment times',
      'Predictable outcomes',
    ],
    image: '/Gemini_Generated_Image_ojvtklojvtklojvt.png',
    imagePosition: 'left',
  },
  {
    number: '03',
    badge: 'Health',
    title: 'Beyond',
    subtitle: 'Aesthetics',
    description: 'Straight teeth aren\'t just about looks. Proper alignment improves oral health, makes cleaning easier, and can even help with jaw pain and headaches.',
    features: [
      'Easier to clean teeth',
      'Reduced wear and damage',
      'Improved bite function',
      'Better long-term health',
    ],
    image: '/adults-ortho.png',
    imagePosition: 'right',
  },
];

// Testimonials
const testimonials = [
  {
    quote: 'My experience with this clinic has always been amazing! From the entire staff to Dr. Cronin and Mo, everyone makes me feel completely comfortable. I used to be very nervous about going to the dentist, but now I actually look forward to my appointments.',
    author: 'Lovely Digo',
    role: 'Adult Patient',
    avatar: 'L',
  },
  {
    quote: 'Having had a couple of bad experiences with first consults at other clinics, I had an incredible experience here. Not only they completed full photo assessment, 360 scan, but Dr Mo also showed me an AI model of potential alignment and provided 2 treatment options.',
    author: 'Sky Blu',
    role: 'Adult Patient',
    avatar: 'S',
  },
  {
    quote: 'I just had my consultation with Dr. Mo, and the experience was excellent from beginning to end. The staff was friendly, welcoming, and very professional. Dr. Mo took the time to explain everything clearly and made me feel completely comfortable with the treatment plan.',
    author: 'Aakem',
    role: 'Adult Patient',
    avatar: 'A',
  },
  {
    quote: 'Twice a patient now at Cronin Ortho. First with Dr Cronin and second with Dr Mo. Both are fantastic and if you wear your retainer you won\'t have to come back like me!',
    author: 'Amanda R.',
    role: 'Returning Adult Patient',
    avatar: 'A',
  },
  {
    quote: 'I received orthodontic treatment from Dr. Cronin. I can\'t say enough positive things about him and his team. I come from Kelowna and they\'ve always been very accommodating. I am beyond happy with my results. Thank you everyone who helped me, you changed my life!',
    author: 'Corey Defouw',
    role: 'Adult Patient',
    avatar: 'C',
  },
  {
    quote: 'Dr Mo is the best! Such compassionate care for patients with sensory needs. He truly cares about each patient as an individual and has their best interests at heart. Support staff is wonderful as well.',
    author: 'Renee Inaba',
    role: 'Adult Patient',
    avatar: 'R',
  },
];

// FAQs
const faqs = [
  {
    question: 'Am I too old for orthodontic treatment?',
    answer: 'Absolutely not! There\'s no age limit for orthodontic treatment. As long as your teeth and gums are healthy, you\'re a candidate. We treat patients of all ages, from their 20s to their 70s and beyond.',
  },
  {
    question: 'How long does adult treatment typically take?',
    answer: 'Most adult treatments take 12-24 months, though some cases may be shorter or longer. During your consultation, we\'ll give you a personalized timeline based on your specific needs.',
  },
  {
    question: 'Will treatment interfere with my work?',
    answer: 'Not at all. Our discreet options like Invisalign and clear braces are designed for working professionals. Appointments are typically every 6-8 weeks and we offer flexible scheduling.',
  },
  {
    question: 'Is Invisalign effective for adults?',
    answer: 'Yes! Invisalign is highly effective for most adult cases and is our most popular option. It\'s particularly well-suited for busy professionals who want a discreet treatment experience.',
  },
  {
    question: 'How much does adult orthodontic treatment cost?',
    answer: 'Costs vary based on your specific treatment plan. We offer flexible payment plans and work with most insurance providers. During your consultation, you\'ll receive a detailed cost breakdown.',
  },
  {
    question: 'What if my teeth have shifted after previous treatment?',
    answer: 'This is very common! Many adults seek treatment because their teeth have shifted over time. Whether you wore braces as a teen or never had treatment, we can help you achieve the smile you want.',
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

export default function AdultsOrthodonticsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    treatmentInterest: '',
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
            src="/adults-ortho.png"
            alt="Adult with confident smile showing discreet orthodontic treatment"
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
              <span className="text-white/90 text-sm font-medium">Ages 20+ • Discreet Solutions</span>
            </div>

            {/* Title */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="text-white">Adult </span>
              <span className="text-white/50">Orthodontics</span>
            </h1>

            {/* Description */}
            <p 
              className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              It&apos;s never too late for a beautiful smile. Discover discreet treatment options designed for your lifestyle.
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
                The Smile You&apos;ve
                <span className="text-white/50 block">Always Wanted</span>
            </h2>
              <div className="space-y-6 mb-10">
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  More adults than ever are choosing orthodontic treatment. Whether you never had braces, your teeth have shifted over time, or you&apos;re ready to finally invest in yourself - now is the perfect time.
                </p>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Today&apos;s treatment options are more discreet, comfortable, and efficient than ever. Many of our adult patients complete treatment without their friends or colleagues ever knowing.
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
                    src="/adults-ortho.png"
                    alt="Adult with clear aligners"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mt-8">
                  <Image
                    src="/Gemini_Generated_Image_ojvtklojvtklojvt.png"
                    alt="Professional adult smiling"
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

      {/* Concerns Section - Bento Grid */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <AnimatedSection>
            <div className="mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium mb-6">
                <iconify-icon icon="solar:eye-bold" width="14" height="14" className="text-[#c9a962]" />
                Common Concerns
              </div>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Sound Familiar?
              </h2>
              <p className="text-white/50 text-lg max-w-2xl">
                These are the most common reasons adults seek orthodontic treatment. If any resonate with you, we can help.
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
                  src="/adults-ortho.png"
                  alt="Adult orthodontic consultation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-xs font-medium w-fit mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
                    {concernGroups[0].title}
                  </span>
                  <h3 className="text-white text-2xl lg:text-3xl font-semibold mb-3">
                    {concernGroups[0].description}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {concernGroups[0].signs.map((sign) => (
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
                  {concernGroups[1].title}
                </h3>
                <p className="text-white/50 text-sm mb-4 flex-grow">
                  {concernGroups[1].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {concernGroups[1].signs.map((sign) => (
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
                  <iconify-icon icon="solar:refresh-bold" width="24" height="24" className="text-[#c9a962]" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {concernGroups[2].title}
                </h3>
                <p className="text-white/50 text-sm mb-4 flex-grow">
                  {concernGroups[2].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {concernGroups[2].signs.map((sign) => (
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
                Your Journey to a
                <span className="text-white/50 block">Confident Smile</span>
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                A straightforward process designed to fit seamlessly into your busy life.
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
                Discreet Options
              </h2>
              <p className="text-white/50 text-lg mb-12">
                Modern orthodontics offers solutions that fit seamlessly into your professional and personal life.
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
                alt="Adult with Invisalign"
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
                  src="/adults-ortho.png"
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
                <span className="text-white/50 block">Your Consultation</span>
              </h2>
              <p className="text-white/50 text-lg mb-12">
                A relaxed, informative conversation about your goals and options - no pressure, no commitments.
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
                  Book Consultation
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

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
                Success Stories
                <span className="text-white/50 block">From Our Patients</span>
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Hear from adults who finally invested in themselves and couldn&apos;t be happier with the results.
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
                className="shrink-0 w-[400px] p-8 rounded-3xl bg-white/[0.03] border border-white/5"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" width="18" height="18" className="text-[#c9a962]" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
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
                className="shrink-0 w-[400px] p-8 rounded-3xl bg-white/[0.03] border border-white/5"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" width="18" height="18" className="text-[#c9a962]" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
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
                Everything you need to know about orthodontic treatment as an adult.
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
                Invest in Your
                <span className="text-white/50 block">Best Smile</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Take the first step toward the smile you&apos;ve always wanted. Book a consultation to explore your options with no pressure or obligation.
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
                    <div className="text-white/50 text-sm">Early & late appointments available</div>
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
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white/70 text-sm mb-2">Your Name *</label>
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

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
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
                  <div>
                    <label htmlFor="email" className="block text-white/70 text-sm mb-2">Email Address *</label>
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

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="treatmentInterest" className="block text-white/70 text-sm mb-2">Interested In</label>
                    <select
                      id="treatmentInterest"
                      name="treatmentInterest"
                      value={formData.treatmentInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#c9a962] transition-colors"
                    >
                      <option value="" className="bg-[#1a1a1a]">Select option</option>
                      <option value="invisalign" className="bg-[#1a1a1a]">Invisalign</option>
                      <option value="clear-braces" className="bg-[#1a1a1a]">Clear/Ceramic Braces</option>
                      <option value="lingual" className="bg-[#1a1a1a]">Lingual Braces</option>
                      <option value="not-sure" className="bg-[#1a1a1a]">Not Sure - Need Guidance</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-white/70 text-sm mb-2">Preferred Time</label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#c9a962] transition-colors"
                    >
                      <option value="" className="bg-[#1a1a1a]">Select preferred time</option>
                      <option value="early" className="bg-[#1a1a1a]">Early Morning (8am - 10am)</option>
                      <option value="midday" className="bg-[#1a1a1a]">Midday (11am - 2pm)</option>
                      <option value="afternoon" className="bg-[#1a1a1a]">Afternoon (2pm - 5pm)</option>
                      <option value="evening" className="bg-[#1a1a1a]">Evening (5pm - 6pm)</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/70 text-sm mb-2">Tell Us About Your Goals</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors resize-none"
                    placeholder="What would you like to achieve? Any concerns or questions..."
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
