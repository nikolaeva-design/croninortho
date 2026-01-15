'use client';

import React from 'react';

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-black">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 lg:h-48 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10" />
      
      <div className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center">
            <img
              src="/3d-teeth.png"
              alt="3D Technology"
              className="w-full max-w-5xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
      
    </section>
  );
}
