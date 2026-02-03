import type { Metadata } from 'next';
import Image from 'next/image';
import { Button, TeamExpertsScroll } from '@/components';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Straightening teeth, changing smiles, and transforming lives—one person at a time. Learn about Cronin Orthodontics and our dedicated team.',
  alternates: { canonical: '/about' },
};

const partners = [
  'Invisalign',
  'American Association of Orthodontists',
  'Canadian Association of Orthodontists',
  'Damon System',
  'iTero',
  '3M Unitek',
];

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/cta-background.png"
            alt="About Cronin Orthodontics"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
              <span className="text-white/90 text-sm font-medium">
                About Cronin Orthodontics
              </span>
            </div>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6">
              Transforming{' '}
              <span className="text-white/50">
                Lives
              </span>
            </h1>
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
              One person at a time! At Cronin Ortho, Dr. Don Cronin and our team treat patients with respect, professionalism, and sensitivity to unique needs.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" href="/#contact" icon="solar:calendar-add-linear">
                Book Consultation
              </Button>
              <Button variant="secondary" size="lg" href="/about/team" icon="solar:users-group-rounded-linear">
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Different Section */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <p className="text-[#c9a962] text-sm font-medium tracking-wider uppercase mb-4">Our Philosophy</p>
              <h2 className="text-white text-3xl lg:text-4xl font-semibold mb-8">
                What's Different at Cronin Ortho?
            </h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#c9a962]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <iconify-icon icon="solar:home-smile-bold" width="18" height="18" className="text-[#c9a962]" />
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    A private practice where each patient is welcomed as a friend and cared for as family
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#c9a962]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <iconify-icon icon="solar:users-group-rounded-bold" width="18" height="18" className="text-[#c9a962]" />
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    We welcome everyone—children, teens, adults, and the young at heart
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#c9a962]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <iconify-icon icon="solar:chat-round-dots-bold" width="18" height="18" className="text-[#c9a962]" />
              </div>
                  <p className="text-white/60 leading-relaxed">
                    Clear communication and keeping you up-to-date on treatment progress
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#c9a962]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <iconify-icon icon="solar:heart-bold" width="18" height="18" className="text-[#c9a962]" />
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    Building your trust so we can help you love your confident smile
                  </p>
              </div>
            </div>
          </div>

            {/* Dedication Card */}
            <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 lg:p-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a962] to-[#d4b978] flex items-center justify-center mb-6">
                    <iconify-icon
                  icon="solar:star-shine-bold"
                  width="32"
                  height="32"
                  className="text-white"
                      aria-hidden="true"
                    />
                  </div>
              <h3 className="text-white text-2xl font-semibold mb-4">
                Advanced Orthodontics with a Personal Touch
                    </h3>
              <p className="text-white/55 leading-relaxed">
                We focus on oral health and facial aesthetics, but never forget you—the person who owns the smile. Treatment tailored to your concerns, focused on comfort and results.
                    </p>
                  </div>
          </div>
        </div>
      </section>

      {/* Team Highlights - Scroll Animation */}
      <TeamExpertsScroll />

      {/* Partners Marquee */}
      <section className="py-16 bg-[#0f0f0f] border-y border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-10">
          <p className="text-white/40 text-sm text-center uppercase tracking-wider">
            Trusted Partners
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10" />
          
          <div className="flex animate-marquee">
            {[...partners, ...partners, ...partners].map((partner, idx) => (
              <div
                key={`${partner}-${idx}`}
                className="flex items-center gap-3 px-10 py-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                  <iconify-icon
                    icon="solar:verified-check-bold"
                    width="20"
                    height="20"
                    className="text-white/30"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-white/50 font-medium whitespace-nowrap">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
