'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Team members data - ordered as requested
const teamMembers = [
  {
    name: 'Jodie',
    role: 'CDA & Treatment Coordinator',
    years: 'Since 2000',
    image: '/team-jodie.jpg',
    bio: 'I have been a proud member of the Cronin Orthodontics team since 2000. My connection to orthodontics began much earlier, as I was a patient in our office from the age of seven. That early experience sparked a lasting interest in the field and helped shape my career path. Today, I enjoy educating patients about their orthodontic treatment options and guiding them through each step of their treatment journey as a treatment coordinator. Working with patients and families over the years has been both personally fulfilling and professionally rewarding.',
    personal: null,
    featured: false,
  },
  {
    name: 'Alyssa',
    role: 'Treatment Coordinator',
    years: null,
    image: '/team-alyssa.jpg',
    bio: 'I began my dental career over 10 years ago, with the past three years dedicated exclusively to Orthodontics - an area that has truly become my passion. I enjoy the art of treatment planning, educating patients on the life-changing benefits of orthodontic care, and helping them feel confident throughout their treatment journey. Building genuine connections with our lovely patients and this amazing dental team is one of the most rewarding parts of my role.',
    personal: 'Outside of work, I value spending quality time with friends and family while maintaining a healthy balance between work and fun.',
    featured: false,
  },
  {
    name: 'Natasha',
    role: 'Administrative Assistant',
    years: 'Since 2016',
    image: '/team-natasha.jpg',
    bio: 'I have been an orthodontic administrative assistant since 2016, and I was fortunate to join Cronin Ortho in 2021. I work hard to create a welcoming & worry-free experience, whether helping parents with insurance or finding the ideal appointment time for siblings in treatment. Little wins like that can make a big difference in their orthodontic experience! I look forward to making you feel right at home when you are here for your next visit!',
    personal: 'My husband and I have two dogs. We love to travel to sunny destinations whenever possible.',
    featured: false,
  },
  {
    name: 'Marie',
    role: 'Administrative Assistant',
    years: 'Since 2004',
    image: '/team-marie.jpg',
    bio: 'I\'ve been working in the dental field since 2004 as a dental receptionist, and I truly love welcoming patients and helping them feel cared for and comfortable. Working in orthodontics is especially meaningful to me because we get to build real connections with our patients and share their smile journeys with them.',
    personal: 'Outside of work, I love traveling and spending time with my family. I\'m a busy mom of three, and our new Morkie puppy keeps life extra fun and full of love!',
    featured: false,
  },
  {
    name: 'Robby',
    role: 'Admin',
    years: '25+ Years',
    image: '/team-roberta.jpg',
    bio: 'I have been with Cronin Ortho for more than 25 years and appreciate the positive energy of Dr. Cronin and our team. We all strive to ensure our patients receive the high-quality, personalized care they deserve and finish with a smile they love! As our practice administrator, I handle a little bit of everything, working to ensure we\'re organized and on top of the day, so things flow smoothly and our patients enjoy their visits!',
    personal: 'My free time is spent with my husband and family. We have four children and four grandchildren!',
    featured: false,
  },
  {
    name: 'Sehar',
    role: 'Administrative Assistant',
    years: null,
    image: '/team-sehar.jpg',
    bio: 'I am the first point of contact for patients and families, helping with Booking Appointments, Managing Patient Records, Billing & Assisting patients with Insurance, making it a Welcoming Experience for all! I love seeing how each unique patient journey leads to renewed confidence and brighter smiles. Every person who walks through our doors has their own story, goals, and reasons for wanting to transform their smile. Being part of that process—from the very first consultation to the final reveal—is incredibly rewarding. Moments like these remind us why we\'re so passionate about what we do.',
    personal: null,
    featured: false,
  },
  {
    name: 'Shel',
    role: 'Administrative Assistant',
    years: 'Since 2021',
    image: '/team-shel.jpg',
    bio: 'I started my dental career here at Cronin Ortho in 2021. I schedule appointments for our patients, help with insurance, along with many other administrative duties. I enjoy jumping in wherever possible to help in different areas of the office. My favourite part of the job is seeing the patients\' smile when their braces come off.',
    personal: 'Outside of the office, I enjoy camping, hiking, playing games with my partner and friends, and spending time with my family. I have 2 wonderful pets, a dog named Zeus and a cat named Nyx!',
    featured: false,
  },
  {
    name: 'Michelle',
    role: 'Certified Orthodontic Assistant',
    years: 'Since 1998',
    image: '/team-michelle.jpg',
    bio: 'I started in the oral healthcare field in 1998 and was welcomed to the Cronin Ortho team in 2019. Dr. Cronin & Dr. Sarfraz (Mo) are incredible orthodontists, and my coworkers are truly great people. Everyone pulls together to make sure our patients are comfortable and we do our best to keep everyone smiling while changing their smile! As an orthodontic CDA, I work in the clinic, assisting Dr. Cronin & Dr. Sarfraz (Mo) with patient care. I try to help our patients stay motivated with their home care routines.',
    personal: null,
    featured: false,
  },
  {
    name: 'Catherine',
    role: 'Certified Orthodontic Assistant',
    years: 'Since 1985',
    image: '/team-catherine.jpg',
    bio: 'I assist with a variety of orthodontic procedures, from taking impressions and X-rays to helping with braces adjustments and ensuring every patient feels comfortable during their visit. I enjoy being part of a team that transforms smiles and makes a real difference in people\'s lives. Whether it\'s working with kids getting braces for the first time or adults completing their treatment journey, I strive to provide a positive and supportive experience every step of the way.',
    personal: 'When I\'m not in the office, I enjoy walking with my Bernese Mountain Dog, Bella, and spending time with family & friends.',
    featured: false,
  },
  {
    name: 'Vicky',
    role: 'Certified Orthodontic Assistant',
    years: null,
    image: '/team-vicky.jpg',
    bio: 'In my role, I assist with a variety of orthodontic procedures and help ensure each patient\'s treatment journey runs smoothly. I take comprehensive orthodontic records, including photos, scans, and other diagnostic information that help the orthodontist create a personalized treatment plan. During appointments, I assist with bonding procedures, place archwires, & help with the safe and efficient removal of brackets when treatment is complete. A big part of my role is also supporting patients throughout their orthodontic journey. Each patient\'s journey is unique, and it\'s incredibly fulfilling to watch their confidence grow as their smile improves.',
    personal: null,
    featured: false,
  },
  {
    name: 'Cheryl',
    role: 'Certified Orthodontic Assistant',
    years: 'Since 1996',
    image: '/team-cheryl.jpg',
    bio: 'I joined Cronin Orthodontics in 2018 as an Ortho CDA. In my role, I enjoy assisting our amazing doctors in the clinic while also working independently with both traditional braces and Invisalign treatments. I\'m passionate about creating a positive experience for our patients and love helping them feel comfortable, relaxed, and confident during their visits—it\'s truly the highlight of my day. Being part of each patient\'s smile journey and seeing their confidence grow makes my work incredibly rewarding.',
    personal: 'Outside of the clinic, I\'m a married mom of three sport-obsessed boys and one very spoiled fur baby.',
    featured: false,
  },
  {
    name: 'Crystal',
    role: 'Certified Orthodontic Assistant',
    years: 'Since 1996',
    image: '/team-crystal.jpg',
    bio: 'I have experience as a receptionist and chairside assistant, having started in the field in 1996. In 2000 I joined this great group of hardworking, loyal ladies and amazing doctors who love what they do. I assist Dr.\'s Cronin & Mo, provide patient care, and maintain communication with referring doctors, too. I love seeing patients\' confidence grow throughout treatment and seeing their excitement when we tell them they\'re getting their braces off!',
    personal: 'I spend much of my time with my family: spouse & three kids. I love watching my kids play sports & any activities that get us outside.',
    featured: false,
  },
  {
    name: 'Chelsey',
    role: 'Certified Dental Assistant',
    years: null,
    image: '/team-chelsey.jpg',
    bio: 'In my role, I take comprehensive orthodontic records, including photos and scans, to help track each patient\'s progress throughout their treatment. I also assist the orthodontist during appointments, including Invisalign checks and retention visits, ensuring everything runs smoothly and efficiently. A key part of my job is providing clear patient instructions, helping patients understand how to care for their aligners or retainers and maintain good oral hygiene during treatment. I enjoy supporting patients throughout their orthodontic journey and helping them feel comfortable, informed, and confident as they work toward achieving their best smile.',
    personal: null,
    featured: false,
  },
  {
    name: 'Nasim',
    role: 'Certified Orthodontic Assistant',
    years: null,
    image: '/team-nasim.jpg',
    bio: 'I provide skilled chairside assistance and patient care, helping ensure that each appointment is both comfortable and efficient for our patients. Working closely with the orthodontist, I assist during a variety of procedures and appointments, helping to keep everything organized and running smoothly throughout the visit. I focus on creating a welcoming and supportive environment, so patients feel at ease during their time in the clinic. Whether preparing instruments, assisting with treatment, or helping patients understand the next steps in their care, I strive to make each visit a positive experience.',
    personal: null,
    featured: false,
  },
  {
    name: 'Tracy',
    role: 'Certified Orthodontic Lab Technician',
    years: null,
    image: '/team-tracy.jpg',
    bio: 'As a Certified Orthodontic Lab Technician, I specialize in designing, fabricating, and maintaining the custom orthodontic appliances used throughout our patients\' treatment. From retainers and expanders to other specialized appliances, each piece is carefully crafted to ensure precision, comfort, and effectiveness. I work closely with our orthodontic team to support each patient\'s treatment plan, making sure every appliance fits properly and functions as intended. Attention to detail is essential in the lab, as even the smallest adjustments can make a big difference in a patient\'s comfort and the success of their treatment.',
    personal: null,
    featured: false,
  },
];

