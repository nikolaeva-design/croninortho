'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

// Partner brand logos with image files - arranged in a circle
const partnerLogos = [
  { id: 'sinclair', name: 'Sinclair Orthodontics', image: '/Знімок екрана 2026-02-16 о 15.22.54.png', startX: -30, startY: -22 },
  { id: '3shape', name: '3Shape', image: '/Знімок екрана 2026-02-16 о 15.22.05.png', startX: 0, startY: -28 },
  { id: 'american-ortho', name: 'American Orthodontics', image: '/Знімок екрана 2026-02-16 о 15.23.44.png', startX: 30, startY: -22 },
  { id: 'ivoclar', name: 'Ivoclar', image: '/Знімок екрана 2026-02-16 о 15.21.18.png', startX: -38, startY: 5 },
  { id: 'invisalign', name: 'Invisalign', image: '/Знімок екрана 2026-02-16 о 15.20.48.png', startX: 38, startY: 5 },
  { id: 'itero', name: 'iTero', image: '/terro.png', startX: -25, startY: 25 },
  { id: 'henry-schein', name: 'Henry Schein', image: '/Знімок екрана 2026-02-16 о 15.28.29.png', startX: 25, startY: 25 },
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
      
      const scrolled = -rect.top;
      
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

  return (
    <div 
      ref={sectionRef}
      className="relative"
      style={{ height: '300vh' }}
    >
      {/* Sticky container - white background to match logo screenshots */}
      <div className="sticky top-0 h-screen bg-white flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          
          {/* Floating Partner Logos */}
          {partnerLogos.map((logo) => {
            const easeProgress = progress < 0.5 
              ? 2 * progress * progress 
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            const x = logo.startX * (1 - easeProgress);
            const y = logo.startY * (1 - easeProgress);
            const scale = 1 - (easeProgress * 0.6);
            const opacity = 0.9 * (1 - easeProgress);
            
            return (
              <div
                key={logo.id}
                className="absolute top-1/2 left-1/2 transition-none pointer-events-none"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}vw, ${y}vh) scale(${scale})`,
                  opacity: opacity,
                }}
              >
                <div className="relative h-12 lg:h-16 w-32 lg:w-44">
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    sizes="180px"
                  />
                </div>
              </div>
            );
          })}

          {/* Center - Main Logo (always visible, grows slightly) */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
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
              background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)',
              opacity: progress,
            }}
          />

        </div>
      </div>
    </div>
  );
}
