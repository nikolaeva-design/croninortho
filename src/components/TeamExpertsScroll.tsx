'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const teamHighlights = [
  {
    name: 'Dr. Cronin',
    href: '/about/dr-cronin',
    image: '/dr-cronin.jpg',
    imagePosition: 'object-[center_30%]',
  },
  {
    name: 'Dr. Mo',
    href: '/about/dr-mo',
    image: '/dr-mo.jpg',
    imagePosition: 'object-top',
  },
  {
    name: 'Our Team',
    href: '/about/team',
    image: null,
    imagePosition: 'object-center',
  },
];

export default function TeamExpertsScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      const scrollableDistance = sectionHeight - viewportHeight;
      const scrolledIntoSection = -rect.top;
      
      const progress = Math.max(0, Math.min(1, scrolledIntoSection / scrollableDistance));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate card state - ALL cards come UP from below as you scroll
  // With pauses between each card so user can see each one
  const getCardState = (cardIndex: number) => {
    // Timeline: 
    // 0-15%: Card 0 animates in
    // 15-35%: Card 0 visible (pause)
    // 35-50%: Card 1 animates in
    // 50-70%: Card 1 visible (pause)
    // 70-85%: Card 2 animates in
    // 85-100%: Card 2 visible (pause)
    
    const animationDuration = 0.15; // 15% of scroll for animation
    const pauseDuration = 0.20; // 20% of scroll for pause
    const segmentSize = animationDuration + pauseDuration; // 35% per card
    
    const cardStart = cardIndex * segmentSize;
    const animationEnd = cardStart + animationDuration;
    
    // Progress within this card's animation phase (0 to 1)
    const animationProgress = Math.max(0, Math.min(1, (scrollProgress - cardStart) / animationDuration));
    
    const isVisible = scrollProgress >= cardStart;
    const isAnimating = scrollProgress >= cardStart && scrollProgress < animationEnd;
    const isSettled = scrollProgress >= animationEnd;
    
    // Circular cards have different settled offsets - more subtle
    const settledOffsets = [
      { x: 0, y: 0, rotate: 0, scale: 1 },      // Card 0: centered
      { x: 12, y: -8, rotate: 3, scale: 1 },    // Card 1: slight offset
      { x: -8, y: -12, rotate: -2, scale: 1 },  // Card 2: opposite offset
    ];
    
    const settled = settledOffsets[cardIndex];
    
    // Card starts below (500px down) and comes UP to position
    let translateY = 500;
    let translateX = 0;
    let rotate = 0;
    let scale = 0.8;
    
    if (isAnimating) {
      // Animate from below to settled position
      translateY = 500 * (1 - animationProgress) + settled.y * animationProgress;
      translateX = settled.x * animationProgress;
      rotate = settled.rotate * animationProgress;
      scale = 0.8 + 0.2 * animationProgress;
    } else if (isSettled) {
      translateY = settled.y;
      translateX = settled.x;
      rotate = settled.rotate;
      scale = settled.scale;
    }
    
    return { 
      translateY,
      translateX, 
      rotate,
      scale,
      zIndex: 10 + cardIndex * 10, // Later cards on top
      isVisible 
    };
  };

  return (
    <section 
      ref={sectionRef}
      className="relative"
      style={{ height: '300vh' }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/cta-consultation-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Darker overlay for contrast with dark cards */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Subtle gradient at edges for blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/60" />
        </div>
        
        {/* Section title - positioned above cards */}
        <div className="relative z-20 text-center mb-8 mt-20">
          <p className="text-[#c9a962] text-sm font-medium tracking-wider uppercase mb-2">Meet the Experts</p>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold">Our Team</h2>
        </div>
        
        {/* Centered rounded square card stack */}
        <div className="relative w-[320px] h-[420px] sm:w-[380px] sm:h-[500px] lg:w-[420px] lg:h-[540px] xl:w-[480px] xl:h-[620px] 2xl:w-[540px] 2xl:h-[700px] z-10">
          {/* Cards */}
          {teamHighlights.map((member, index) => {
            const { translateY, translateX, rotate, scale, zIndex, isVisible } = getCardState(index);

            return (
              <a
                key={member.name}
                href={member.href}
                className="group/card absolute inset-0 rounded-[48px] sm:rounded-[56px] 2xl:rounded-[64px] overflow-hidden"
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                  zIndex,
                  transition: 'transform 0.2s ease-out',
                  visibility: isVisible ? 'visible' : 'hidden',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-4 bg-[#c9a962]/20 rounded-[60px] blur-[40px] opacity-60 group-hover/card:opacity-100 transition-opacity" />
                
                {/* Main card container */}
                <div 
                  className="relative w-full h-full rounded-[48px] sm:rounded-[56px] 2xl:rounded-[64px] border-[3px] border-[#c9a962]/60 group-hover/card:border-[#c9a962] transition-colors overflow-hidden"
                  style={{
                    background: '#0a0a0a',
                    boxShadow: '0 25px 60px -12px rgba(0,0,0,0.7), 0 0 40px -10px rgba(201,169,98,0.2)',
                  }}
                >
                  {/* Photo area */}
                  <div className="absolute inset-0 overflow-hidden rounded-[45px] sm:rounded-[53px] 2xl:rounded-[61px]">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className={`object-cover ${member.imagePosition} group-hover/card:scale-105 transition-transform duration-500`}
                        sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, (max-width: 1280px) 420px, (max-width: 1536px) 480px, 540px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                        <iconify-icon
                          icon="solar:users-group-rounded-bold"
                          width="120"
                          height="120"
                          className="text-[#c9a962]/40"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                    
                    {/* Clean gradient - only bottom portion where text is */}
                    <div 
                      className="absolute inset-x-0 bottom-0 h-[50%]" 
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0) 100%)',
                      }}
                    />
                  </div>

                  {/* Info area - positioned at bottom */}
                  <div className="absolute inset-x-0 bottom-0 px-8 pb-10 pt-4 2xl:px-10 2xl:pb-12 text-center">
                    <h3 className="text-white text-xl sm:text-2xl 2xl:text-3xl font-semibold mb-4">
                      {member.name}
                    </h3>
                    
                    {/* Learn more button */}
                    <div className="flex items-center justify-center gap-2 text-[#c9a962] text-sm 2xl:text-base font-medium group-hover/card:gap-3 transition-all">
                      <span>Learn More</span>
                      <iconify-icon
                        icon="solar:arrow-right-linear"
                        width="16"
                        height="16"
                        className="transition-transform group-hover/card:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Decorative golden ring accent */}
                <div className="absolute inset-0 rounded-[48px] sm:rounded-[56px] 2xl:rounded-[64px] border border-[#c9a962]/20 pointer-events-none scale-[1.02]" />
              </a>
            );
          })}
        </div>
        
        {/* Scroll hint */}
        <div className="relative z-20 text-center mt-8 mb-16">
          <p className="text-white/40 text-sm">Scroll to explore</p>
          <iconify-icon
            icon="solar:alt-arrow-down-linear"
            width="20"
            height="20"
            className="text-white/40 mt-2 animate-bounce"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
