'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Credentials and achievements
const credentials = [
  { label: 'Experience', value: '30+ Years' },
  { label: 'Education', value: 'DDS, UWO Ortho' },
  { label: 'Specialty', value: 'Orthodontics' },
  { label: 'Location', value: 'Langley, BC' },
];

// Memberships
const memberships = [
  'Pacific Coast Society of Orthodontists',
  'American Association of Orthodontists',
  'Canadian Association of Orthodontists',
  'World Federation of Orthodontists',
  'British Columbia Society of Orthodontists',
  'Fellow of the Canadian Society of Orthodontists',
];

// Areas of expertise
const expertiseGroups = [
  {
    title: 'Clinical Excellence',
    description: 'Achieving optimal functional and aesthetic results for every patient, transforming lives through precision orthodontic care.',
    points: ['Optimal Function', 'Aesthetic Results', 'Life-Changing Care'],
    icon: 'solar:shield-check-bold',
  },
  {
    title: 'Occlusion',
    description: 'Advanced training in occlusion from the Roth Williams Center, focusing on proper bite alignment and function.',
    points: ['Bite Alignment', 'Occlusion Specialist', 'Comprehensive Planning'],
    icon: 'solar:shield-check-bold',
  },
  {
    title: 'Advanced Technology',
    description: 'Staying at the forefront of scientifically proven and up-to-date treatments, technologies, and diagnoses.',
    points: ['Evidence-Based', 'Modern Technology', 'Highest Care Level'],
    icon: 'solar:shield-check-bold',
  },
];

// Patient testimonials
const testimonials = [
  {
    quote: "Our family has been seeing Dr. Cronin for over 30 years. He did my husband's braces when he was a child, and now 3 of our 6 kids have been patients. We truly can't say enough good things about our experience—consistent, caring, and always exceptional.",
    author: 'Krystle Harbridge',
    treatment: 'Family Care',
  },
  {
    quote: "Friendly staff and Dr. Cronin is a legend. We have had nothing but a positive experience and my daughter's smile is so beautiful now.",
    author: 'SarahDin78',
    treatment: 'Orthodontic Treatment',
  },
  {
    quote: "Dr. Cronin and staff have been great for my daughter. Their kindness and professionalism do not go unnoticed.",
    author: 'Chantelle Bianchin',
    treatment: 'Orthodontic Treatment',
  },
  {
    quote: "Wonderful orthodontist, Dr.Cronin and staff are amazing, patient and very kind. They have been helpful in making this process an easy and simple experience.",
    author: 'Jenifer LeBlanc',
    treatment: 'Orthodontic Treatment',
  },
  {
    quote: "Great experience, amazing with children, so knowledgeable and thorough. I went as a child & so did my husband and now my children are coming because I trust them and have had such a rewarding experience.",
    author: 'Vanessa Vandekerkhove',
    treatment: 'Multi-Generational Care',
  },
  {
    quote: "My daughter completed several years of orthodontic treatment with Dr. Cronin. The staff is friendly, professional, knowledgeable and caring. She was in great hands and now has a beautiful smile!",
    author: 'Caroline McMillan',
    treatment: 'Orthodontic Treatment',
  },
];

