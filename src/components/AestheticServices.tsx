'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    title: 'Facial Balance',
    description: 'We analyze how your teeth, lips, jaw, and facial structure work together. By aligning your smile with your natural facial proportions, we create results that look balanced, harmonious, and never overdone.',
    image: '/Gemini_Generated_Image_c7giizc7giizc7gi.png',
    imagePosition: 'object-center',
  },
  {
    title: 'Tooth Proportion',
    description: 'The size, shape, and position of each tooth affect how natural your smile looks. We design your tooth proportions using facial and dental measurements to create a smile that looks refined, natural, and uniquely yours.',
    image: '/Gemini_Generated_Image_w534xmw534xmw534.png',
    imagePosition: 'object-[70%_center]',
  },
  {
    title: 'Smile Alignment',
    description: 'We precisely align your teeth to improve smile symmetry, balance your facial features, and support long-term comfort and function. Proper alignment also makes your smile easier to clean and maintain over time.',
    image: '/Gemini_Generated_Image_xt9ynuxt9ynuxt9y.png',
    imagePosition: 'object-center',
  },
  {
    title: 'Gum Aesthetics',
    description: 'Gum shape and tissue levels frame your teeth and affect how your smile looks. We plan tooth position and gum contours together to create a clean, natural smile line that looks healthy — not artificial.',
    image: '/gum.png',
    imagePosition: 'object-center',
  },
  {
    title: 'Bite Function',
    description: 'A stable bite allows your teeth and jaw to work together properly. We correct how your teeth meet to improve comfort, protect your teeth from uneven wear, and support long-term jaw health.',
    image: '/Gemini_Generated_Image_48490p48490p4849.png',
    imagePosition: 'object-center',
  },
];

export default function AestheticServices() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScrollButtons);
      return () => slider.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.8;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="aesthetic-services"
      className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden"
      aria-labelledby="aesthetic-services-heading"
    >
      <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 lg:mb-14">
          <div>
            <h2
              id="aesthetic-services-heading"
              className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-4"
            >
              Aesthetic Excellence
            </h2>
            <p className="text-white/50 text-lg max-w-xl">
              More than straight teeth — we design smiles that elevate your entire face.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center gap-3 mt-6 lg:mt-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft 
                  ? 'border-white/20 text-white hover:bg-white/10 hover:border-white/40' 
                  : 'border-white/10 text-white/30 cursor-not-allowed'
              }`}
              aria-label="Previous slide"
            >
              <iconify-icon icon="solar:arrow-left-linear" width="20" height="20" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight 
                  ? 'border-white/20 text-white hover:bg-white/10 hover:border-white/40' 
                  : 'border-white/10 text-white/30 cursor-not-allowed'
              }`}
              aria-label="Next slide"
            >
              <iconify-icon icon="solar:arrow-right-linear" width="20" height="20" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div 
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            marginRight: 'calc(-50vw + 50%)',
            paddingRight: 'calc(50vw - 50%)',
          }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[85%] sm:w-[70%] lg:w-[45%] xl:w-[40%] snap-start"
            >
              <div className="relative h-[450px] lg:h-[500px] rounded-3xl overflow-hidden bg-[#0d1016] border border-white/5 hover:border-white/10 transition-all duration-300 group">
                
                {/* Background Image with mask fade */}
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    maskImage: 'linear-gradient(to left, black 0%, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to left, black 0%, black 50%, transparent 100%)'
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    quality={90}
                    className={`object-cover ${slide.imagePosition} brightness-75`}
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 45vw"
                  />
                </div>
                
                {/* Content - Bottom Left */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col items-start justify-end text-left">
                  <h3 className="text-white text-2xl lg:text-3xl font-semibold tracking-tight leading-[1.1] mb-3">
                    {slide.title}
                  </h3>
                  <p className="text-white/60 text-sm lg:text-base leading-relaxed mb-5 max-w-sm">
                    {slide.description}
                  </p>
                  <a 
                    href="/aesthetics" 
                    className="inline-flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white transition-colors group/link"
                  >
                    Learn More
                    <iconify-icon 
                      icon="solar:arrow-right-linear" 
                      width="16" 
                      height="16" 
                      className="group-hover/link:translate-x-1 transition-transform" 
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
