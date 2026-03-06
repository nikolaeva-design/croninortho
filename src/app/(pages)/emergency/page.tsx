import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Emergency Orthodontic Care',
  description: 'Emergency guidance for orthodontic issues including loose brackets, poking wires, and general soreness.',
  alternates: { canonical: '/emergency' },
};

function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = 'dark',
  align = 'left',
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  tone?: 'dark' | 'darker';
  align?: 'left' | 'center';
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-14 sm:py-20 lg:py-28 scroll-mt-28 ${
        tone === 'darker' ? 'bg-[#0a0a0a]' : 'bg-[#0f0f0f]'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className={`mb-8 sm:mb-10 lg:mb-14 ${align === 'center' ? 'text-center' : ''}`}>
          {eyebrow && (
            <div className={`mb-4 sm:mb-6 ${align === 'center' ? 'flex justify-center' : ''}`}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/70 text-[10px] sm:text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962]" />
                {eyebrow}
              </div>
            </div>
          )}
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p
              className={`text-white/55 text-sm sm:text-base lg:text-lg leading-relaxed mt-3 sm:mt-4 max-w-3xl ${
                align === 'center' ? 'mx-auto' : ''
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

const emergencyIssues = [
  {
    icon: 'solar:sad-circle-bold',
    title: 'General Soreness',
    description: 'When you get your braces on, you may feel general soreness in your mouth, and teeth may be tender to biting pressures for 3-5 days.',
    image: '/Gemini_Generated_Image_pjpu0gpjpu0gpjpu.png',
    tips: [
      'Stick to a soft diet until teeth are no longer tender',
      'Rinse with warm salt water (1 tsp salt in 8 oz warm water)',
      'Take Acetaminophen (Tylenol) for pain relief',
      'Use wax on braces to reduce lip/cheek irritation',
    ],
  },
  {
    icon: 'solar:magnet-bold',
    title: 'Headgear Issues',
    description: 'Discomfort is often caused by not wearing the headgear as instructed. The headgear should hurt less the more it\'s worn.',
    image: '/Gemini_Generated_Image_wgjyynwgjyynwgjy.png',
    tips: [
      'Follow your orthodontist\'s wearing instructions',
      'Call the office if the facebow (metal piece) is bent',
      'Ensure you get in the prescribed number of hours',
      'Discomfort decreases with consistent wear',
    ],
  },
  {
    icon: 'solar:link-broken-minimalistic-bold',
    title: 'Loose Appliance',
    description: 'If your appliance is poking you, there are simple steps you can take for temporary relief.',
    image: '/Gemini_Generated_Image_ayzys2ayzys2ayzy.png',
    tips: [
      'Place wax on the offending part',
      'Call the office to schedule a repair appointment',
      'Avoid eating hard or sticky foods',
    ],
  },
  {
    icon: 'solar:widget-bold',
    title: 'Loose Bracket',
    description: 'If your bracket or band is still attached to the wire, leave it in place. If it can be easily removed, save it for your next appointment.',
    image: '/Gemini_Generated_Image_udla76udla76udla.png',
    smallImage: true,
    tips: [
      'Leave attached brackets in place',
      'Put wax on it if needed for comfort',
      'Save removed brackets in an envelope',
      'Bring saved pieces to your next appointment',
    ],
  },
  {
    icon: 'solar:ruler-cross-pen-bold',
    title: 'Loose Wire',
    description: 'Using tweezers or needle-nosed pliers, try to put your wire back into place. You can use floss to tie the wire in place if needed.',
    image: '/Gemini_Generated_Image_j927lvj927lvj927.png',
    smallImage: true,
    tips: [
      'Try to reposition wire with tweezers or pliers',
      'Tie floss around the bracket to hold wire',
      'Cover sharp ends with wax',
      'As a last resort, clip wire behind the last secure tooth',
    ],
  },
  {
    icon: 'solar:danger-triangle-bold',
    title: 'Poking Wire',
    description: 'A wire that\'s poking can be uncomfortable but is usually easy to fix temporarily at home.',
    image: '/Gemini_Generated_Image_oe98yoe98yoe98yo.png',
    smallImage: true,
    tips: [
      'Use a pencil eraser to push the wire down',
      'Place wax on the poking area',
      'Call the office if discomfort continues',
    ],
  },
];

export default function EmergencyPage() {
  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/emergency-hero.png"
            alt="Emergency orthodontic care"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 sm:from-black/80 via-black/60 sm:via-black/50 to-black/40 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-32 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-red-500/10 backdrop-blur-md border border-red-500/20 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">
                Emergency Care
              </span>
            </div>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-4 sm:mb-6">
              Emergency <span className="text-white/50">Care</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 max-w-lg">
              True orthodontic emergencies are rare, but when they occur we are
              available to you. Learn how to handle common issues at home.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Button variant="primary" size="lg" href={`tel:${CONTACT.phone}`}>
                Call us (604) 533-1151
              </Button>
              <Button variant="secondary" size="lg" href="/contact#contact-form">
                Schedule Repair
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <SectionShell
        id="when-to-call"
        eyebrow="Important"
        title="When to Call Us"
        subtitle="As a general rule, call our office when you experience severe pain or have a painful appliance problem you can't take care of yourself."
        tone="darker"
        align="center"
      >
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* DIY Fixes Card */}
          <div className="group rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 p-5 sm:p-7 lg:p-8 transition-all duration-200 hover:border-[#c9a962]/50 hover:bg-[#c9a962]/[0.08] hover:shadow-lg hover:shadow-[#c9a962]/10">
            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-4 sm:mb-5 transition-all duration-200 group-hover:bg-[#c9a962]/20 group-hover:border-[#c9a962]/40 group-hover:scale-110">
              <iconify-icon
                icon="solar:home-smile-bold"
                width="24"
                height="24"
                className="text-white/60 transition-colors duration-200 group-hover:text-[#c9a962] sm:w-7 sm:h-7"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">DIY Fixes</h3>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
              You may be able to solve many problems yourself temporarily until
              you can get to our office.
            </p>
            <ul className="space-y-1.5 sm:space-y-2">
              {['Put loose pieces in an envelope', 'Use wax on poking wires', 'Reposition wires with tweezers'].map((tip) => (
                <li key={tip} className="flex items-center gap-2 text-white/55 text-xs sm:text-sm transition-colors duration-200 group-hover:text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0 transition-colors duration-200 group-hover:bg-[#c9a962]" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Don't Wait Card */}
          <div className="group rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 p-5 sm:p-7 lg:p-8 transition-all duration-200 hover:border-[#c9a962]/50 hover:bg-[#c9a962]/[0.08] hover:shadow-lg hover:shadow-[#c9a962]/10">
            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-4 sm:mb-5 transition-all duration-200 group-hover:bg-[#c9a962]/20 group-hover:border-[#c9a962]/40 group-hover:scale-110">
              <iconify-icon
                icon="solar:clock-circle-bold"
                width="24"
                height="24"
                className="text-white/60 transition-colors duration-200 group-hover:text-[#c9a962] sm:w-7 sm:h-7"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Don&apos;t Wait Too Long</h3>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
              After alleviating your discomfort, it&apos;s very important that you
              still call our office as soon as possible.
            </p>
            <div className="rounded-xl sm:rounded-2xl bg-red-500/10 border border-red-500/20 p-3 sm:p-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <iconify-icon icon="solar:danger-triangle-bold" width="18" height="18" className="text-red-400 shrink-0 mt-0.5" />
                <p className="text-white/70 text-xs sm:text-sm">
                  Allowing your appliance to remain damaged may result in <span className="text-white font-medium">disruptions to your treatment plan</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Common Issues */}
      <SectionShell
        id="common-issues"
        eyebrow="Self-help guide"
        title="Common Issues & Solutions"
        subtitle="Learn how to temporarily address common orthodontic issues at home until you can visit our office."
        tone="dark"
        align="center"
      >
        <div className="space-y-5 sm:space-y-8">
          {emergencyIssues.map((issue, idx) => (
            <div
              key={issue.title}
              className={`group rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-200 hover:border-[#c9a962]/50 hover:bg-[#c9a962]/[0.08] hover:shadow-lg hover:shadow-[#c9a962]/10`}
            >
              <div className={`grid md:grid-cols-2 ${idx % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                {/* Image */}
                <div className="aspect-[16/10] sm:aspect-[4/3] md:aspect-auto md:min-h-[360px] relative md:[direction:ltr] bg-[#0a0a0a] flex items-center justify-center p-4 sm:p-6">
                  {'smallImage' in issue && issue.smallImage ? (
                    <Image
                      src={issue.image}
                      alt={issue.title}
                      width={320}
                      height={240}
                      loading="lazy"
                      sizes="(max-width: 640px) 280px, 320px"
                      className="rounded-xl sm:rounded-2xl object-cover max-w-[280px] sm:max-w-[320px] max-h-[200px] sm:max-h-[240px]"
                    />
                  ) : (
                    <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden">
                      <Image
                        src={issue.image}
                        alt={issue.title}
                        fill
                        loading="lazy"
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-5 sm:p-8 lg:p-12 flex flex-col justify-center md:[direction:ltr]">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/50 text-[10px] sm:text-xs font-medium mb-3 sm:mb-5 w-fit transition-all duration-200 group-hover:bg-[#c9a962]/10 group-hover:border-[#c9a962]/20 group-hover:text-[#c9a962]">
                    <iconify-icon
                      icon={issue.icon}
                      width="12"
                      height="12"
                      aria-hidden="true"
                      className="sm:w-3.5 sm:h-3.5"
                    />
                    Common Issue
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4 transition-colors duration-200 group-hover:text-white">
                    {issue.title}
                  </h3>
                  <p className="text-white/55 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 transition-colors duration-200 group-hover:text-white/70">
                    {issue.description}
                  </p>
                  
                  <div className="mb-4 sm:mb-6">
                    <p className="text-white/40 text-xs sm:text-sm font-medium mb-2 sm:mb-3 uppercase tracking-wider">What to do</p>
                    <ul className="space-y-2 sm:space-y-3">
                      {issue.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 sm:gap-3 text-white/60 text-sm sm:text-base transition-colors duration-200 group-hover:text-white/75">
                          <span className="w-5 sm:w-6 h-5 sm:h-6 rounded-md sm:rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 group-hover:bg-[#c9a962]/20 group-hover:border-[#c9a962]/30">
                            <iconify-icon
                              icon="solar:check-read-linear"
                              width="12"
                              height="12"
                              className="text-white/40 transition-colors duration-200 group-hover:text-[#c9a962] sm:w-3.5 sm:h-3.5"
                            />
                          </span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-white/40 text-xs sm:text-sm italic">
                    Remember to call our office after temporary fixes to schedule a proper repair.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Quick Tips */}
      <SectionShell
        id="quick-tips"
        eyebrow="Quick reference"
        title="Quick Tips"
        subtitle="Keep these handy tips in mind for common situations."
        tone="darker"
        align="center"
      >
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-5 max-w-4xl mx-auto">
          <div className="rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 p-4 sm:p-6 text-center">
            <div className="w-11 sm:w-14 h-11 sm:h-14 rounded-xl sm:rounded-2xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <iconify-icon
                icon="solar:adhesive-plaster-bold"
                width="22"
                height="22"
                className="text-[#c9a962] sm:w-7 sm:h-7"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-white text-sm sm:text-base font-semibold mb-1.5 sm:mb-2">Wax is Your Friend</h3>
            <p className="text-white/50 text-xs sm:text-sm">
              Put soft wax on any piece that&apos;s sticking out or poking you.
            </p>
          </div>
          <div className="rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 p-4 sm:p-6 text-center">
            <div className="w-11 sm:w-14 h-11 sm:h-14 rounded-xl sm:rounded-2xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <iconify-icon
                icon="solar:letter-bold"
                width="22"
                height="22"
                className="text-[#c9a962] sm:w-7 sm:h-7"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-white text-sm sm:text-base font-semibold mb-1.5 sm:mb-2">Save Loose Pieces</h3>
            <p className="text-white/50 text-xs sm:text-sm">
              Put loose pieces in an envelope or container and bring them to your appointment.
            </p>
          </div>
          <div className="rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 p-4 sm:p-6 text-center">
            <div className="w-11 sm:w-14 h-11 sm:h-14 rounded-xl sm:rounded-2xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <iconify-icon
                icon="solar:phone-calling-bold"
                width="22"
                height="22"
                className="text-[#c9a962] sm:w-7 sm:h-7"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-white text-sm sm:text-base font-semibold mb-1.5 sm:mb-2">Always Call</h3>
            <p className="text-white/50 text-xs sm:text-sm">
              Even after a temporary fix, call to schedule a proper repair.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-white/50 text-xs sm:text-sm mb-4 sm:mb-6">
            Need help now? We&apos;re here for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button variant="primary" size="lg" href={`tel:${CONTACT.phone}`}>
              Call {CONTACT.phoneDisplay}
            </Button>
            <Button variant="secondary" size="lg" href="/patient">
              Patient Resources
            </Button>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
