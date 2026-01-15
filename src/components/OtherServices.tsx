'use client';

import React from 'react';

const services = [
  {
    id: 'retainers',
    title: 'Retainers',
    description: 'Retainers are used after orthodontic treatment to help maintain the final position of the teeth and preserve long-term results.',
    image: '/retainer.png',
  },
  {
    id: 'nightguards',
    title: 'Nightguards',
    description: 'Nightguards help protect teeth and reduce stress on the jaw during sleep, particularly for patients who grind or clench their teeth.',
    image: '/nightguard.png',
  },
  {
    id: 'splints',
    title: 'Splints',
    description: 'Splints are therapeutic appliances used to support jaw alignment and manage bite-related discomfort.',
    image: '/splint.png',
  },
];

export default function OtherServices() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header - Centered */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            Other Services
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Additional orthodontic services designed to support treatment outcomes, comfort, and long-term oral health.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div key={service.id} className="group">
              {/* Image Card */}
              <div className="relative aspect-[3/4] mb-6 rounded-2xl lg:rounded-3xl overflow-hidden bg-black">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
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
              >
                Learn More
                <iconify-icon 
                  icon="solar:arrow-right-linear" 
                  width="16" 
                  height="16" 
                  className="transition-transform group-hover/link:translate-x-1" 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
