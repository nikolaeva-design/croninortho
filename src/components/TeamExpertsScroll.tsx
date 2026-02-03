'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const teamHighlights = [
  {
    name: 'Dr. D.G. Cronin',
    role: 'Lead Orthodontist',
    description: 'With over 30 years of experience, Dr. Cronin has transformed thousands of smiles with his expertise and compassionate approach.',
    href: '/about/dr-cronin',
    image: '/DR. CRONIN.jpg',
  },
  {
    name: 'Dr. M. Sarfraz',
    role: 'Orthodontist',
    description: 'Dr. Mo brings innovative techniques and a warm personality to every patient interaction.',
    href: '/about/dr-mo',
    image: '/DR. MO.jpg',
  },
  {
    name: 'Our Team',
    role: 'Dedicated Staff',
    description: 'Our friendly and skilled team is committed to making your orthodontic journey smooth and enjoyable.',
    href: '/about/team',
    image: null,
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
    
    // Each card has a unique settled position with slight offset and rotation
    // This creates a natural "stack of cards" look
    const settledOffsets = [
      { x: 0, y: 0, rotate: -2 },      // Card 0: slight left tilt
      { x: 8, y: -4, rotate: 1 },       // Card 1: slight right tilt, offset right
      { x: -4, y: -8, rotate: -1 },     // Card 2: slight left tilt, offset left
    ];
    
    const settled = settledOffsets[cardIndex];
    
    // Card starts below (500px down) and comes UP to position
    let translateY = 500;
    let translateX = 0;
    let rotate = -10;
    
    if (isAnimating) {
      // Animate from below to settled position
      translateY = 500 * (1 - animationProgress) + settled.y * animationProgress;
      translateX = settled.x * animationProgress;
      rotate = -10 * (1 - animationProgress) + settled.rotate * animationProgress;
    } else if (isSettled) {
      translateY = settled.y;
      translateX = settled.x;
      rotate = settled.rotate;
    }
    
    return { 
      translateY,
      translateX, 
      rotate, 
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
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/cta-background.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Very light overlay */}
          <div className="absolute inset-0 bg-black/20" />
          {/* Subtle gradient at edges for blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/40 via-transparent to-[#0f0f0f]/40" />
        </div>
        
        {/* Centered card stack */}
        <div className="relative w-full max-w-[340px] lg:max-w-[380px] aspect-[3/4] z-10">
          {/* Cards */}
          {teamHighlights.map((member, index) => {
            const { translateY, translateX, rotate, zIndex, isVisible } = getCardState(index);

            return (
              <a
                key={member.name}
                href={member.href}
                className="group/card absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-black/30"
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg)`,
                  zIndex,
                  transition: 'transform 0.15s ease-out',
                  visibility: isVisible ? 'visible' : 'hidden',
                  opacity: isVisible ? 1 : 0,
                  background: 'linear-gradient(180deg, #f8f7f4 0%, #f0efe9 100%)',
                }}
              >
                {/* Photo area - Black and White */}
                <div className="h-[62%] bg-[#e8e6e0] relative overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top grayscale"
                      sizes="380px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#e0ded8] to-[#d5d3cc]">
                      <iconify-icon
                        icon="solar:users-group-rounded-bold"
                        width="80"
                        height="80"
                        className="text-[#a09a8c]"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8f7f4] to-transparent" />
                </div>

                {/* Info area */}
                <div className="h-[38%] px-6 py-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[#2a2825] text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#8b7d5e] text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-[#6b6560] text-sm leading-relaxed line-clamp-2">
                      {member.description}
                    </p>
                  </div>
                  
                  {/* Read more button */}
                  <div className="flex items-center gap-2 text-[#9a8a5c] text-sm font-medium transition-all group-hover/card:text-[#7a6a3c] group-hover/card:gap-3">
                    <span>Read more</span>
                    <iconify-icon
                      icon="solar:arrow-right-linear"
                      width="16"
                      height="16"
                      className="transition-transform group-hover/card:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Subtle border */}
                <div className="absolute inset-0 rounded-3xl border border-[#d5d3cc]/50 pointer-events-none" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
