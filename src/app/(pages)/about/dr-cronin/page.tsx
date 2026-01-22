'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Credentials and achievements
const credentials = [
  { label: 'Education', value: 'BDS, MOrth' },
  { label: 'Experience', value: '15+ Years' },
  { label: 'Specialty', value: 'Orthodontics' },
  { label: 'Patients', value: '5,000+' },
];

// Areas of expertise - rewritten for a professional and official tone
const expertiseGroups = [
  {
    title: 'Advanced Fixed Systems',
    description: 'Expertise in high-precision fixed appliance systems, providing comprehensive alignment for complex functional and aesthetic cases.',
    points: ['Precision Brackets', 'Discreet Ceramic Options', 'Efficient Tooth Movement'],
    icon: 'solar:shield-check-bold',
  },
  {
    title: 'Pediatric Orthodontics',
    description: 'Specialized care for children and adolescents, focusing on growth modification and early intervention for optimal long-term results.',
    points: ['Growth Modification', 'Phase 1 Intervention', 'Preventative Care'],
    icon: 'solar:users-group-rounded-bold',
  },
  {
    title: 'Digital Treatment Design',
    description: 'Utilizing state-of-the-art diagnostic imaging and 3D planning to ensure accurate diagnostics and predictable clinical outcomes.',
    points: ['3D Case Analysis', 'Virtual Simulations', 'Bespoke Planning'],
    icon: 'solar:cpu-bolt-bold',
  },
];

// Patient testimonials
const testimonials = [
  {
    quote: "Dr. Cronin's expertise is evident from the first consultation. He explained every step of my daughter's treatment clearly and the results are simply outstanding.",
    author: 'Liam Byrne',
    treatment: 'Fixed Braces',
    rating: 5,
  },
  {
    quote: "Highly professional and meticulous. Dr. Cronin transformed my smile with ceramic braces, and I couldn't be happier with the professional care I received.",
    author: 'Siobhan Walsh',
    treatment: 'Ceramic Braces',
    rating: 5,
  },
  {
    quote: "A true specialist. Dr. Cronin's attention to detail and calm demeanor made my orthodontic journey a very positive experience. I highly recommend him.",
    author: 'David O\'Reilly',
    treatment: 'Fixed Braces',
    rating: 5,
  },
];

