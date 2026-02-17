'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Credentials and achievements
const credentials = [
  { label: 'Education', value: 'BDS, MSc' },
  { label: 'Training', value: 'UBC Ortho' },
  { label: 'Specialty', value: 'Orthodontics' },
  { label: 'Location', value: 'Langley, BC' },
];

// Memberships
const memberships = [
  'Pacific Coast Society of Orthodontists',
  'American Association of Orthodontists',
  'Canadian Association of Orthodontists',
  'British Columbia Society of Orthodontists',
  'Fellow of the Royal College of Dentist Canada',
];

// Expertise groups for Dr. Mo
const expertiseGroups = [
  {
    title: 'Clinical Excellence',
    description: 'Achieving optimal functional and aesthetic results for every patient, transforming lives through precision orthodontic care.',
    points: ['Optimal Function', 'Aesthetic Results', 'Life-Changing Care'],
    icon: 'solar:shield-check-bold',
  },
  {
    title: 'Aesthetics',
    description: 'Creating beautiful, harmonious smiles that complement facial features through digital smile design and precision planning.',
    points: ['Smile Design', 'Facial Harmony', 'Natural Beauty'],
    icon: 'solar:shield-check-bold',
  },
  {
    title: 'Occlusion',
    description: 'Advanced training in occlusion focusing on proper bite alignment, function, and long-term stability.',
    points: ['Bite Alignment', 'Functional Occlusion', 'Stability Focus'],
    icon: 'solar:shield-check-bold',
  },
  {
    title: 'Advanced Technology',
    description: 'Integrating advanced digital techniques to create individualized treatment plans with precise, need-based results.',
    points: ['Digital Planning', 'Modern Technology', 'Precision Care'],
    icon: 'solar:shield-check-bold',
  },
];

// Patient testimonials
const testimonials = [
  {
    quote: "Super helpful, and friendly staff. Dr. Mo really takes the time to explain his plan and vision for your future smile. I 100% recommend the team at Cronin Ortho!",
    author: 'J Percy',
    treatment: 'Consultation',
  },
  {
    quote: "We're just beginning our journey with Dr. Mo and so far are really happy with the service! Looking forward to making that movie star smile a reality for our little one!",
    author: 'Andrea Petkau',
    treatment: 'Early Treatment',
  },
  {
    quote: "Both my boys see Cronin and now Mo. We have had the absolute best experience here so far. The staff and orthodontists are amazing. Even with my sensory kiddo who struggles with things being done in his mouth.",
    author: 'Tamara C',
    treatment: 'Orthodontic Treatment',
  },
  {
    quote: "Dr Mo has always been kind and welcoming to our daughter. She always leaves the office with a smile!",
    author: 'Tony Ma',
    treatment: 'Orthodontic Treatment',
  },
  {
    quote: "Dr. Cronin and Dr. Sarfaz have been incredible to work with! Their staff is super kind and extremely flexible with some of those last minute check ins!",
    author: 'Kara Geransky',
    treatment: 'Orthodontic Treatment',
  },
  {
    quote: "I had an amazing experience at this dentist, I would recommend it to everyone. They were so sweet and nice. They are really good at their work and every person that works there is so nice.",
    author: 'Eyleen Hasenhütl',
    treatment: 'Orthodontic Treatment',
  },
];

