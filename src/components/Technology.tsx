'use client';

import React from 'react';

export default function Technology() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Centered Image */}
        <div className="flex items-center justify-center">
          <img
            src="/3d-teeth.png"
            alt="3D Technology"
            className="w-full max-w-4xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
