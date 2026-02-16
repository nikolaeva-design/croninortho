import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Patient Information',
  description:
    'Patient resources including forms, office visits, online services, and more.',
  alternates: { canonical: '/patient' },
};

const toc = [
  {
    label: 'Financial Information',
    description: 'Insurance, payments, and financing options.',
    href: '#financial-information',
    icon: 'solar:wallet-money-bold',
    accent: true,
  },
  {
    label: 'Office Visits',
    description: 'What to expect at each appointment.',
    href: '#office-visits',
    icon: 'solar:calendar-mark-bold',
    accent: false,
  },
  {
    label: 'Online Services',
    description: 'Patient portal, reminders, and account access.',
    href: '#online-services',
    icon: 'solar:monitor-smartphone-bold',
    accent: true,
  },
  {
    label: 'Patient Forms',
    description: 'Download and complete forms before your visit.',
    href: '#patient-forms',
    icon: 'solar:document-add-bold',
    accent: false,
  },
  {
    label: 'Testimonials',
    description: 'Stories from our patients.',
    href: '#testimonials',
    icon: 'solar:star-shine-bold',
    accent: false,
  },
  {
    label: 'Office Tour',
    description: 'A look inside our office.',
    href: '#office-tour',
    icon: 'solar:gallery-wide-bold',
    accent: false,
  },
];

