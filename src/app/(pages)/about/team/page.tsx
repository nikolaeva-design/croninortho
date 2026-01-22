'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Team members data
const teamMembers = [
  {
    name: 'Michelle',
    role: 'Certified Orthodontic Assistant',
    years: 'Since 1998',
    image: '/MICHELLE.jpg',
    bio: 'Since joining in 2019, I\'ve loved working alongside Dr. Cronin and our amazing team. In the clinic, I assist with patient care and help patients stay motivated with their home care routines.',
    personal: null,
    featured: false,
  },
  {
    name: 'Catherine',
    role: 'Certified Orthodontic Assistant',
    years: 'Since 1985',
    image: '/CATHERINE.jpg',
    bio: 'With nearly 40 years in oral healthcare, I assist with bonding, archwires, and bracket removal. My favourite moment? Seeing patients\' excitement when they see their new smile for the first time!',
    personal: 'I treasure time with my spouse and two grown children, enjoy long walks, knitting, and hope to ski again soon.',
    featured: false,
  },
  {
    name: 'Jodie',
    role: 'CDA & Treatment Coordinator',
    years: 'Since 1999',
    image: '/JODIE.jpg',
    bio: 'Trained at VCC and UBC, I\'ve been part of the Cronin Ortho family since 2000. I assist with procedures and patient education—our team truly feels like my second family. Seeing how pleased everyone is with their new smiles is the best reward!',
    personal: null,
    featured: false,
  },
  {
    name: 'Vicky',
    role: 'Certified Orthodontic Assistant',
    years: null,
    image: '/VICKY.jpg',
    bio: 'I handle orthodontic records, assist with bonding procedures, archwire placement, and bracket removal, while providing patient instruction throughout the treatment journey.',
    personal: null,
    featured: false,
  },
  {
    name: 'Cheryl',
    role: 'Certified Orthodontic Assistant',
    years: 'Since 1996',
    image: '/CHERYL.jpg',
    bio: 'Certified since 1996 with ortho and receptionist credentials, I joined the team in 2019. I provide chairside assistance and patient education—making young patients and teenagers feel comfortable throughout treatment keeps me smiling!',
    personal: 'Happily married with three sons. Proud hockey mom who loves cooking, walking our dog Gabi, and family movie nights.',
    featured: false,
  },
  {
    name: 'Natasha',
    role: 'Administrative Assistant',
    years: 'Since 2016',
    image: '/NATASHA.jpg',
    bio: 'I joined Cronin Ortho in 2021 and love being part of this experienced, friendly team. I schedule appointments and coordinate insurance—little wins like finding the perfect time slot for busy families make a real difference!',
    personal: 'My husband and I have two dogs. We love traveling to sunny destinations, camping, hiking, and family time.',
    featured: false,
  },
  {
    name: 'Shel',
    role: 'Administrative Assistant',
    years: 'Since 2021',
    image: '/SHEL.jpg',
    bio: 'I started my dental career at Cronin Ortho and love the warm, supportive team here. I handle scheduling, insurance, and love jumping in wherever needed. My favourite moment is seeing patients\' smiles when braces come off!',
    personal: 'I enjoy camping, hiking, board games, and video games. My pets Zeus (dog) and Nyx (cat) keep me busy!',
    featured: false,
  },
  {
    name: 'Sehar',
    role: 'Administrative Assistant',
    years: null,
    image: '/SEHAR.jpg',
    bio: 'I help keep our front desk running smoothly, ensuring patients have a welcoming experience from the moment they arrive.',
    personal: null,
    featured: false,
  },
  {
    name: 'Crystal',
    role: 'Certified Orthodontic Assistant',
    years: 'Since 1996',
    image: '/CRYSTAL.jpg',
    bio: 'With experience as both receptionist and chairside assistant since 1996, I\'ve been with this wonderful team since 2000. I assist Dr. Cronin and coordinate with referring doctors. Watching patients\' confidence grow throughout treatment is incredibly rewarding!',
    personal: 'I spend my time with my spouse, three kids, our dog, and chickens. I love outdoor activities and watching my kids play sports.',
    featured: false,
  },
  {
    name: 'Chelsey',
    role: 'Certified Dental Assistant',
    years: null,
    image: '/CHELSEY.jpg',
    bio: 'I take orthodontic records and assist with Invisalign checkups and retention appointments, providing patient instruction along the way.',
    personal: null,
    featured: false,
  },
  {
    name: 'Nasim',
    role: 'Certified Orthodontic Assistant',
    years: null,
    image: '/NASIM.jpg',
    bio: 'I provide skilled chairside assistance and patient care, helping ensure every visit is comfortable and efficient.',
    personal: null,
    featured: false,
  },
  {
    name: 'Alyssa',
    role: 'Certified Orthodontic Assistant',
    years: null,
    image: '/ALYSSA.jpg',
    bio: 'I assist with patient care and orthodontic procedures, ensuring every visit is comfortable and efficient.',
    personal: null,
    featured: false,
  },
];

