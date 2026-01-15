'use client';

import React from 'react';

export default function LogoSection() {
  return (
    <>
      {/* Fixed background section - stays in place */}
      <section className="fixed inset-0 bg-[#e8e8e8] flex items-center justify-center overflow-hidden z-0">
        <div className="relative max-w-[1400px] w-full mx-auto px-6 lg:px-12 min-h-[500px] lg:min-h-[600px]">
        
        {/* Floating Logos - Using Iconify for reliable display */}
        
        {/* Top Left */}
        <div className="absolute top-8 left-8 lg:top-12 lg:left-16 opacity-40 hover:opacity-100 transition-opacity duration-300">
          <iconify-icon icon="logos:apple-pay" width="48" height="24" />
        </div>

        {/* Top Right */}
        <div className="absolute top-8 right-8 lg:top-12 lg:right-16 opacity-40 hover:opacity-100 transition-opacity duration-300">
          <iconify-icon icon="logos:google-pay" width="48" height="24" />
        </div>

        {/* Center - Main Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src="/logo-dark.png"
            alt="CroninOrtho - Dr. D.G. Cronin & Dr. M. Sarfraz"
            className="h-16 lg:h-20 xl:h-24 w-auto object-contain"
          />
        </div>

        {/* Middle Left */}
        <div className="absolute top-[55%] left-4 lg:left-8 opacity-40 hover:opacity-100 transition-opacity duration-300">
          <iconify-icon icon="logos:visa" width="48" height="24" />
        </div>

        {/* Middle Right */}
        <div className="absolute top-[55%] right-4 lg:right-8 opacity-40 hover:opacity-100 transition-opacity duration-300">
          <iconify-icon icon="logos:mastercard" width="48" height="24" />
        </div>

        {/* Bottom Center Left */}
        <div className="absolute bottom-[30%] left-[20%] lg:left-[25%] opacity-40 hover:opacity-100 transition-opacity duration-300">
          <iconify-icon icon="logos:amex" width="48" height="24" />
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-12 left-8 lg:bottom-16 lg:left-16 opacity-40 hover:opacity-100 transition-opacity duration-300">
          <iconify-icon icon="logos:discover" width="48" height="24" />
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-12 right-8 lg:bottom-16 lg:right-16 opacity-40 hover:opacity-100 transition-opacity duration-300">
          <iconify-icon icon="logos:diners-club" width="48" height="24" />
        </div>

      </div>
      </section>
      
      {/* Spacer to maintain scroll height */}
      <div className="h-screen" />
    </>
  );
}
