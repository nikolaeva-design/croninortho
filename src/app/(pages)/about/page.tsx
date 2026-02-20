import type { Metadata } from 'next';
import { Button, TeamExpertsScroll } from '@/components';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Straightening teeth, changing smiles, and transforming lives—one person at a time. Learn about Cronin Orthodontics and our dedicated team.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero */}
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
            <span className="text-white/90 text-sm font-medium">
              About Cronin Orthodontics
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="text-white">Transforming </span>
            <span className="text-white/50">Lives</span>
          </h1>

          {/* Description */}
          <p
            className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            One person at a time! At Cronin Ortho, Dr. Don Cronin and our team treat patients with respect, professionalism, and sensitivity to unique needs.
          </p>

          {/* CTA */}
          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <Button variant="primary" size="lg" href="/contact#contact-form">
              Book Consultation
            </Button>
            <Button variant="secondary" size="lg" href="/about/team">
              Meet the Team
            </Button>
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
                What&apos;s Different at Cronin Ortho?
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


    </div>
  );
}
