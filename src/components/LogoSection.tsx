'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

// Logo positions - start positions (percentage from center)
const logos = [
  { id: 'apple', icon: 'logos:apple-pay', startX: -40, startY: -35, size: 64 },
  { id: 'google', icon: 'logos:google-pay', startX: 40, startY: -35, size: 64 },
  { id: 'visa', icon: 'logos:visa', startX: -45, startY: 5, size: 56 },
  { id: 'mastercard', icon: 'logos:mastercard', startX: 45, startY: 5, size: 56 },
  { id: 'amex', icon: 'logos:amex', startX: -30, startY: 30, size: 48 },
  { id: 'discover', icon: 'logos:discover', startX: -40, startY: 40, size: 48 },
  { id: 'diners', icon: 'logos:diners-club', startX: 40, startY: 40, size: 48 },
  { id: 'paypal', icon: 'logos:paypal', startX: 30, startY: 30, size: 48 },
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
  const getLogoStyle = (logo: typeof logos[0]) => {
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
          
          {/* Floating Payment Logos */}
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="absolute top-1/2 left-1/2 transition-none pointer-events-none"
              style={{
                ...getLogoStyle(logo),
                marginLeft: -logo.size / 2,
                marginTop: -logo.size / 2,
              }}
            >
              <iconify-icon
                icon={logo.icon}
                width={logo.size}
                height={logo.size / 2}
                aria-hidden="true"
              />
            </div>
          ))}

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
                src="/logo.svg"
                alt="CroninOrtho - Dr. D.G. Cronin & Dr. M. Sarfraz Orthodontic Practice"
                width={320}
                height={64}
                className="h-16 lg:h-20 xl:h-24 w-auto object-contain invert"
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
