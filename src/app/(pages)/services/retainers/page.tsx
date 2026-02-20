'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Types of retainers
const retainerTypes = [
  {
    title: 'Removable Retainers',
    description: 'Removable retainers are custom-made appliances that can be taken out for eating and cleaning. They are commonly worn full-time at first and then transitioned to nighttime wear, depending on individual needs.',
    icon: 'solar:hand-shake-bold',
  },
  {
    title: 'Fixed (Bonded) Retainers',
    description: 'Fixed retainers are thin wires bonded to the back of the teeth. They provide continuous support and are often recommended to maintain alignment in specific areas.',
    icon: 'solar:link-bold',
  },
];

// Care instructions
const careInstructions = [
  'Clean removable retainers regularly as instructed',
  'Avoid exposing retainers to heat',
  'Store removable retainers in their case when not in use',
  'Contact our office if your retainer feels loose, damaged, or uncomfortable',
];

// FAQs
const faqs = [
  {
    question: 'How long do I need to wear my retainer?',
    answer: 'Initially, you\'ll wear your retainer full-time (20-22 hours daily) for the first few months. After that, most patients transition to nighttime-only wear. For best results, we recommend wearing your retainer at night indefinitely to maintain your beautiful smile.',
  },
  {
    question: 'What happens if I stop wearing my retainer?',
    answer: 'Teeth have a natural tendency to shift back toward their original positions. Without consistent retainer use, you may experience relapse - your teeth gradually moving out of alignment. This is why lifelong retention is so important.',
  },
  {
    question: 'How do I clean my retainer?',
    answer: 'For removable retainers, brush gently with a soft toothbrush and lukewarm water daily. You can also use a retainer cleaning solution weekly. Avoid hot water as it can warp the plastic. For fixed retainers, use a floss threader to clean around the wire during your regular oral hygiene routine.',
  },
  {
    question: 'What if my retainer breaks or doesn\'t fit?',
    answer: 'Contact our office immediately. Even a few days without your retainer can allow teeth to shift. We can often create a replacement quickly, but it\'s essential to act fast to avoid any unwanted movement.',
  },
  {
    question: 'Do fixed retainers require special care?',
    answer: 'Yes, you\'ll need to floss carefully around the wire using a floss threader or water flosser. Regular dental cleanings are important to prevent tartar buildup. Avoid biting into very hard foods directly with your front teeth.',
  },
];

