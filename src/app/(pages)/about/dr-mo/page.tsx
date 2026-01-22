'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Credentials and achievements
const credentials = [
  { label: 'Education', value: 'BDS, MOrth RCS' },
  { label: 'Experience', value: '15+ Years' },
  { label: 'Specialty', value: 'Orthodontics' },
  { label: 'Patients Treated', value: '5,000+' },
];

// Areas of expertise
const expertise = [
  {
    title: 'Invisalign Expert',
    description: 'Diamond Invisalign provider with extensive experience in clear aligner therapy.',
    icon: 'solar:star-bold',
  },
  {
    title: 'Complex Cases',
    description: 'Specialized in treating complex orthodontic cases requiring multidisciplinary approach.',
    icon: 'solar:health-bold',
  },
  {
    title: 'Digital Orthodontics',
    description: 'Utilizing cutting-edge 3D imaging and digital treatment planning technology.',
    icon: 'solar:cpu-bolt-bold',
  },
];

// Philosophy points
const philosophy = [
  'Patient-centered care focusing on individual needs and goals',
  'Evidence-based treatment planning for optimal results',
  'Continuous education to stay at the forefront of orthodontics',
  'Creating a comfortable and welcoming environment for all patients',
];

export default function DrMoPage() {
  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px),
                             linear-gradient(180deg, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Content */}
        <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16 py-24 lg:py-32 text-center">
          <div 
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
            <span className="text-white/90 text-sm font-medium">Meet Our Orthodontist</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white mb-6">
            Dedicated to Creating
            <span className="block text-white/50">Beautiful Smiles</span>
          </h1>
          
          <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            With over 15 years of experience, Dr. Mo brings expertise, compassion, and cutting-edge technology to every patient&apos;s orthodontic journey.
          </p>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <span className="text-[#c9a962] text-sm font-medium uppercase tracking-wider mb-4 block">
                About
              </span>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
                Dr. M. Sarfraz
                <span className="block text-white/50 text-3xl lg:text-4xl mt-2">&quot;Dr. Mo&quot;</span>
              </h2>
              
              <div className="space-y-6 text-white/60 text-base lg:text-lg leading-relaxed">
                <p>
                  Dr. M. Sarfraz, affectionately known as Dr. Mo, is a highly skilled orthodontist with a passion for transforming smiles and improving lives. His journey in orthodontics began with a simple belief: everyone deserves a confident, healthy smile.
                </p>
                <p>
                  After completing his dental degree with honors, Dr. Mo pursued specialized training in orthodontics, earning his Master of Orthodontics from the Royal College of Surgeons. His commitment to excellence has made him a Diamond Invisalign provider and a trusted name in orthodontic care.
                </p>
                <p>
                  Beyond his technical expertise, Dr. Mo is known for his warm, approachable demeanor and his ability to make patients of all ages feel comfortable and cared for. He believes that orthodontic treatment should be a positive experience, and he works tirelessly to ensure every patient feels heard and valued.
                </p>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                {credentials.map((cred, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/5"
                  >
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{cred.label}</p>
                    <p className="text-white font-semibold">{cred.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10">
                {/* Placeholder for doctor image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <iconify-icon 
                      icon="solar:user-circle-bold" 
                      width="120" 
                      height="120" 
                      className="text-white/20"
                    />
                    <p className="text-white/30 mt-4">Dr. Mo Photo</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#c9a962]/20 rounded-full blur-[80px]" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-[#c9a962] text-[#0a0a0a]">
                <iconify-icon icon="solar:verified-check-bold" width="32" height="32" />
                <p className="text-sm font-semibold mt-1">Diamond Provider</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Bento Grid */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
              Areas of Expertise
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Dr. Mo&apos;s specialized training and continuous education ensure patients receive the highest standard of care.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
            
            {/* Large Card - Invisalign */}
            <div className="lg:col-span-8 group">
              <div className="relative h-[350px] lg:h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#081422] border border-white/5">
                <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#c9a962]/10 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a962]/20 border border-[#c9a962]/30 flex items-center justify-center">
                      <iconify-icon icon="solar:star-bold" width="24" height="24" className="text-[#c9a962]" />
                    </div>
                    <span className="text-[#c9a962] text-sm font-medium uppercase tracking-wider">Featured</span>
                  </div>
                  
                  <h3 className="text-white text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
                    Invisalign Diamond Provider
                  </h3>
                  <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-lg mb-6">
                    As a Diamond Invisalign provider, Dr. Mo has successfully treated thousands of patients with clear aligner therapy, achieving exceptional results for both simple and complex cases.
                  </p>
                  <Button variant="secondary" size="md" href="#contact">
                    Learn About Invisalign
                  </Button>
                </div>
              </div>
            </div>

            {/* Side Card - Education */}
            <div className="lg:col-span-4 group">
              <div className="relative h-[350px] lg:h-[400px] rounded-3xl overflow-hidden bg-[#1a1a1a] border border-white/5 p-8">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <iconify-icon icon="solar:diploma-bold" width="24" height="24" className="text-white" />
                </div>
                
                <h3 className="text-white text-2xl font-semibold tracking-tight mb-4">
                  Education & Training
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962] mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">BDS with Honors</p>
                      <p className="text-white/40 text-sm">Dental Surgery</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962] mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">MOrth RCS</p>
                      <p className="text-white/40 text-sm">Royal College of Surgeons</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962] mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Invisalign Certification</p>
                      <p className="text-white/40 text-sm">Diamond Provider Status</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Row - 3 Cards */}
            {expertise.map((item, index) => (
              <div key={index} className="lg:col-span-4 group">
                <div className="relative h-[280px] rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-[#c9a962]/30 transition-colors p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center mb-6">
                    <iconify-icon icon={item.icon} width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  
                  <h3 className="text-white text-xl font-semibold tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 flex items-center justify-center">
                  <iconify-icon icon="solar:gallery-bold" width="48" height="48" className="text-white/20" />
                </div>
                <div className="aspect-square rounded-2xl bg-[#c9a962]/20 border border-[#c9a962]/30 flex items-center justify-center">
                  <iconify-icon icon="solar:heart-pulse-bold" width="48" height="48" className="text-[#c9a962]" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 flex items-center justify-center">
                  <iconify-icon icon="solar:gallery-bold" width="48" height="48" className="text-white/20" />
                </div>
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 flex items-center justify-center">
                  <iconify-icon icon="solar:gallery-bold" width="48" height="48" className="text-white/20" />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <span className="text-[#c9a962] text-sm font-medium uppercase tracking-wider mb-4 block">
                Philosophy
              </span>
              <h2 className="text-white text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-8">
                My Approach to
                <span className="block text-white/50">Patient Care</span>
              </h2>
              
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Every smile tells a story, and Dr. Mo believes in taking the time to understand each patient&apos;s unique needs, concerns, and goals. His patient-first philosophy guides every treatment decision.
              </p>

              <ul className="space-y-4 mb-10">
                {philosophy.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full bg-[#c9a962]/20 border border-[#c9a962]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <iconify-icon icon="solar:check-circle-bold" width="14" height="14" className="text-[#c9a962]" />
                    </span>
                    <p className="text-white/70">{point}</p>
                  </li>
                ))}
              </ul>

              <Button variant="primary" size="lg" href="#contact">
                Book a Consultation with Dr. Mo
              </Button>
            </div>
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
                Ready to start your smile journey? Schedule a consultation with Dr. Mo and discover how we can help you achieve the smile you&apos;ve always wanted.
              </p>

              <div className="space-y-6">
                <a href="mailto:info@croninortho.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <iconify-icon icon="solar:letter-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm">Email</p>
                    <p className="text-white font-medium">info@croninortho.com</p>
                  </div>
                </a>

                <a href="tel:+1234567890" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <iconify-icon icon="solar:phone-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm">Phone</p>
                    <p className="text-white font-medium">(123) 456-7890</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center">
                    <iconify-icon icon="solar:map-point-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm">Office</p>
                    <p className="text-white font-medium">123 Smile Street, Dublin, Ireland</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Map Placeholder */}
            <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <iconify-icon icon="solar:map-point-wave-bold" width="64" height="64" className="text-[#c9a962]/50" />
                  <p className="text-white/30 mt-4">Map Location</p>
                </div>
              </div>
              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
