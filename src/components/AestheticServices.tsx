'use client';

import React from 'react';
import Image from 'next/image';
import Button from './Button';

export default function AestheticServices() {
  return (
    <section id="aesthetic-services" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
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
        <div className="mb-12 lg:mb-16">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-4">
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
            <div className="relative h-[400px] lg:h-[450px] rounded-3xl overflow-hidden bg-gradient-to-r from-[#0a1628] via-[#0f2240] to-[#0a1628]">
              {/* Background Glow */}
              <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
              
              {/* Image - Left Side */}
              <div className="absolute left-0 top-0 bottom-0 w-1/2 lg:w-[45%]">
                <Image
                  src="/facial-balance-harmony-v2.png"
                  alt="Facial Balance"
                  fill
                  className="object-cover object-center"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a1628]" />
              </div>
              
              {/* Content - Right Side */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-[55%] flex flex-col justify-center p-8 lg:p-12 xl:p-16">
                <h3 className="text-white text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-4">
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
            <div className="relative h-full min-h-[500px] lg:min-h-0 rounded-[2.5rem] overflow-hidden bg-[#f5f5f7] flex flex-col p-10">
              {/* Content - Top Left */}
              <div className="mb-10">
                <h3 className="text-[#1d1d1f] text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                  Alignment
                </h3>
                <p className="text-[#1d1d1f]/50 text-base lg:text-lg leading-relaxed">
                  Proper alignment supports both the appearance of the smile and long-term function.
                </p>
              </div>

              {/* Image Container */}
              <div className="mt-auto relative aspect-[4/3] w-full">
                <Image
                  src="/alignment.png"
                  alt="Alignment"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Row 2 - Right: Tooth Shape & Proportion */}
          <div className="lg:col-span-8 lg:row-span-2 group">
            <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden bg-[#111214] border border-white/5">
              {/* Background Image */}
              <Image
                src="/tooth-proportion.png"
                alt="Tooth Shape & Proportion"
                fill
                className="object-cover"
                sizes="66vw"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-center">
                <h3 className="text-white text-xl lg:text-2xl font-semibold tracking-tight mb-3">
                  Tooth Shape & Proportion
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-md mb-4">
                  The size, shape, and proportions of teeth play a key role in creating a natural smile.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-white/70 text-sm font-medium hover:text-white transition-colors">
                  Explore Aesthetics
                  <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
                </a>
              </div>
            </div>
          </div>

          {/* Row 4 - Occlusion & Function */}
          <div className="lg:col-span-5 group">
            <div className="relative h-[350px] lg:h-[400px] rounded-3xl overflow-hidden bg-[#b4a46a]">
              {/* Decorative Arc */}
              <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <path 
                    d="M -50 200 Q 150 50 350 400" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="40"
                  />
                </svg>
              </div>

              {/* Image - Right Side */}
              <div className="absolute right-0 top-0 bottom-0 w-2/3 lg:w-[60%] translate-x-4">
              <Image
                  src="/occlusion-function.png"
                  alt="Occlusion & Function"
                fill
                  className="object-cover object-center"
                  sizes="33vw"
              />
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-white text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.1] mb-4">
                  Occlusion &<br />Function
                </h3>
                <p className="text-white text-base lg:text-lg leading-relaxed mb-8 max-w-[200px] lg:max-w-[240px]">
                  A stable bite is essential for comfort, function, and lasting aesthetic results.
                </p>
                <Button 
                  variant="primary"
                  size="md"
                  href="#"
                  className="w-fit"
                >
                  Explore Aesthetics
                </Button>
              </div>
            </div>
          </div>

          {/* Row 4 - Gum Display & Smile Details */}
          <div className="lg:col-span-7 group">
            <div className="relative h-[350px] lg:h-[400px] rounded-[2.5rem] overflow-hidden bg-white flex flex-col">
              {/* Content - Top Left */}
              <div className="p-8 lg:p-10">
                <h3 className="text-[#1d1d1f] text-3xl lg:text-4xl font-semibold tracking-tight mb-4 uppercase">
                  Gum Display & Smile Details
                </h3>
                <p className="text-[#1d1d1f]/50 text-base lg:text-lg leading-relaxed max-w-md">
                  Gum shape, tooth display, and fine details influence the overall character of a smile.
                </p>
              </div>
              
              {/* Image - Bottom */}
              <div className="mt-auto relative h-[200px] lg:h-[240px] w-full">
                <Image
                  src="/gum-display.png"
                  alt="Gum Display"
                  fill
                  className="object-cover object-center"
                  sizes="60vw"
                />
                {/* Top Fade Overlay to blend image with white background */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-transparent h-12 lg:h-16" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
