'use client';

import React, { useRef, useState, useEffect, ReactNode } from 'react';

export interface Testimonial {
  quote: string;
  name?: string;
  author?: string;
  initial?: string;
  avatar?: string;
  treatment?: string;
  role?: string;
}

interface TestimonialsSliderProps {
  testimonials?: Testimonial[];
  cardHeight?: string;
  title?: ReactNode;
  subtitle?: string;
}

const defaultTestimonials: Testimonial[] = [
  { name: 'M Prins', initial: 'M', quote: "The best orthodontic and patient care! They treated myself and my three daughters with some tricky situations over the last 6 years, and have given us royal treatment the entire time. The team at reception are exceptional!" },
  { name: 'Scott Drummond', initial: 'S', quote: 'We now have our third child going through with Cronin Ortho. The service has never wavered over the years and the end results are fantastic. All of the staff are so friendly and very accommodating.' },
  { name: 'Melissa Ketel', initial: 'M', quote: "Cronin Ortho is fantastic! Both Dr. Mo and Dr. Cronin are attentive and caring, they take care of children's comfort, understand exactly what's happening, and are always ready to help." },
  { name: 'Daine Dok', initial: 'D', quote: 'Great place to get Ortho treatment for yourself or your kids. Staff are knowledgeable and friendly. They happily answer questions or address your concerns, giving you a stress free experience.' },
  { name: 'Tiffany Froese', initial: 'T', quote: 'Absolutely amazing ortho office! The staff is friendly, gentle, and always on time. They made the whole process so easy and stress-free. Highly recommend!' },
  { name: 'Yuliya Davidovsky', initial: 'Y', quote: 'We had a great experience at the orthodontic clinic Cronin. The staff was friendly, professional, and very patient. Everything was explained clearly, and the treatment was done with care.' },
];

export default function TestimonialsSlider({ 
  testimonials = defaultTestimonials, 
  cardHeight = 'h-[260px]',
  title = 'What Parents Are Saying',
  subtitle = "Don't just take our word for it — hear from families who've experienced the difference."
}: TestimonialsSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  /** Fixed `h-*` clips long quotes; use min-height so cards grow with content. */
  const cardMinHeightClass = cardHeight.startsWith('h-')
    ? cardHeight.replace(/^h-/, 'min-h-')
    : cardHeight;

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
    const onScroll = () => checkScrollButtons();
    const onResize = () => checkScrollButtons();
    slider?.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      slider?.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [testimonials.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('div[class*="shrink-0"]') as HTMLElement;
      const scrollAmount = card ? card.offsetWidth + 20 : 340;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const getDisplayName = (testimonial: Testimonial) => testimonial.name || testimonial.author || '';
  const getInitial = (testimonial: Testimonial) => testimonial.initial || testimonial.avatar || getDisplayName(testimonial).charAt(0);
  const getSubtitle = (testimonial: Testimonial) => testimonial.treatment || testimonial.role || '';

  return (
    <div className="relative">
      {/* Header with title left, arrows right */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 lg:mb-14 px-6 lg:px-12">
        <div className="max-w-xl">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
            {subtitle}
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
            aria-label="Previous testimonial"
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
            aria-label="Next testimonial"
          >
            <iconify-icon icon="solar:arrow-right-linear" width="20" height="20" />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div 
        ref={sliderRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-6 lg:px-12"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          scrollPaddingLeft: '24px',
          scrollPaddingRight: '24px',
        }}
      >
        {testimonials.map((testimonial, idx) => (
          <div
            key={`${getDisplayName(testimonial) || 'review'}-${idx}`}
            className={`shrink-0 w-[300px] sm:w-[320px] rounded-2xl p-6 bg-white/[0.02] border border-white/10 flex flex-col ${cardMinHeightClass} snap-start`}
          >
            {/* Stars - fixed height to prevent layout shift while loading */}
            <div className="flex items-center gap-0.5 text-[#c9a962] mb-4 h-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <iconify-icon key={i} icon="solar:star-bold" width="14" height="14" aria-hidden="true" className="flex-shrink-0" />
              ))}
            </div>
            {/* Quote */}
            <p className="text-white/55 text-sm leading-relaxed flex-1 break-words">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            {/* Author - Always at bottom */}
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium bg-gradient-to-br from-[#c9a962] to-[#d4b978] text-[#0a0a0a]">
                {getInitial(testimonial)}
              </div>
              <div>
                <div className="text-white/90 text-sm font-medium">{getDisplayName(testimonial)}</div>
                {getSubtitle(testimonial) && (
                  <div className="text-white/50 text-xs">{getSubtitle(testimonial)}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
