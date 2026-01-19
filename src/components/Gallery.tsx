'use client';

import React from 'react';
import Image from 'next/image';

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative bg-black"
      aria-label="3D Teeth Visualization Technology"
    >
      {/* Top Gradient Fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 lg:h-48 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10"
        aria-hidden="true"
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-5xl aspect-[16/9]">
              <Image
                src="/3d-teeth.png"
                alt="Advanced 3D digital teeth model showing precise orthodontic planning technology used for treatment visualization"
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