function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = 'dark',
  align = 'left',
  withOrbs = false,
  overflowVisible = false,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  tone?: 'dark' | 'darker';
  align?: 'left' | 'center';
  withOrbs?: boolean;
  overflowVisible?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-28 py-20 lg:py-28 ${
        overflowVisible ? 'overflow-x-clip overflow-y-visible' : 'overflow-hidden'
      } ${tone === 'darker' ? 'bg-[#0a0a0a]' : 'bg-[#0f0f0f]'}`}
    >
      {withOrbs && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-[#c9a962]/6 rounded-full blur-[120px]" />
          <div className="absolute -bottom-28 -right-24 w-[520px] h-[520px] bg-white/[0.03] rounded-full blur-[140px]" />
        </div>
      )}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`mb-10 lg:mb-14 ${align === 'center' ? 'text-center' : ''}`}>
          {eyebrow && (
            <div className={`mb-6 ${align === 'center' ? 'flex justify-center' : ''}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/70 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962]" />
                {eyebrow}
              </div>
            </div>
          )}
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p
              className={`text-white/55 text-lg leading-relaxed mt-4 max-w-3xl ${
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

function PlaceholderBox({ label }: { label: string }) {
  return (
    <div className="rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden">
      <div className="aspect-[16/10] flex items-center justify-center">
        <div className="text-center px-6">
          <iconify-icon
            icon="solar:gallery-bold"
            width="34"
            height="34"
            className="text-white/20 mb-2"
            aria-hidden="true"
          />
          <p className="text-white/35 text-sm">{label}</p>
        </div>
      </div>
    </div>
  );
}

export default function PatientPage() {
  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/footer.png"
            alt="Patient resources"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32 w-full">
          {/* Hero Content - Left Aligned */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
              <span className="text-white/90 text-sm font-medium">
                Patient Resources
              </span>
            </div>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6">
              Patient{' '}
              <span className="text-white/50">
                Information
              </span>
            </h1>
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
              Forms, visit prep, and quick answers — everything you need to
              feel ready and informed before your appointment.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Button variant="primary" size="lg" href="#patient-forms" icon="solar:document-add-linear">
                Get Patient Forms
              </Button>
              <Button variant="secondary" size="lg" href="/contact#contact-form" icon="solar:calendar-add-linear">
                Book a Visit
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
              >
                <iconify-icon icon="solar:phone-bold" width="16" height="16" className="text-[#c9a962]" />
                {CONTACT.phoneDisplay}
              </a>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <a
                href="/emergency"
                className="text-white/50 hover:text-white transition-colors"
              >
                Emergency Info
              </a>
            </div>
          </div>

          {/* TOC */}
          <div className="mt-12 lg:mt-16 rounded-3xl bg-white/[0.03] border border-white/10 p-6 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <p className="text-white/80 text-base font-semibold">Quick links</p>
              <p className="text-white/45 text-sm">
                Jump straight to the section you need
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {toc.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl border transition-all duration-200 p-5 h-full bg-white/[0.02] border-white/10 hover:border-[#c9a962]/50 hover:bg-[#c9a962]/[0.08] hover:shadow-lg hover:shadow-[#c9a962]/10"
                  >
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110 bg-white/[0.05] border border-white/10 group-hover:bg-[#c9a962]/20 group-hover:border-[#c9a962]/40">
                      <iconify-icon
                        icon={item.icon}
                        width="24"
                        height="24"
                        className="transition-colors duration-200 text-white/60 group-hover:text-[#c9a962]"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base font-medium mb-0.5 transition-colors duration-200 text-white/90 group-hover:text-white">
                        {item.label}
                      </div>
                      <p className="text-sm leading-snug transition-colors duration-200 text-white/50 group-hover:text-white/70">
                      {item.description}
                    </p>
                    </div>
                    <iconify-icon
                      icon="solar:arrow-right-linear"
                      width="20"
                      height="20"
                      className="shrink-0 transition-all duration-200 group-hover:translate-x-1 text-white/30 group-hover:text-[#c9a962]"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Financial Information */}
      <SectionShell
        id="financial-information"
        eyebrow="Financial information"
        title="Financial Information"
        subtitle="We'll discuss your treatment costs and payment options so you can make the best choice for your smile."
        tone="darker"
        align="center"
        withOrbs
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Payment Plans & Insurance */}
          <div className="space-y-6">
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-7 lg:p-9">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center">
                  <iconify-icon
                    icon="solar:wallet-money-bold"
                    width="22"
                    height="22"
                    className="text-[#c9a962]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-white text-xl font-semibold">
                  Affordable Payment Plans
            </h3>
              </div>
              <p className="text-white/55 leading-relaxed mb-5">
                Your smile is yours forever, and we want to make it as easy as
                possible for you to receive the best orthodontic care whenever
                you need it. We'll work with you to create a payment plan that
                fits your budget — you'll know what to expect before beginning
                treatment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="md" href="#patient-contact">
                  Discuss options
              </Button>
              </div>
            </div>

            <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-7 lg:p-9">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  <iconify-icon
                    icon="solar:shield-check-bold"
                    width="22"
                    height="22"
                    className="text-white/60"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-white text-xl font-semibold">
                  Insurance Assistance
                </h3>
              </div>
              <p className="text-white/55 leading-relaxed">
                Our office staff is always available to help you with insurance
                claims and paperwork if you have insurance that covers any
                portion of your orthodontic treatment.
              </p>
            </div>
          </div>

          {/* Right: Online Services */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-7 lg:p-9 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center">
                <iconify-icon
                  icon="solar:monitor-smartphone-bold"
                  width="22"
                  height="22"
                  className="text-[#c9a962]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-white text-xl font-semibold">
                Convenient Online Services
              </h3>
            </div>
            <p className="text-white/55 leading-relaxed mb-6">
              With just the simple click of a button, our secure online service
              allows you to manage your account anytime.
            </p>

            <ul className="space-y-3">
              {[
                { icon: 'solar:calendar-mark-bold', text: 'View your appointment and account information' },
                { icon: 'solar:bell-bold', text: 'Sign up for email or text appointment reminders' },
                { icon: 'solar:card-recive-bold', text: 'Check your payment history and current charges' },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                    <iconify-icon
                      icon={item.icon}
                      width="16"
                      height="16"
                      className="text-white/50"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-white/60 text-sm">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8 border-t border-white/10">
              <p className="text-white/45 text-sm mb-4">
                Don't have an account yet? Sign up to view your information
                online.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="md" href="#" icon="solar:login-3-linear">
                  Patient Login
                </Button>
                <Button variant="secondary" size="md" href="#">
                  Create Account
              </Button>
            </div>
          </div>
          </div>
        </div>
      </SectionShell>

      {/* Office Visits */}
      <SectionShell
        id="office-visits"
        eyebrow="How it works"
        title="Office Visits"
        subtitle="We'll work with you every step of the way to make your orthodontic care as rewarding as possible."
        tone="dark"
        align="center"
        withOrbs
      >
        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: 'solar:star-shine-bold', step: '01', title: 'Initial Consultation', items: ['Meet our team', 'Complete oral exam & X-rays', 'Review treatment options', 'Discuss costs & payment plans'] },
            { icon: 'solar:camera-bold', step: '02', title: 'Records & Planning', items: ['Photos & X-rays taken', 'Digital study models', 'Dr. Cronin analyzes data', '~1 hour appointment'] },
            { icon: 'solar:calendar-bold', step: '03', title: 'Regular Appointments', items: ['Every 4–8 weeks', 'Flexible scheduling', 'Easy rescheduling', 'Progress check-ins'] },
            { icon: 'solar:health-bold', step: '04', title: 'Dental Checkups', items: ['Continue dentist visits', 'Cleanings every 6 months', 'We coordinate care', 'Routine checkups'] },
          ].map((card) => (
            <div
              key={card.step}
              className="group rounded-3xl bg-white/[0.02] border border-white/10 p-6 transition-all duration-200 hover:border-[#c9a962]/50 hover:bg-[#c9a962]/[0.08] hover:shadow-lg hover:shadow-[#c9a962]/10"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center transition-all duration-200 group-hover:bg-[#c9a962]/20 group-hover:border-[#c9a962]/40 group-hover:scale-110">
                  <iconify-icon
                    icon={card.icon}
                    width="22"
                    height="22"
                    className="text-white/60 transition-colors duration-200 group-hover:text-[#c9a962]"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-white/10 text-4xl font-bold transition-colors duration-200 group-hover:text-[#c9a962]/30">
                  {card.step}
                </span>
              </div>
              <h3 className="text-white text-lg font-semibold mb-3 transition-colors duration-200 group-hover:text-white">
                {card.title}
              </h3>
              <ul className="space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/55 text-sm transition-colors duration-200 group-hover:text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0 transition-colors duration-200 group-hover:bg-[#c9a962]/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button variant="primary" size="lg" href="#patient-contact" icon="solar:calendar-add-linear">
            Schedule Your Consultation
          </Button>
        </div>
      </SectionShell>

      {/* Online Services */}
      <SectionShell
        id="online-services"
        eyebrow="Powered by Ortho Sesame"
        title="Online Services"
        subtitle="Manage your patient information online, 24/7 — secure, convenient, and free of charge."
        tone="darker"
        align="center"
        withOrbs
      >
        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {[
            { icon: 'solar:bell-bing-bold', title: 'Appointment Reminders', desc: 'Email, text, or voicemail reminders. Confirm appointments online.' },
            { icon: 'solar:wallet-2-bold', title: 'Financial Pages', desc: 'Review and print your financial ledgers anytime.' },
            { icon: 'solar:gallery-bold', title: 'View Your Images', desc: 'Access dental images and X-rays from home.' },
            { icon: 'solar:share-bold', title: 'Share Your Smile', desc: 'Share your Invisalign® ClinCheck® with family and friends.' },
            { icon: 'solar:chat-round-like-bold', title: 'Post-Appointment Feedback', desc: "Let us know how we're doing via online survey." },
            { icon: 'solar:shield-check-bold', title: 'Safe & Secure', desc: 'HIPAA-compliant. Just need an email to get started.' },
          ].map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl p-6 transition-all duration-200 bg-white/[0.02] border border-white/10 hover:border-[#c9a962]/50 hover:bg-[#c9a962]/[0.08] hover:shadow-lg hover:shadow-[#c9a962]/10"
            >
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 bg-white/[0.05] border border-white/10 transition-all duration-200 group-hover:bg-[#c9a962]/20 group-hover:border-[#c9a962]/40 group-hover:scale-110">
                <iconify-icon
                  icon={feature.icon}
                  width="22"
                  height="22"
                  className="text-white/60 transition-colors duration-200 group-hover:text-[#c9a962]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2 transition-colors duration-200 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed transition-colors duration-200 group-hover:text-white/65">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-7 lg:p-9">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">
                Ready to get started?
            </h3>
              <p className="text-white/55 leading-relaxed max-w-xl">
                These features are already available to you! Click Patient Login
                and follow the directions to create your new account. You are
                not only our patient but also a member of our extended family.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button variant="primary" size="lg" href="#" icon="solar:login-3-linear">
                Patient Login
              </Button>
              <Button variant="secondary" size="lg" href="#">
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Patient Forms */}
      <SectionShell
        id="patient-forms"
        eyebrow="Before your visit"
        title="Patient Forms"
        subtitle="Please take a minute to fill out the patient information form before your first appointment."
        tone="dark"
        align="center"
        withOrbs
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Online New Patient Form */}
          <a
            href="#"
            className="group rounded-3xl bg-gradient-to-br from-[#c9a962]/10 via-transparent to-transparent border border-[#c9a962]/20 hover:border-[#c9a962]/40 transition-all p-7 lg:p-8 text-left"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#c9a962]/15 border border-[#c9a962]/25 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <iconify-icon
                icon="solar:document-add-bold"
                width="28"
                height="28"
                className="text-[#c9a962]"
                aria-hidden="true"
              />
          </div>
            <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-[#c9a962] transition-colors">
              Online New Patient Form
              </h3>
            <p className="text-white/55 text-sm leading-relaxed mb-4">
              Fill out your new patient information online — quick and convenient.
            </p>
            <span className="inline-flex items-center gap-2 text-[#c9a962] text-sm font-medium">
              Fill out online
                      <iconify-icon
                icon="solar:arrow-right-linear"
                width="16"
                height="16"
                className="group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
            </span>
          </a>

          {/* Printable Referral Form */}
          <a
            href="#"
            className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/25 transition-all p-7 lg:p-8 text-left"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <iconify-icon
                icon="solar:file-download-bold"
                width="28"
                height="28"
                className="text-white/60"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-white/90 transition-colors">
              Printable Referral Form
            </h3>
            <p className="text-white/55 text-sm leading-relaxed mb-4">
              Download the referral form as a PDF to print and fill out by hand.
            </p>
            <span className="inline-flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-white transition-colors">
              Download PDF
              <iconify-icon
                icon="solar:arrow-right-linear"
                width="16"
                height="16"
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </span>
          </a>
          </div>

        {/* Adobe Reader note */}
        <p className="text-white/40 text-sm text-center mt-8">
          Unable to open PDF files?{' '}
          <a
            href="https://get.adobe.com/reader/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/55 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/40 transition-colors"
          >
            Get Adobe Reader® for free
          </a>
          .
        </p>
      </SectionShell>

      {/* Office Tour */}
      <SectionShell
        id="office-tour"
        eyebrow="Office tour"
        title="Office Tour"
        subtitle="Take a quick look around our space."
        tone="darker"
        align="center"
      >
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-webkit-overflow-scrolling:touch]">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className="group snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[360px] rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-200 hover:border-[#c9a962]/40 hover:shadow-lg hover:shadow-[#c9a962]/10"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/Gemini_Generated_Image_g4z48ug4z48ug4z4.png"
                  alt="Cronin Orthodontics office"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-white/40 text-sm mt-2">
          Swipe to see more →
        </p>
      </SectionShell>

      {/* Testimonials */}
      <SectionShell
        id="testimonials"
        eyebrow="Patient stories"
        title="Testimonials"
        subtitle="Hear from patients about their experience and results."
        tone="dark"
        align="center"
        withOrbs
        overflowVisible
      >
        {/* Infinite Marquee */}
        <div className="overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12">
          <div className="flex animate-marquee gap-5">
            {/* First set of testimonials */}
            {[
              { name: 'M Prins', initial: 'M', quote: "The best orthodontic and patient care! They treated myself and my three daughters with some tricky situations over the last 6 years, and have given us royal treatment the entire time. The team at reception are exceptional!" },
              { name: 'Scott Drummond', initial: 'S', quote: 'We now have our third child going through with Cronin Ortho. The service has never wavered over the years and the end results are fantastic. All of the staff are so friendly and very accommodating.' },
              { name: 'Melissa Ketel', initial: 'M', quote: "Cronin Ortho is fantastic! Both Dr. Mo and Dr. Cronin are attentive and caring, they take care of children's comfort, understand exactly what's happening, and are always ready to help." },
              { name: 'Daine DOK', initial: 'D', quote: 'Great place to get Ortho treatment for yourself or your kids. Staff are knowledgeable and friendly. They happily answer questions or address your concerns, giving you a stress free experience.' },
              { name: 'Tiffany Froese', initial: 'T', quote: 'Absolutely amazing ortho office! The staff is friendly, gentle, and always on time. They made the whole process so easy and stress-free. Highly recommend!' },
              { name: 'Yuliya Davidovsky', initial: 'Y', quote: 'We had a great experience at the orthodontic clinic Cronin. The staff was friendly, professional, and very patient. Everything was explained clearly, and the treatment was done with care.' },
            ].map((testimonial, idx) => (
              <div
                key={`first-${idx}`}
                className="shrink-0 w-[320px] rounded-2xl p-6 bg-white/[0.02] border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium bg-white/[0.06] border border-white/10 text-white/60">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="text-white/90 text-sm font-medium">{testimonial.name}</div>
                    <div className="flex items-center gap-0.5 text-[#c9a962]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <iconify-icon key={i} icon="solar:star-bold" width="12" height="12" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              { name: 'M Prins', initial: 'M', quote: "The best orthodontic and patient care! They treated myself and my three daughters with some tricky situations over the last 6 years, and have given us royal treatment the entire time. The team at reception are exceptional!" },
              { name: 'Scott Drummond', initial: 'S', quote: 'We now have our third child going through with Cronin Ortho. The service has never wavered over the years and the end results are fantastic. All of the staff are so friendly and very accommodating.' },
              { name: 'Melissa Ketel', initial: 'M', quote: "Cronin Ortho is fantastic! Both Dr. Mo and Dr. Cronin are attentive and caring, they take care of children's comfort, understand exactly what's happening, and are always ready to help." },
              { name: 'Daine DOK', initial: 'D', quote: 'Great place to get Ortho treatment for yourself or your kids. Staff are knowledgeable and friendly. They happily answer questions or address your concerns, giving you a stress free experience.' },
              { name: 'Tiffany Froese', initial: 'T', quote: 'Absolutely amazing ortho office! The staff is friendly, gentle, and always on time. They made the whole process so easy and stress-free. Highly recommend!' },
              { name: 'Yuliya Davidovsky', initial: 'Y', quote: 'We had a great experience at the orthodontic clinic Cronin. The staff was friendly, professional, and very patient. Everything was explained clearly, and the treatment was done with care.' },
            ].map((testimonial, idx) => (
              <div
                key={`second-${idx}`}
                className="shrink-0 w-[320px] rounded-2xl p-6 bg-white/[0.02] border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium bg-white/[0.06] border border-white/10 text-white/60">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="text-white/90 text-sm font-medium">{testimonial.name}</div>
                    <div className="flex items-center gap-0.5 text-[#c9a962]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <iconify-icon key={i} icon="solar:star-bold" width="12" height="12" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Share Your Experience */}
        <p className="text-white/45 text-sm text-center mt-8">
          Want to share your experience? Ask our front desk for a comment card at your next visit.
        </p>
      </SectionShell>

      {/* Contact Us (matches wireframe intent; keep footer's #contact untouched) */}
      <section id="patient-contact" className="relative overflow-hidden py-20 lg:py-28 bg-[#0f0f0f]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-28 right-[-120px] w-[520px] h-[520px] bg-[#c9a962]/6 rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 left-[-140px] w-[620px] h-[620px] bg-white/[0.03] rounded-full blur-[160px]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-10 lg:mb-14 text-center">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/70 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962]" />
                Contact
              </div>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Contact us
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mt-4 max-w-3xl mx-auto">
              Need help with forms, scheduling, or insurance questions? Reach out
              and we’ll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 p-5 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#c9a962]/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <iconify-icon
                    icon="solar:letter-bold"
                    width="22"
                    height="22"
                    className="text-[#c9a962]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-white/50 text-sm">Email</div>
                  <div className="text-white font-medium">{CONTACT.email}</div>
                </div>
              </a>

              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-4 p-5 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#c9a962]/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <iconify-icon
                    icon="solar:phone-bold"
                    width="22"
                    height="22"
                    className="text-[#c9a962]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-white/50 text-sm">Phone</div>
                  <div className="text-white font-medium">
                    {CONTACT.phoneDisplay}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-3xl bg-white/[0.03] border border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-[#c9a962]/10 flex items-center justify-center">
                  <iconify-icon
                    icon="solar:map-point-bold"
                    width="22"
                    height="22"
                    className="text-[#c9a962]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-white/50 text-sm">Address</div>
                  <div className="text-white font-medium">
                    {CONTACT.address.street ? `${CONTACT.address.street}, ` : ''}
                    {CONTACT.address.city}, {CONTACT.address.state}
                    {CONTACT.address.zip ? ` ${CONTACT.address.zip}` : ''}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" size="md" href="/contact#contact-form">
                  Book an appointment
                </Button>
                <Button variant="secondary" size="md" href="/emergency">
                  Emergency info
                </Button>
              </div>
            </div>

            <div className="rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden">
              <div className="aspect-[16/10] flex items-center justify-center">
                <div className="text-center px-6">
                  <iconify-icon
                    icon="solar:map-point-bold"
                    width="36"
                    height="36"
                    className="text-white/20 mb-2"
                    aria-hidden="true"
                  />
                  <p className="text-white/35 text-sm">
                    Map embed / screenshot placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

