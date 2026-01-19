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
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="md"
                href="#doctors"
                className="!bg-[#1d1d1f] !text-white shadow-none"
              >
                Meet Our Doctors
              </Button>
              <Button
                variant="secondary"
                size="md"
                href="#team"
                className="!text-[#1d1d1f] !border-[#1d1d1f]/20 hover:!bg-[#1d1d1f]/5"
              >
                Meet the Team
              </Button>
            </div>
          </div>

          {/* Right - Overlapping Images */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Main Large Image */}
            <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-[70%] lg:w-[65%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#1e5a8a] to-[#0f2a44]">
              {/* Placeholder: Add /about-main.jpg to public folder */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white/60 p-8">
                  <iconify-icon
                    icon="solar:buildings-3-linear"
                    width="64"
                    height="64"
                    aria-hidden="true"
                  />
                  <p className="mt-4 text-sm">Practice Image</p>
                </div>
              </div>
            </div>

            {/* Smaller Overlapping Image */}
            <div className="absolute right-0 top-[15%] w-[45%] lg:w-[40%] aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gradient-to-br from-[#2a6a9a] to-[#1a3a5c]">
              {/* Placeholder: Add /about-secondary.jpg to public folder */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white/60 p-4">
                  <iconify-icon
                    icon="solar:users-group-rounded-linear"
                    width="48"
                    height="48"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-xs">Team Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
