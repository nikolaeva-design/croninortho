'use client';

import React from 'react';
import Image from 'next/image';
import Button from './Button';

export default function AestheticServices() {
  return (
    <section
      id="aesthetic-services"
      className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden"
      aria-labelledby="aesthetic-services-heading"
    >
      {/* Subtle Background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px),
                               linear-gradient(180deg, white 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 lg:mb-20">
          <h2
            id="aesthetic-services-heading"
            className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-4"
          >
            Aesthetic Excellence
          </h2>
          <p className="text-white/50 text-lg max-w-xl">
            Beyond straight teeth — we design smiles that enhance your natural beauty.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          
          {/* Row 1 - Facial Balance (Full Width) */}
          <div className="lg:col-span-12 group">
            <div className="relative h-[400px] lg:h-[450px] rounded-3xl overflow-hidden bg-gradient-to-r from-[#060d18] via-[#0a1628] to-[#060d18] border border-white/5 border-white/5 transition-colors duration-300">
              {/* Background Glow */}
              <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />
              
              {/* Badge */}
              <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-20">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent text-sm font-semibold backdrop-blur-sm border border-accent/30">
                  01
                </span>
              </div>
              
              {/* Image with CSS mask for seamless fade */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-[55%] transition-none"
                style={{
                  maskImage: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)'
                }}
              >
                <Image
                  src="/facial-balance-harmony-v2.png"
                  alt="Facial balance analysis showing the relationship between teeth, lips, and facial features for aesthetic planning"
                  fill
                  className="object-cover object-[25%_center]"
                  sizes="50vw"
                />
              </div>
              
              {/* Content - Right Side */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-[55%] flex flex-col justify-center p-8 lg:p-12 xl:p-16">
                <h3 className="text-white text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-4">
                  Facial Balance
                  <span className="block text-white/70">& Harmony</span>
                </h3>
                
                <p className="text-white/50 text-base lg:text-lg leading-relaxed mb-8 max-w-md">
                  Aesthetic planning considers the relationship between teeth, lips, and facial features to achieve overall balance.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="secondary" size="md" href="#contact">
                    Request a Consultation
                  </Button>
                  <a href="#" className="inline-flex items-center gap-2 text-white/70 text-sm font-medium hover:text-white transition-colors">
                    Explore Aesthetics
                    <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
                  </a>
                </div>
              </div>

              {/* Decorative Arc Line */}
              <div className="absolute bottom-0 left-[40%] right-0 h-32 pointer-events-none">
                <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
                  <path 
                    d="M 0 100 Q 200 0 400 100" 
                    fill="none" 
                    stroke="rgba(58, 122, 168, 0.3)" 
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Row 2 - Left: Alignment */}
          <div className="lg:col-span-4 lg:row-span-2 group">
            <div className="relative h-full min-h-[470px] lg:min-h-[510px] rounded-[2.5rem] overflow-hidden bg-[#e8e8e8] flex flex-col">
              {/* Badge */}
              <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-20">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a1a1a]/10 text-[#1a1a1a] text-sm font-semibold">
                  02
                </span>
              </div>
              
              {/* Content - Centered */}
              <div className="px-8 lg:px-10 pt-16 flex-1 flex flex-col justify-center items-start relative z-10">
                <h3 className="text-[#1a1a1a] text-2xl lg:text-3xl font-semibold tracking-tight mb-4">
                  Alignment
                </h3>
                <p className="text-[#1a1a1a]/60 text-sm lg:text-base leading-relaxed mb-4">
                  Proper alignment supports both the appearance of the smile and long-term function.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-[#1a1a1a]/70 text-sm font-medium hover:text-[#1a1a1a] transition-colors">
                  Learn More
                  <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
                </a>
              </div>

              {/* Image Container */}
              <div className="relative h-[50%] w-full overflow-hidden">
                <Image
                  src="/Gemini_Generated_Image_3zucg63zucg63zuc.png"
                  alt="Dental alignment visualization showing proper teeth positioning for optimal smile appearance and function"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {/* Gradient fade from background to transparent */}
                <div 
                  className="absolute inset-x-0 top-0 h-32 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, #e8e8e8 0%, rgba(232, 232, 232, 0.9) 30%, rgba(232, 232, 232, 0.5) 60%, transparent 100%)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Row 2 - Right: Tooth Shape & Proportion */}
          <div className="lg:col-span-8 lg:row-span-2 group">
            <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1f3a] to-[#081422] border border-white/5 border-white/5 transition-colors duration-300">
              {/* Background Glow */}
              <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
              
              {/* Badge */}
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8 z-20">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent text-sm font-semibold backdrop-blur-sm border border-accent/30">
                  03
                </span>
              </div>
              
              {/* Background Image with mask fade */}
              <div 
                className="absolute inset-0 transition-none"
                style={{
                  maskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 100%)'
                }}
              >
                <Image
                  src="/Gemini_Generated_Image_w534xmw534xmw534.png"
                  alt="Close-up showing ideal tooth shape and proportions that create a natural, harmonious smile"
                  fill
                  className="object-cover brightness-75"
                  sizes="66vw"
                />
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col z-10">
                <div className="mt-auto pb-6">
                  <h3 className="text-white text-2xl lg:text-3xl font-semibold tracking-tight mb-3">
                    Tooth Shape & Proportion
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-md mb-4">
                    The size, shape, and proportions of teeth play a key role in creating a natural smile.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-white/70 transition-colors group/link">
                    Explore Aesthetics
                    <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" className="transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4 - Occlusion & Function */}
          <div className="lg:col-span-8 group">
            <div className="relative h-[400px] lg:h-[480px] rounded-3xl overflow-hidden bg-[#1a1a1a] border border-white/5 border-white/5 transition-colors duration-300">
              {/* Badge */}
              <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-20">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white text-sm font-semibold backdrop-blur-sm border border-white/20">
                  04
                </span>
              </div>
              
              {/* Decorative Arc */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <path 
                    d="M -50 200 Q 150 50 350 400" 
                    fill="none" 
                    stroke="#ffffff" 
                    strokeWidth="40"
                  />
                </svg>
              </div>

              {/* Image - Right Side with mask */}
              <div 
                className="absolute -inset-1"
                style={{
                  maskImage: 'linear-gradient(to left, black 0%, black 30%, transparent 80%)',
                  WebkitMaskImage: 'linear-gradient(to left, black 0%, black 30%, transparent 80%)'
                }}
              >
                <Image
                  src="/occlusion-function.png"
                  alt="Dental occlusion demonstration showing proper bite alignment for comfort and long-term oral health"
                  fill
                  quality={100}
                  priority
                  className="object-cover object-[80%_30%] scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 lg:p-10 pt-20 flex flex-col items-start justify-center text-left">
                <h3 className="text-white text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.1] mb-4">
                  Occlusion &<br />Function
                </h3>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-8 max-w-[280px]">
                  A stable bite is essential for comfort, function, and lasting aesthetic results.
                </p>
                <Button 
                  variant="secondary"
                  size="md"
                  href="#"
                >
                  Explore Aesthetics
                </Button>
              </div>
            </div>
          </div>

          {/* Row 4 - Gum Display & Smile Details */}
          <div className="lg:col-span-4 group">
            <div className="relative h-[400px] lg:h-[480px] rounded-[2.5rem] overflow-hidden bg-[#0a1525] border border-white/5 flex flex-col">
              {/* Badge */}
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8 z-20">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent text-sm font-semibold backdrop-blur-sm border border-accent/30">
                  05
                </span>
              </div>
              
              {/* Content - Top */}
              <div className="p-8 lg:p-10 pb-0 relative z-10">
                <h3 className="text-white text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
                  Gum Display & Smile Details
                </h3>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-md mb-4">
                  Gum shape, tooth display, and fine details influence the overall character of a smile.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-white/70 transition-colors">
                  Learn More
                  <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
                </a>
              </div>
              
              {/* Image - Bottom */}
              <div className="mt-auto relative flex-1 w-full overflow-hidden">
                <Image
                  src="/Gemini_Generated_Image_qad8rqad8rqad8rq.png"
                  alt="Optimal gum display and smile line showing the fine details that influence overall smile aesthetics"
                  fill
                  className="object-cover object-bottom transition-none"
                  sizes="60vw"
                />
                {/* Gradient fade from background to transparent */}
                <div 
                  className="absolute inset-x-0 top-0 h-24 pointer-events-none z-10"
                  style={{
                    background: 'linear-gradient(to bottom, #0a1525 0%, rgba(10, 21, 37, 0.8) 40%, transparent 100%)'
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
