'use client';

import React from 'react';
import Image from 'next/image';
import Button from './Button';

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 bg-[#e8e8e8] relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="max-w-lg">
            <h2
              id="about-heading"
              className="text-[#1d1d1f] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 sm:mb-8"
            >
              Expert Orthodontics,
              <br />
              Designed With Precision
            </h2>

            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              <p className="text-[#1d1d1f]/70 text-sm sm:text-base lg:text-lg leading-relaxed">
                We specialize in personalized orthodontic and aesthetic smile
                design for patients of all ages.
              </p>
              <p className="text-[#1d1d1f]/70 text-sm sm:text-base lg:text-lg leading-relaxed">
                Every treatment is digitally planned, guided by advanced
                technology, and refined with clinical experience, so results
                look natural, function properly, and last long-term.
              </p>
              <p className="text-[#1d1d1f]/70 text-sm sm:text-base lg:text-lg leading-relaxed">
                Our approach combines precision, transparency, and patient-first
                care to create an experience that feels as thoughtful as the
                results look.
              </p>
            </div>

            {/* Section Title */}
            <h3 className="text-[#1d1d1f] text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Meet Your Orthodontists
            </h3>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Button
                variant="primary"
                size="md"
                href="/about"
                className="!bg-[#1d1d1f] !text-white shadow-none text-sm sm:text-base"
              >
                Our Doctors
              </Button>
              <Button
                variant="secondary"
                size="md"
                href="/about/team"
                className="!text-[#1d1d1f] !border-[#1d1d1f]/20 hover:!bg-[#1d1d1f]/5 text-sm sm:text-base"
              >
                Our Team
              </Button>
            </div>
          </div>

          {/* Right - Balanced Images */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] mt-4 lg:mt-0">
            {/* Dr. Cronin - Left */}
            <div className="absolute left-0 top-[0%] w-[60%] sm:w-[62%] h-[80%] sm:h-[85%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white z-10">
              <Image
                src="/dr-cronin.jpg"
                alt="Dr. Cronin - Orthodontist"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 55vw, 35vw"
                loading="lazy"
                quality={80}
              />
            </div>

            {/* Dr. Mo - Right */}
            <div className="absolute right-0 top-[10%] w-[44%] sm:w-[42%] h-[50%] sm:h-[55%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
              <Image
                src="/dr-mo.jpg"
                alt="Dr. Mo - Orthodontist"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 44vw, (max-width: 1024px) 42vw, 35vw"
                loading="lazy"
                quality={80}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
