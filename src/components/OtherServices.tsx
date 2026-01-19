'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

const services = [
  {
    id: 'retainers',
    title: 'Retainers',
    description:
      'Retainers are used after orthodontic treatment to help maintain the final position of the teeth and preserve long-term results.',
    image: '/Gemini_Generated_Image_ncuakencuakencua (1).png',
    alt: 'Clear retainer - maintains teeth alignment with 8-10 hours daily usage',
  },
  {
    id: 'nightguards',
    title: 'Nightguards',
    description:
      'Nightguards help protect teeth and reduce stress on the jaw during sleep, particularly for patients who grind or clench their teeth.',
    image: '/Gemini_Generated_Image_sy8cpxsy8cpxsy8c (1).png',
    alt: 'Night guard - reduces grinding and clenching, supports TMJ comfort',
  },
  {
    id: 'splints',
    title: 'Splints',
    description:
      'Splints are therapeutic appliances used to support jaw alignment and manage bite-related discomfort.',
    image: '/Gemini_Generated_Image_7lyjnr7lyjnr7lyj (1).png',
    alt: 'Therapeutic splint - supports jaw alignment, reduces bite-related discomfort',
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <article className="group">
      {/* 3D Card Wrapper */}
      <div
        className="relative aspect-square mb-6"
        style={{ perspective: '1000px' }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-full cursor-pointer transition-all duration-300 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          <Image
            src={service.image}
            alt={service.alt}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 450px"
            quality={100}
            priority
          />
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="text-white text-xl lg:text-2xl font-semibold tracking-tight mb-3">
        {service.title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed mb-4">
        {service.description}
      </p>

      {/* Learn More Link */}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-white/70 text-sm font-medium hover:text-white transition-colors group/link"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
        <iconify-icon
          icon="solar:arrow-right-linear"
          width="16"
          height="16"
          className="transition-transform group-hover/link:translate-x-1"
          aria-hidden="true"
        />
      </a>
    </article>
  );
}

export default function OtherServices() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
        {/* Section Header - Centered */}
        <div className="text-center mb-16 lg:mb-20">
          <h2
            id="services-heading"
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6"
          >
            Other Services
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Additional orthodontic services designed to support treatment
            outcomes, comfort, and long-term oral health.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
