'use client';

import React from 'react';
import Image from 'next/image';

export default function Technology() {
  return (
    <section
      className="py-20 lg:py-32 bg-[#0a0a0a] relative"
      aria-label="Our Technology"
    >
      <div className="relative w-full max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Image Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/687e18641b1e78d39b89f1b6_vecteezy_a-red-dental-model-with-teeth-missing_51059213 1 (1).png"
              alt="3D dental model showcasing advanced orthodontic technology"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