export default function TeamPage() {
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
            <span className="text-white/90 text-sm font-medium">Our Amazing Team</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white mb-6">
            Meet the Team
            <span className="block text-white/50">Behind Your Smile</span>
          </h1>
          
          <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Skilled, experienced professionals who love what they do and value our patients, always putting your health, comfort, and wellbeing first.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" href="#team">
              Meet Everyone
            </Button>
            <Button variant="secondary" size="lg" href="/about/dr-cronin">
              Meet Dr. Cronin
            </Button>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Quote Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <iconify-icon icon="solar:quote-up-square-bold" width="48" height="48" className="text-[#c9a962]/40 mb-8" />
            
            <p className="text-white/80 text-xl lg:text-2xl leading-relaxed mb-6">
              Our team is truly incredible and, in many ways, is the reason behind the success of this practice and the smiles on our patients&apos; faces!
            </p>
            
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-6">
              Our team members are skilled and experienced people who love what they do and value our patients, always putting each patient&apos;s health, comfort, and wellbeing at the forefront. They are a team that supports and encourages one another and cares deeply about the quality of work that is provided.
            </p>
            
            <p className="text-white/80 text-xl lg:text-2xl leading-relaxed italic mb-8">
              I could not be prouder to work alongside these amazingly talented and caring individuals!
            </p>
            
            <p className="text-[#c9a962] text-lg font-semibold">
              ~ Dr. Cronin & Dr. Mo
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section id="team" className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a962]/[0.02] rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16 relative">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-[#c9a962] text-sm font-medium uppercase tracking-wider mb-4 block">
              The People Who Make It Happen
            </span>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-4">
              Our Team Members
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Dedicated professionals committed to providing you with the best orthodontic experience.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group relative rounded-3xl overflow-hidden transition-all duration-500 bg-white/[0.03] border border-white/5 hover:border-[#c9a962]/40 hover:bg-[#c9a962]/[0.05]"
              >
                {/* Image Placeholder or Actual Image */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-[center_25%]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-3 bg-gradient-to-br from-[#c9a962]/30 to-[#c9a962]/10 text-[#c9a962]">
                        {member.name.charAt(0)}
                      </div>
                      <p className="text-white/20 text-xs">Photo coming soon</p>
                    </div>
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  {/* Name & Role */}
                  <h3 className="text-white text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#c9a962] text-sm font-medium mb-2">{member.role}</p>
                  {member.years && (
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-4">{member.years}</p>
                  )}
                  
                  {/* Bio */}
                  {member.comingSoon && !member.bio ? (
                    <p className="text-white/40 text-sm italic">Full bio coming soon...</p>
                  ) : (
                    <>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      {member.personal && (
                        <p className="text-white/40 text-sm leading-relaxed">
                          {member.personal}
                        </p>
                      )}
                      {member.comingSoon && (
                        <p className="text-white/30 text-xs italic mt-3">Full bio coming soon...</p>
                      )}
                    </>
                  )}
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
              Ready to Start Your
              <span className="text-[#c9a962]"> Smile Journey?</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Our team is here to welcome you and provide the personalized, caring orthodontic experience you deserve. Schedule your consultation today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" href="/#contact">
                Schedule a Consultation
              </Button>
              <Button variant="secondary" size="lg" href="/about/dr-mo">
                Meet Dr. Mo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
