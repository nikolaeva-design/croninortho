'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';

const careTypes = [
  {
    id: 'kids',
    number: '01',
    title: 'Kids',
    subtitle: 'Orthodontics',
    age: 'Ages 7–12',
    description:
      'Early orthodontic care focused on growth modification, airway development, and preventing complex issues later.',
    features: ['Growth Modification', 'Airway Development', 'Prevention'],
    image: '/Gemini_Generated_Image_oymo7foymo7foymo.png',
    imageAlt:
      'Child receiving early orthodontic treatment with ceramic braces for growth modification and bite correction',
    badgeText: 'Faster Orthodontic System',
    href: '/orthodontics/kids',
  },
  {
    id: 'teens',
    number: '02',
    title: 'Teens',
    subtitle: 'Orthodontics',
    age: 'Ages 13–19',
    description:
      'Comprehensive orthodontic solutions designed to align teeth, correct bite issues, and support healthy development.',
    features: ['Teeth Alignment', 'Bite Correction', 'Clear Aligners'],
    image: '/teens-ortho.jpg',
    imageAlt:
      'Teenager showing results of comprehensive orthodontic treatment with advanced alignment system',
    badgeText: 'Advanced Alignment System',
    href: '/orthodontics/teens',
  },
  {
    id: 'adults',
    number: '03',
    title: 'Adults',
    subtitle: 'Orthodontics',
    age: 'Ages 20+',
    description:
      'Modern orthodontic options for adults seeking improved function, aesthetics, and long-term oral health.',
    features: ['Invisible Options', 'Flexible Schedule', 'Quick Results'],
    image: '/Gemini_Generated_Image_ojvtklojvtklojvt.png',
    imageAlt:
      'Adult patient with clear aligners demonstrating discreet orthodontic treatment options',
    badgeText: 'Invisible Solution',
    href: '/orthodontics/adults',
  },
];

export default function OrthodonticCare() {
  const [activeId, setActiveId] = useState<string>('kids');

  return (
    <section
      id="orthodontic-care"
      className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden"
      aria-labelledby="orthodontic-care-heading"
    >

      <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <h2
            id="orthodontic-care-heading"
            className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-4"
          >
            Orthodontic Care
          </h2>
          <p className="text-white/50 text-lg max-w-xl">
            Specialized treatment for every age — from early intervention to adult solutions.
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 h-auto lg:h-[550px]">
          {careTypes.map((care) => {
            const isActive = activeId === care.id;
            
            return (
              <div
                key={care.id}
                onClick={() => setActiveId(care.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[flex] ${
                  isActive 
                    ? 'lg:flex-[3] flex-1' 
                    : 'lg:flex-[0.8] flex-none lg:hover:flex-[1]'
                } ${!isActive ? 'h-24 lg:h-auto' : 'h-auto min-h-[450px] lg:min-h-0'}`}
              >
                {/* Background Image */}
                <Image
                  src={care.image}
                  alt={care.imageAlt}
                  fill
                  className={`object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'scale-100' : 'scale-110'}`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Gradient Overlays */}
                <div className={`absolute inset-0 transition-opacity duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isActive 
                    ? 'bg-gradient-to-t from-black/85 via-black/40 to-black/20' 
                    : 'bg-black/60'
                }`} />
                <div className={`absolute inset-0 transition-opacity duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isActive ? 'bg-gradient-to-r from-black/55 via-black/10 to-transparent' : ''
                }`} />

                {/* Collapsed State - Vertical Title */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isActive ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100 delay-200'
                }`}>
                  {/* Mobile: Horizontal layout */}
                  <div className="lg:hidden flex items-center gap-4 px-6">
                    <span className="text-white/50 text-2xl font-light">{care.number}</span>
                    <div>
                      <h3 className="text-white text-lg font-bold">{care.title}</h3>
                      <p className="text-white/50 text-sm">{care.subtitle}</p>
                    </div>
                    <iconify-icon icon="solar:alt-arrow-down-linear" width="24" height="24" className="text-white/50 ml-auto" />
                  </div>
                  
                  {/* Desktop: Horizontal title */}
                  <div className="hidden lg:flex flex-col items-center justify-center h-full gap-3 px-4">
                    <span className="text-white/40 text-2xl font-light">{care.number}</span>
                    <h3 className="text-white text-lg font-bold tracking-wide text-center">{care.title}</h3>
                    <p className="text-white/40 text-xs text-center">{care.subtitle}</p>
                  </div>
                </div>

                {/* Expanded State - Full Content */}
                <div className={`absolute inset-0 flex flex-col justify-end p-8 lg:p-10 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isActive ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 translate-y-6 pointer-events-none'
                }`}>
                  {/* Hero-style Badge Overlay */}
                  <div className={`absolute top-[8%] right-8 lg:right-12 hidden md:block transition-all duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isActive ? 'opacity-100 translate-x-0 delay-300' : 'opacity-0 translate-x-4 pointer-events-none'
                  }`}>
                    <div className="flex items-center gap-4 flex-row-reverse">
                      <span className="text-white/20 text-7xl lg:text-8xl font-light leading-none select-none">
                        {care.number}
                      </span>
                      <div className="relative">
                        <div className="flex items-center gap-3 p-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl">
                          <div className="flex gap-1.5 flex-row-reverse">
                            {/* Icon slots - different icons for different types */}
                            <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-white/40" />
                            </div>
                            <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-white/40" />
                            </div>
                          </div>
                          <div className="text-[10px] leading-tight text-white/50 font-semibold uppercase tracking-[0.2em] text-right">
                            {care.badgeText.split(' ').map((word, i) => (
                              <div key={i}>{word}</div>
                            ))}
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  {/* Number (Mobile or default) */}
                  <span className={`text-white/40 text-5xl lg:text-6xl font-light mb-4 ${isActive ? 'md:hidden' : ''}`}>
                    {care.number}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-white text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight">
                    {care.title}
                    <span className="text-white/50 block lg:inline lg:ml-3">{care.subtitle}</span>
                  </h3>
                  
                  {/* Age Badge */}
                  <div className="inline-flex items-center gap-2 mt-4 mb-6">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-white/60 text-sm font-medium">{care.age}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-md mb-6">
                    {care.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {care.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Button
                    variant="secondary"
                    size="md"
                    href={care.href}
                    className="w-fit border-none px-0 hover:bg-transparent hover:scale-100"
                    icon="solar:arrow-right-linear"
                  >
                    Get Started
                  </Button>
                </div>

                {/* Active Indicator Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-transparent transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                } origin-left`} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