export default function DrMoPage() {
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
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9a962]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#c9a962]/5 rounded-full blur-[120px]" />
        </div>
        
        {/* Content */}
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40 w-full text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 mb-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a962] animate-pulse-glow" />
            <span className="text-white/90 text-sm font-medium">Specialist Orthodontist</span>
          </div>
          
          {/* Title */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="text-white">Meet Dr. Mo </span>
            <span className="text-white/50">Reimagining Orthodontics</span>
          </h1>
          
          {/* Description */}
          <p 
            className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Here at Cronin Ortho, we combine advanced digital techniques with personalized care.
          </p>
          
          {/* CTA */}
          <div 
            className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <Button variant="primary" size="lg" href="/contact#contact-form">
              Schedule a Consultation
            </Button>
            <Button variant="secondary" size="lg" href="#about">
              Learn More
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
                Dr. Mohymen Sarfraz
                <span className="block text-white/50 text-3xl lg:text-4xl mt-2">(Dr. Mo)</span>
              </h2>
              
              <div className="space-y-6 text-white/60 text-base lg:text-lg leading-relaxed">
                <p>
                  As an orthodontist, my primary focus is on aesthetics, functionality, and long-term stability. At Cronin Ortho, our patients are at the heart of everything we do. I take pride in building personal connections with everyone, ensuring that their orthodontic care is tailored specifically to their unique needs.
                </p>
                <p>
                  Every treatment plan is customized to address each patient’s concerns, which is one of the most rewarding aspects of my role. My mission is to reimagine orthodontics by integrating advanced digital techniques, allowing us to create individualized treatment plans that deliver precise, need-based results.
                </p>
                <p>
                  To stay at the forefront of modern technology, I actively participate in various study clubs and organizations to enhance my continuing education and keep up with the latest advancements in orthodontics.
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
                  src="/dr-mo-portrait.jpeg"
                  alt="Dr. Mohymen Sarfraz (Dr. Mo)"
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
                  <h3 className="text-white text-xl font-medium mb-2">Bachelor's Degree in Dentistry</h3>
                </div>
                <div className="relative pl-8 border-l border-[#c9a962]/30">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-[#c9a962]" />
                  <h3 className="text-white text-xl font-medium mb-2">Master's in Oral and Maxillofacial Pathology</h3>
                </div>
                <div className="relative pl-8 border-l border-[#c9a962]/30">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-[#c9a962]" />
                  <h3 className="text-white text-xl font-medium mb-2">Masters in Craniofacial Orthodontics and Diploma in Orthodontics</h3>
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
              <h2 className="text-white text-3xl lg:text-4xl font-semibold mb-8">Experience & Personal Life</h2>
              <div className="space-y-6 text-white/60 text-base lg:text-lg leading-relaxed">
                <p>
                  After practicing as a general practitioner for eight years, I pursued specialized orthodontic training at UBC. Since graduating, I&apos;ve had the privilege of working in Downtown Vancouver and East Kootenays, and I&apos;m now proud to call Langley my home and main office.
                </p>
                <p>
                  In my free time, I love engaging in various health-focused activities like running, working out, and exploring the stunning beauty of British Columbia. Recently, I tried car camping, and it turned out to be an absolute blast!
                </p>
                <p>
                  Traveling is next on my list—I have a long list of countries I&apos;d love to explore and cannot wait to find the time for those adventures.
                </p>
              </div>
              
              <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#c9a962]/20 to-transparent border border-[#c9a962]/20">
                <h3 className="text-white text-xl font-semibold mb-4">Questions or want to connect?</h3>
                <p className="text-white/60 mb-6">Reach out to Dr. Mo directly at:</p>
                <a 
                  href="mailto:drmo@croninortho.com" 
                  className="inline-flex items-center gap-3 text-[#c9a962] text-xl font-semibold hover:text-white transition-colors"
                >
                  <iconify-icon icon="solar:letter-bold" width="24" height="24" />
                  drmo@croninortho.com
                </a>
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
              Combining experience with modern, evidence-based orthodontic treatments.
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

            {/* 2. Aesthetics - Small Card (Top Right) - Dr. Mo's primary focus */}
            <div className="lg:col-span-4">
              <div className="relative h-full min-h-[400px] rounded-3xl bg-gradient-to-br from-[#c9a962]/10 to-transparent border border-[#c9a962]/30 p-8 flex flex-col justify-between hover:border-[#c9a962]/50 transition-all duration-500">
                <div>
                  <iconify-icon icon={expertiseGroups[1].icon} width="28" height="28" className="text-[#c9a962] mb-8 block" />
                  <h3 className="text-white text-2xl font-semibold mb-4">{expertiseGroups[1].title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{expertiseGroups[1].description}</p>
                </div>
                <div className="space-y-3 mt-8">
                  {expertiseGroups[1].points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#c9a962] text-[10px]">●</span>
                      <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Occlusion - Small Card (Bottom Left) */}
            <div className="lg:col-span-4">
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

            {/* 4. Advanced Technology - Small Card (Bottom Middle) */}
            <div className="lg:col-span-4">
              <div className="relative h-full min-h-[400px] rounded-3xl bg-[#141414] border border-white/5 p-8 flex flex-col justify-between hover:border-[#c9a962]/30 transition-all duration-500">
                <div>
                  <iconify-icon icon={expertiseGroups[3].icon} width="28" height="28" className="text-[#c9a962] mb-8 block" />
                  <h3 className="text-white text-2xl font-semibold mb-4">{expertiseGroups[3].title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{expertiseGroups[3].description}</p>
                </div>
                <div className="space-y-3 mt-8">
                  {expertiseGroups[3].points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#c9a962] text-[10px]">●</span>
                      <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Results - Big Card (Bottom Right) */}
            <div className="lg:col-span-4 group h-[400px]">
              <div className="relative h-full rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/cta-consultation-bg.png"
                  alt="Beautiful orthodontic result"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-6 right-6">
                  <span className="text-[#c9a962] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">Results</span>
                  <h3 className="text-white text-xl font-semibold tracking-tight">Precision at every age</h3>
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
              Real stories from real patients who trusted Dr. Mo with their smiles.
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
                className="shrink-0 w-[400px] p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col h-[280px]"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" width="18" height="18" className="text-[#c9a962]" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Author - Always at bottom */}
                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/5">
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
                className="shrink-0 w-[400px] p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col h-[280px]"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" width="18" height="18" className="text-[#c9a962]" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Author - Always at bottom */}
                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-white/5">
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
