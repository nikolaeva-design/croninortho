'use client';

import React from 'react';
import Image from 'next/image';
import Button from './Button';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-[#e8e8e8] relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="max-w-lg">
            <h2
              id="about-heading"
              className="text-[#1d1d1f] text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8"
            >
              About Our
              <br />
              Practice
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-[#1d1d1f]/70 text-base lg:text-lg leading-relaxed">
                Our practice is dedicated to providing comprehensive orthodontic
                and aesthetic care for patients of all ages. We focus on
                individualized treatment planning, clear communication, and
                evidence-based approaches to achieve functional, stable, and
                long-lasting results.
              </p>
              <p className="text-[#1d1d1f]/70 text-base lg:text-lg leading-relaxed">
                By combining clinical expertise with modern technology, we aim
                to create a comfortable and supportive experience at every stage
                of treatment.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="md"
                href="/about/dr-cronin"
                className="!bg-[#1d1d1f] !text-white shadow-none"
              >
                Meet Dr. Cronin
              </Button>
              <Button
                variant="primary"
                size="md"
                href="/about/dr-mo"
                className="!bg-[#1d1d1f] !text-white shadow-none"
              >
                Meet Dr. Mo
              </Button>
              <Button
                variant="secondary"
                size="md"
                href="/about/team"
                className="!text-[#1d1d1f] !border-[#1d1d1f]/20 hover:!bg-[#1d1d1f]/5"
              >
                Meet the Team
              </Button>
            </div>
          </div>

          {/* Right - Balanced Images */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Dr. Cronin - Left */}
            <div className="absolute left-0 top-[5%] w-[55%] lg:w-[55%] h-[75%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <Image
                src="/DR. CRONIN.jpg"
                alt="Dr. Cronin - Orthodontist"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 55vw, 35vw"
              />
            </div>

            {/* Dr. Mo - Right */}
            <div className="absolute right-0 top-[20%] w-[55%] lg:w-[55%] h-[75%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/DR. MO.jpg"
                alt="Dr. Mo - Orthodontist"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 55vw, 35vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
