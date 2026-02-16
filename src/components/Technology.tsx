'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function Technology() {
  const sectionRef = useRef<HTMLElement>(null);
  const [invertWidth, setInvertWidth] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let currentWidth = 0;
    let targetWidth = 0;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    // Keyframe mapping based on Webflow setup
    // 0% scroll → 0% width
    // 28% scroll → 0% width (animation starts)
    // 53% scroll → 50% width
    // 85% scroll → 100% width
    // 100% scroll → 100% width
    const getWidthFromProgress = (progress: number): number => {
      if (progress <= 28) return 0;
      if (progress >= 85) return 100;
      
      // Linear interpolation between 28% and 85%
      const normalizedProgress = (progress - 28) / (85 - 28);
      return normalizedProgress * 100;
    };

    const animate = () => {
      // Smooth interpolation (70% smoothing like Webflow)
      currentWidth = lerp(currentWidth, targetWidth, 0.08);
      setInvertWidth(currentWidth);
      animationFrame = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress:
      // 0% = when element starts entering (top at bottom of viewport)
      // 100% = when element is fully invisible (bottom at top of viewport)
      const elementHeight = rect.height;
      const scrollStart = windowHeight;
      const scrollEnd = -elementHeight;
      const scrollRange = scrollStart - scrollEnd;
      const currentScroll = scrollStart - rect.top;

      let progress = (currentScroll / scrollRange) * 100;
      progress = Math.max(0, Math.min(100, progress));

      targetWidth = getWidthFromProgress(progress);
    };

    animationFrame = requestAnimationFrame(animate);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-black relative"
      aria-label="3D Technology"
    >
      <div className="relative w-full max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-6 lg:px-12 2xl:px-16">
        {/* Image Container - 20% smaller */}
        <div className="relative w-[80%] max-w-2xl mx-auto aspect-square rounded-2xl overflow-hidden">
          {/* Base Image - Normal (always visible) */}
          <Image
            src="/dental-model-3d.png"
            alt="Natural teeth view"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 768px"
            priority
            unoptimized
          />

          {/* Inverted Image Overlay - Width controlled by scroll */}
          <div
            className="absolute inset-0"
            style={{ 
              clipPath: `polygon(0 0, ${invertWidth}% 0, ${invertWidth}% 100%, 0 100%)`
            }}
          >
            <Image
              src="/dental-model-3d.png"
              alt="3D digital scan view"
              fill
              className="object-contain"
              style={{ filter: 'invert(1)' }}
              sizes="(max-width: 1024px) 100vw, 768px"
              priority
              unoptimized
            />
          </div>

        </div>
      </div>
    </section>
  );
}
