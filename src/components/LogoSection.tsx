'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

// Partner brand logos - orthodontic industry partners (spread far from center)
const partnerLogos = [
  { id: 'invisalign', name: 'invisalign', startX: -30, startY: -28, fontSize: 24 },
  { id: '3shape', name: '3shape', startX: 30, startY: -28, fontSize: 26 },
  { id: 'itero', name: 'iTero', startX: -38, startY: 0, fontSize: 28 },
  { id: 'american-ortho', name: 'American Orthodontics', startX: 38, startY: 0, fontSize: 16 },
  { id: 'ivoclar', name: 'Ivoclar', startX: -30, startY: 28, fontSize: 22 },
  { id: 'henry-schein', name: 'Henry Schein', startX: 30, startY: 28, fontSize: 18 },
  { id: 'sinclair', name: 'SINCLAIR', startX: 0, startY: -38, fontSize: 20 },
];

export default function LogoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let currentProgress = 0;
    let targetProgress = 0;

    const animate = () => {
      currentProgress += (targetProgress - currentProgress) * 0.1;
      setProgress(currentProgress);
      animationFrame = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollableHeight = sectionHeight - window.innerHeight;
      
      // How far we've scrolled into the sticky section
      const scrolled = -rect.top;
      
      // Calculate progress (0 to 1)
      let prog = scrolled / scrollableHeight;
      prog = Math.max(0, Math.min(1, prog));
      
      targetProgress = prog;
    };

    animationFrame = requestAnimationFrame(animate);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Calculate logo position based on progress
  const getLogoStyle = (logo: typeof partnerLogos[0]) => {
    // Ease function for smoother animation
    const easeProgress = progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    const x = logo.startX * (1 - easeProgress);
    const y = logo.startY * (1 - easeProgress);
    const scale = 1 - (easeProgress * 0.5); // Scale down as they approach center
    const opacity = 1 - (easeProgress * 0.8); // Fade out as they approach center

    return {
      transform: `translate(${x}vw, ${y}vh) scale(${scale})`,
      opacity: Math.max(0.1, opacity),
    };
  };

  return (
    <div 
      ref={sectionRef}
      className="relative"
      style={{ height: '300vh' }} // 3x viewport height for scroll distance
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen bg-[#e8e8e8] flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          
          {/* Floating Partner Logos */}
          {partnerLogos.map((logo) => {
            const easeProgress = progress < 0.5 
              ? 2 * progress * progress 
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            const x = logo.startX * (1 - easeProgress);
            const y = logo.startY * (1 - easeProgress);
            const scale = 1 - (easeProgress * 0.6);
            // Fade out completely - from 0.7 to 0
            const opacity = 0.7 * (1 - easeProgress);
            
            return (
              <div
                key={logo.id}
                className="absolute top-1/2 left-1/2 transition-none pointer-events-none whitespace-nowrap"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}vw, ${y}vh) scale(${scale})`,
                  opacity: opacity,
                }}
              >
                <span 
                  className="font-semibold tracking-tight text-[#1d1d1f]"
                  style={{ fontSize: `${logo.fontSize}px` }}
                >
                  {logo.name}
                </span>
              </div>
            );
          })}

          {/* Center - Main Logo (always visible, grows slightly) */}
          <div 
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div
              style={{
                transform: `scale(${1 + progress * 0.2})`,
              }}
            >
              <Image
                src="/logo-dark.png"
                alt="CroninOrtho - Dr. D.G. Cronin & Dr. M. Sarfraz Orthodontic Practice"
                width={960}
                height={192}
                className="h-48 lg:h-60 xl:h-72 w-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Subtle radial glow when logos converge */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0.05) 0%, transparent 70%)',
              opacity: progress,
            }}
          />

        </div>
      </div>
    </div>
  );
}