export default function DrCroninPage() {
  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px),
                             linear-gradient(180deg, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Content */}
        <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16 py-24 lg:py-32 text-center opacity-0 animate-fade-in-up">
          <div 
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
            <span className="text-white/90 text-sm font-medium">Expert Specialist Orthodontist</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white mb-6">
            Precision Orthodontics
            <span className="block text-white/50">for All Ages with Dr. Cronin</span>
          </h1>
          
          <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            With over 15 years of specialized expertise in fixed appliance systems and pediatric care, Dr. D.G. Cronin is dedicated to building healthy, confident smiles that last a lifetime.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" href="#contact">
              Schedule a Consultation
            </Button>
            <Button variant="secondary" size="lg" href="#about">
              About Dr. D.G. Cronin
            </Button>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* About Doctor Section */}
      <section id="about" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="opacity-0 animate-fade-in-left" style={{ animationFillMode: 'forwards' }}>
              <span className="text-[#c9a962] text-sm font-medium uppercase tracking-wider mb-4 block">
                The Specialist
              </span>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
                Dr. D.G. Cronin
                <span className="block text-white/50 text-3xl lg:text-4xl mt-2">Specialist Orthodontist</span>
              </h2>
              
              <div className="space-y-6 text-white/60 text-base lg:text-lg leading-relaxed">
                <p>
                  Dr. D.G. Cronin is a highly regarded specialist orthodontist with a career dedicated to achieving clinical excellence and transformative smile results. With a reputation built on precision and evidence-based care, he has successfully managed thousands of orthodontic cases across Ireland.
                </p>
                <p>
                  Specializing in advanced fixed appliance systems and pediatric orthodontics, Dr. Cronin stays at the forefront of the field. His clinical approach integrates state-of-the-art diagnostic tools with personalized treatment planning to ensure optimal functional and aesthetic outcomes for every patient.
                </p>
                <p>
                  Dr. Cronin believes that a healthy smile is the foundation of confidence. By combining extensive clinical experience with a meticulous attention to detail, he ensures that every patient's orthodontic journey is professional, efficient, and tailored to their specific needs.
                </p>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                {credentials.map((cred, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-center min-h-[88px] hover:bg-white/[0.06] transition-colors duration-300"
                  >
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{cred.label}</p>
                    <p className="text-white font-semibold text-lg">{cred.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative opacity-0 animate-fade-in-right" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-white/10 group shadow-2xl">
                <Image 
                  src="/DR. CRONIN.jpg"
                  alt="Dr. D.G. Cronin"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-[#c9a962] text-[#0a0a0a] shadow-[0_20px_50px_rgba(201,169,98,0.3)] z-10 animate-bounce-subtle">
                <iconify-icon icon="solar:verified-check-bold" width="32" height="32" />
                <p className="text-sm font-bold mt-1">Specialist Orthodontist</p>
              </div>
              
              {/* Decorative background glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#c9a962]/10 rounded-full blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Unique Bento Grid */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a962]/[0.02] rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16 relative">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-4">
              Areas of Expertise
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Specialized training and dedication to excellence in every aspect of orthodontic care.
            </p>
          </div>

          {/* Luxury Bento Layout */}
          <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
            
            {/* 1. Braces - Big Card (Top Left) */}
            <div className="lg:col-span-8 group">
              <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 p-8 lg:p-12 flex flex-col justify-between hover:bg-white/[0.05] transition-all duration-500">
                <div className="relative z-10 max-w-xl">
                  <iconify-icon icon={expertiseGroups[0].icon} width="32" height="32" className="text-[#c9a962] mb-8 block" />
                  <h3 className="text-white text-3xl lg:text-4xl font-semibold mb-6">{expertiseGroups[0].title}</h3>
                  <p className="text-white/50 text-lg leading-relaxed">{expertiseGroups[0].description}</p>
                </div>
                
                <div className="relative z-10 flex flex-wrap gap-6 mt-12">
                  {expertiseGroups[0].points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a962]" />
                      <span className="text-white/80 font-medium tracking-wide uppercase text-xs">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a962]/10 blur-[100px] pointer-events-none group-hover:bg-[#c9a962]/15 transition-all duration-700" />
              </div>
            </div>

            {/* 2. Pediatric - Small Card (Top Right) */}
            <div className="lg:col-span-4">
              <div className="relative h-full min-h-[400px] rounded-3xl bg-[#141414] border border-white/5 p-8 flex flex-col justify-between hover:border-[#c9a962]/30 transition-all duration-500">
                <div>
                  <iconify-icon icon={expertiseGroups[1].icon} width="28" height="28" className="text-[#c9a962] mb-8 block" />
                  <h3 className="text-white text-2xl font-semibold mb-4">{expertiseGroups[1].title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{expertiseGroups[1].description}</p>
                </div>
                <div className="space-y-3 mt-8">
                  {expertiseGroups[1].points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#c9a962] text-[10px]">●</span>
                      <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Digital - Small Card (Bottom Left) */}
            <div className="lg:col-span-4 order-last lg:order-none">
              <div className="relative h-full min-h-[400px] rounded-3xl bg-[#141414] border border-white/5 p-8 flex flex-col justify-between hover:border-[#c9a962]/30 transition-all duration-500">
                <div>
                  <iconify-icon icon={expertiseGroups[2].icon} width="28" height="28" className="text-[#c9a962] mb-8 block" />
                  <h3 className="text-white text-2xl font-semibold mb-4">{expertiseGroups[2].title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{expertiseGroups[2].description}</p>
                </div>
                <div className="space-y-3 mt-8">
                  {expertiseGroups[2].points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#c9a962] text-[10px]">●</span>
                      <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Beautiful Results - Big Card (Bottom Right) */}
            <div className="lg:col-span-8 group h-[400px] lg:h-auto">
              <div className="relative h-full rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/kids-ortho.png"
                  alt="Beautiful orthodontic result"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <span className="text-[#c9a962] text-xs font-bold uppercase tracking-[0.3em] mb-2 block">Clinical Results</span>
                  <h3 className="text-white text-3xl font-semibold tracking-tight">Precision results at every age.</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Section CTA */}
          <div className="mt-12 lg:mt-16 flex justify-center">
            <Button variant="secondary" size="lg" href="#contact">
              Discuss Your Treatment Options
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-[#c9a962] text-sm font-medium uppercase tracking-wider mb-4 block">
              Patient Stories
            </span>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-4">
              What Patients Say
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Real stories from real patients who trusted Dr. Cronin with their smiles.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" width="20" height="20" className="text-[#c9a962]" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-white/70 text-base leading-relaxed mb-8 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a962] to-[#d4b978] flex items-center justify-center text-[#0a0a0a] font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-white/40 text-sm">{testimonial.treatment} Patient</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Contact Info */}
            <div>
              <span className="text-[#c9a962] text-sm font-medium uppercase tracking-wider mb-4 block">
                Get in Touch
              </span>
              <h2 className="text-white text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
                Contact Us
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
                Ready to start your smile journey? Schedule a consultation with Dr. Cronin and discover how we can help you achieve the smile you&apos;ve always wanted.
              </p>

              <div className="space-y-6">
                <a href="mailto:hello@croninorthodontics.ie" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#c9a962]/20 transition-all duration-300 shadow-lg shadow-[#c9a962]/5">
                    <iconify-icon icon="solar:letter-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-medium">Email Address</p>
                    <p className="text-white font-semibold">hello@croninorthodontics.ie</p>
                  </div>
                </a>

                <a href="tel:+35312345678" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#c9a962]/20 transition-all duration-300 shadow-lg shadow-[#c9a962]/5">
                    <iconify-icon icon="solar:phone-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-medium">Direct Line</p>
                    <p className="text-white font-semibold">+353 (1) 234 5678</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#c9a962]/5">
                    <iconify-icon icon="solar:map-point-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm font-medium">Clinic Location</p>
                    <p className="text-white font-semibold">24 Harcourt Street, Dublin 2, Ireland</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Map Placeholder */}
            <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden glass group shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center group-hover:scale-110 transition-transform duration-700">
                  <iconify-icon icon="solar:map-point-wave-bold" width="64" height="64" className="text-[#c9a962]/40" />
                  <p className="text-white/30 mt-4 font-medium tracking-wide uppercase text-xs">View Map Location</p>
                </div>
              </div>
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a962]/5 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