export default function DrCroninPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        
        {/* Content */}
        <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16 py-24 lg:py-32 text-center opacity-0 animate-fade-in-up">
          <div 
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
            <span className="text-white/90 text-sm font-medium">Specialist Orthodontist</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white mb-6">
            Meet Dr. D.G. Cronin
            <span className="block text-white/50">Transforming Smiles for 30+ Years</span>
          </h1>
          
          <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Dedicated to achieving most optimal functional and stable result.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" href="/contact#contact-form">
              Schedule a Consultation
            </Button>
            <Button variant="secondary" size="lg" href="#about">
              About Dr. Cronin
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
                  As an orthodontist, I strive to achieve most optimal functional and stable result for each of my patients. In doing so, I hope to change their lives for the better! I&apos;ve now practiced for more than 30 years and still look forward to the day before me: the people I&apos;ll interact with, the clinical challenges each presents, and how we will work together to achieve the smiles they desire.
                </p>
                <p>
                  At heart, I am a people-person and enjoy spending my days surrounded by diverse individuals. I like the enthusiasm and freshness of my younger patients as they grow into young adults, and I equally appreciate the excitement of my adult patients who are obtaining the beautiful, healthy smile they have long desired.
                </p>
                <p>
                  Seeing the positive changes in each individual&apos;s personality as their smile is transformed is deeply rewarding. It is a privilege to provide quality orthodontic care to Langley, Surrey, and Fraser Valley families.
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
                  src="/dr-cronin.jpg"
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

      {/* Education & Experience Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-white text-3xl lg:text-4xl font-semibold mb-8">Education & Training</h2>
              <div className="space-y-8">
                <div className="relative pl-8 border-l border-[#c9a962]/30">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-[#c9a962]" />
                  <h3 className="text-white text-xl font-medium mb-2">Doctorate of Dental Surgery (DDS)</h3>
                </div>
                <div className="relative pl-8 border-l border-[#c9a962]/30">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-[#c9a962]" />
                  <h3 className="text-white text-xl font-medium mb-2">School of Dental Therapy</h3>
                </div>
                <div className="relative pl-8 border-l border-[#c9a962]/30">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-[#c9a962]" />
                  <h3 className="text-white text-xl font-medium mb-2">Specialization in Orthodontics</h3>
                </div>
              </div>

              <h2 className="text-white text-3xl lg:text-4xl font-semibold mb-8 mt-16">Professional Memberships</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {memberships.map((membership, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <iconify-icon icon="solar:check-read-linear" width="20" height="20" className="text-[#c9a962] shrink-0" />
                    <span className="text-white/70 text-sm leading-tight">{membership}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-white text-3xl lg:text-4xl font-semibold mb-8">Beyond the Office</h2>
              <div className="space-y-6 text-white/60 text-base lg:text-lg leading-relaxed">
                <p>
                  I grew up in Southern Ontario and have resided in South Surrey for many years. My wife and I have four children, as well as four grandchildren. Most of my spare time is dedicated to being with family and friends.
                </p>
                <p>
                  I enjoy hiking, skiing, fishing, and traveling. I am also highly active in martial arts, practicing Tae-Kwando (4th Dan) and Hapkido (2nd degree).
                </p>
                <p>
                  My interests extend to the skies and seas—I am an amateur radio operator, and have been a pilot and a scuba diver!
                </p>
              </div>
              
              <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#c9a962]/20 to-transparent border border-[#c9a962]/20">
                <h3 className="text-white text-xl font-semibold mb-4">Continuing Education</h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  I attend specialist courses locally and internationally, including a comprehensive course in occlusion and facial aesthetics at the Roth Williams Center. I have also served as a clinical instructor at the UBC Dental School.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Unique Bento Grid */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a962]/[0.02] rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16 relative">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-4">
              Areas of Expertise
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Combining 30+ years of experience with modern, evidence-based orthodontic treatments.
            </p>
          </div>

          {/* Luxury Bento Layout */}
          <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
            
            {/* 1. Clinical Excellence - Big Card (Top Left) */}
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

            {/* 2. Aesthetics - Small Card (Top Right) */}
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

            {/* 3. Technology - Small Card (Bottom Left) */}
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

            {/* 4. Results - Big Card (Bottom Right) */}
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
            <Button variant="secondary" size="lg" href="/contact#contact-form">
              Discuss Your Treatment Options
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
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
        </div>

        {/* Infinite Marquee */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-6">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, idx) => (
              <div
                key={`first-${idx}`}
                className="shrink-0 w-[400px] p-8 rounded-3xl bg-white/[0.03] border border-white/5"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" width="18" height="18" className="text-[#c9a962]" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a962] to-[#d4b978] flex items-center justify-center text-[#0a0a0a] text-sm font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.author}</div>
                    <div className="text-white/50 text-xs">{testimonial.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, idx) => (
              <div
                key={`second-${idx}`}
                className="shrink-0 w-[400px] p-8 rounded-3xl bg-white/[0.03] border border-white/5"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" width="18" height="18" className="text-[#c9a962]" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a962] to-[#d4b978] flex items-center justify-center text-[#0a0a0a] text-sm font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.author}</div>
                    <div className="text-white/50 text-xs">{testimonial.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Info */}
            <div>
              <span className="text-[#c9a962] text-sm font-semibold tracking-wider uppercase mb-4 block">Get in Touch</span>
              <h2 className="text-white text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Ready to Get Started?
                <span className="text-white/50 block">We&apos;re Here to Help</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Schedule your free consultation today. We&apos;ll evaluate your orthodontic needs and create a personalized plan for your healthiest smile.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a href="tel:+16045331151" className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <iconify-icon icon="solar:phone-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="text-white font-medium">(604) 533-1151</div>
                    <div className="text-white/50 text-sm">Call us directly</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center">
                    <iconify-icon icon="solar:clock-circle-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Mon-Fri: 9am - 5pm</div>
                    <div className="text-white/50 text-sm">Office hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center">
                    <iconify-icon icon="solar:map-point-bold" width="24" height="24" className="text-[#c9a962]" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Langley, BC</div>
                    <div className="text-white/50 text-sm">Canada</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                <h3 className="text-white text-2xl font-semibold mb-6">Request Consultation</h3>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white/70 text-sm mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-white/70 text-sm mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors"
                      placeholder="(604) 533-1151"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/70 text-sm mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/70 text-sm mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors resize-none"
                    placeholder="Any concerns or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-[#0a0a0a] font-semibold rounded-full hover:bg-white/90 transition-colors"
                >
                  Request Consultation
                </button>

                <p className="text-white/40 text-xs text-center mt-4">
                  By submitting this form, you agree to our privacy policy. We&apos;ll contact you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