// Animation hook for scroll-triggered animations
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Animated section wrapper component
function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function RetainersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll contact you shortly to schedule your appointment.');
  };

  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/retainer-hero.png"
            alt="Clear orthodontic retainer for maintaining your perfect smile"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 mb-8 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#c9a962] animate-pulse-glow" />
              <span className="text-white/90 text-sm font-medium">
                Protect Your Investment
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="text-white">Retainers</span>
            </h1>

            {/* Description */}
            <p
              className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Orthodontic retainers help maintain the final position of your teeth after treatment, preserving your beautiful smile for years to come.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Button variant="primary" size="lg" href="/contact#contact-form">
                Request Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#info"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator p-3 rounded-full hover:bg-white/10 transition-colors"
          onClick={() =>
            document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })
          }
          aria-label="Scroll down"
        >
          <iconify-icon
            icon="solar:alt-arrow-down-linear"
            width="24"
            height="24"
            className="text-white/50"
          />
        </button>
      </section>

      {/* Why Retainers Are Important Section */}
      <section id="info" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium mb-6">
                <iconify-icon
                  icon="solar:shield-check-bold"
                  width="14"
                  height="14"
                  className="text-[#c9a962]"
                />
                Essential Aftercare
              </div>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
                Why Retainers Are
                <span className="text-white/50 block">Important</span>
              </h2>
              <div className="space-y-6 mb-10">
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  After orthodontic treatment, teeth naturally tend to shift over time. Retainers are designed to hold teeth in their new position and protect the results achieved through braces or clear aligner therapy.
                </p>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Wearing retainers as prescribed is essential for maintaining long-term alignment, function, and stability.
                </p>
              </div>
              <a
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 text-white/70 text-sm font-medium hover:text-white transition-colors group/link"
              >
                Request a Consultation
              </a>
            </AnimatedSection>

            {/* Right - Image */}
            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/retainer-types.png"
                  alt="Clear retainer maintaining teeth alignment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Types of Retainers Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Types of Retainers
              </h2>
            </div>
          </AnimatedSection>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {retainerTypes.map((type, index) => (
              <AnimatedSection key={type.title} delay={index * 100}>
                <div className="group h-full">
                  {/* Icon Display */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 group-hover:border-[#c9a962]/30 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Decorative rings */}
                      <div className="absolute w-32 h-32 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute w-24 h-24 rounded-full border border-white/10 group-hover:scale-125 transition-transform duration-500" />
                      {/* Icon container */}
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#c9a962]/20 to-[#c9a962]/5 border border-[#c9a962]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <iconify-icon
                          icon={type.icon}
                          width="40"
                          height="40"
                          className="text-[#c9a962]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4 text-center">
                    {type.title}
                  </h3>
                  <p className="text-white/50 text-sm lg:text-base leading-relaxed text-center">
                    {type.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Caring for Your Retainer Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/retainer-types.png"
                  alt="Proper retainer care and maintenance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </AnimatedSection>

            {/* Right Content */}
            <AnimatedSection delay={200}>
              <h2 className="text-white text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-8">
                Caring for Your
                <span className="text-white/50 block">Retainer</span>
              </h2>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-4">
                Proper care helps extend the life of your retainer and ensures it remains effective.
              </p>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-8">
                General care tips include:
              </p>

              {/* Care Instructions */}
              <ul className="space-y-4 mb-10">
                {careInstructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <iconify-icon
                        icon="solar:check-read-bold"
                        width="14"
                        height="14"
                        className="text-[#c9a962]"
                      />
                    </div>
                    <span className="text-white/70 text-sm lg:text-base leading-relaxed">
                      {instruction}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 text-white/70 text-sm font-medium hover:text-white transition-colors group/link"
              >
                Request a Consultation
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                FAQs
              </h2>
              <p className="text-white/50 text-lg">
                Common questions about retainers and aftercare.
              </p>
            </div>
          </AnimatedSection>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 50}>
                <div className="rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                  >
                    <span className="text-white font-medium pr-4">
                      {faq.question}
                    </span>
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      width="20"
                      height="20"
                      className={`text-white/50 transition-transform duration-300 flex-shrink-0 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 pb-6 text-white/50 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="mt-12 text-center">
              <p className="text-white/50 mb-4">Still have questions?</p>
              <Button variant="secondary" size="md" href="/contact#contact-form">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/cta-consultation-bg.png"
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Protect Your Orthodontic Results
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Don&apos;t let your investment go to waste. Schedule a consultation to discuss the best retainer option for maintaining your beautiful smile.
            </p>
            <Button variant="primary" size="lg" href="/contact#contact-form">
              Request Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Info */}
            <AnimatedSection>
              <span className="text-[#c9a962] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Get in Touch
              </span>
              <h2 className="text-white text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Contact us
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Have questions about retainers or need a replacement? We&apos;re here to help maintain your perfect smile.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:info@ronianortho.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#c9a962]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <iconify-icon
                      icon="solar:letter-bold"
                      width="24"
                      height="24"
                      className="text-[#c9a962]"
                    />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">Email</div>
                    <div className="text-white font-medium">
                      info@ronianortho.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+16045331151"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#c9a962]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <iconify-icon
                      icon="solar:phone-bold"
                      width="24"
                      height="24"
                      className="text-[#c9a962]"
                    />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">Phone</div>
                    <div className="text-white font-medium">(604) 533-1151</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center">
                    <iconify-icon
                      icon="solar:map-point-bold"
                      width="24"
                      height="24"
                      className="text-[#c9a962]"
                    />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">Address</div>
                    <div className="text-white font-medium">
                      Langley, BC, Canada
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white/[0.03] border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <iconify-icon
                      icon="solar:map-point-bold"
                      width="48"
                      height="48"
                      className="text-[#c9a962]/50 mb-2"
                    />
                    <p className="text-white/30 text-sm">Map location</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Form */}
            <AnimatedSection delay={200}>
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5"
              >
                <h3 className="text-white text-2xl font-semibold mb-6">
                  Request Consultation
                </h3>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white/70 text-sm mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-white/70 text-sm mb-2"
                      >
                        Phone Number *
                      </label>
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
                      <label
                        htmlFor="email"
                        className="block text-white/70 text-sm mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white/70 text-sm mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962] transition-colors resize-none"
                      placeholder="Tell us about your retainer needs..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 px-8 py-4 bg-[#c9a962] text-[#0a0a0a] font-semibold rounded-full hover:bg-[#d4b978] transition-colors"
                >
                  Request Consultation
                </button>

                <p className="text-white/40 text-xs text-center mt-4">
                  By submitting, you agree to our privacy policy. We&apos;ll
                  contact you within 24 hours.
                </p>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