export default function TeamPage() {
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
            <span className="text-white/90 text-sm font-medium">Our Amazing Team</span>
          </div>
          
          {/* Title */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="text-white">Meet the Team </span>
            <span className="text-white/50">Behind Your Smile</span>
          </h1>
          
          {/* Description */}
          <p 
            className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Skilled, experienced professionals who love what they do and value our patients, always putting your health, comfort, and wellbeing first.
          </p>
          
          {/* CTA */}
          <div 
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <Button variant="primary" size="lg" href="/about/dr-cronin">
              Meet Dr. Cronin
            </Button>
            <Button variant="secondary" size="lg" href="/about/dr-mo">
              Meet Dr. Mo
            </Button>
          </div>
        </div>
      </section>

      {/* Team Group Photo Section */}
      <section className="py-8 lg:py-12 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div 
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <Image
              src="/CroninOrtho6098 2 (3).webp"
              alt="Cronin Orthodontics Team"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
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
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  {member.personal && (
                    <p className="text-white/40 text-sm leading-relaxed">
                      {member.personal}
                    </p>
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
              Ready to Start Your Smile Journey?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Our team is here to welcome you and provide the personalized, caring orthodontic experience you deserve. Schedule your consultation today!
            </p>
            <Button variant="primary" size="lg" href="/contact#contact-form">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
