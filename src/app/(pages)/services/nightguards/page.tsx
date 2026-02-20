'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Benefits of nightguards
const benefits = [
  {
    title: 'Tooth Protection',
    description: 'Nightguards help prevent excessive tooth wear caused by grinding or clenching during sleep.',
    icon: 'solar:shield-check-bold',
  },
  {
    title: 'Jaw Comfort',
    description: 'By reducing pressure on the jaw, nightguards can help minimize discomfort and muscle tension.',
    icon: 'solar:face-scan-circle-bold',
  },
  {
    title: 'Long-Term Oral Health',
    description: 'Protecting teeth and supporting the bite can help maintain dental health over time.',
    icon: 'solar:heart-pulse-bold',
  },
];

// Care instructions
const careInstructions = [
  'Wear your nightguard as instructed',
  'Clean it regularly according to provided instructions',
  'Store it in its case when not in use',
  'Contact our office if the nightguard feels uncomfortable or damaged',
];

// FAQs
const faqs = [
  {
    question: 'How do I know if I need a nightguard?',
    answer: 'Common signs include waking up with jaw pain, headaches, or tooth sensitivity. Your dentist may also notice worn enamel, cracked teeth, or TMJ symptoms during an exam. If you or a partner notice grinding sounds at night, a nightguard is likely recommended.',
  },
  {
    question: 'Can I get a nightguard at a drugstore?',
    answer: 'While over-the-counter options exist, custom-fitted nightguards from your orthodontist provide superior comfort, durability, and protection. Stock guards often fit poorly and can even cause jaw misalignment. Professional guards are worth the investment.',
  },
  {
    question: 'How long does a nightguard last?',
    answer: 'With proper care, a quality custom nightguard typically lasts 3-5 years. Severe grinders may need replacement sooner. We\'ll check your nightguard condition at regular appointments and let you know when it\'s time for a new one.',
  },
  {
    question: 'Will wearing a nightguard feel uncomfortable?',
    answer: 'There\'s usually an adjustment period of 1-2 weeks as you get used to sleeping with the guard. Custom-fitted nightguards are designed for comfort, and most patients adapt quickly. If discomfort persists, we can make adjustments.',
  },
  {
    question: 'Why do I grind my teeth?',
    answer: 'Bruxism (teeth grinding) can be caused by stress, anxiety, sleep disorders, an abnormal bite, or missing teeth. Sometimes the exact cause is unknown. Regardless of the cause, a nightguard protects your teeth from damage.',
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

export default function NightguardsPage() {
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
            src="/nightguard-hero.png"
            alt="Custom nightguard for protecting teeth during sleep"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
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
                Sleep Protection
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="text-white">Nightguards</span>
            </h1>

            {/* Description */}
            <p
              className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              A nightguard is a removable appliance worn while you sleep, designed to protect your teeth from the effects of grinding or clenching.
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

      {/* What Are Nightguards Section */}
      <section id="info" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium mb-6">
                <iconify-icon
                  icon="solar:moon-bold"
                  width="14"
                  height="14"
                  className="text-[#c9a962]"
                />
                Nighttime Protection
              </div>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
                What Are
                <span className="text-white/50 block">Nightguards?</span>
              </h2>
              <div className="space-y-6 mb-10">
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Nightguards are worn at night to help protect teeth from grinding or clenching and to reduce strain on the jaw. They are commonly recommended for patients who experience jaw discomfort, tooth wear, or symptoms related to nighttime clenching.
                </p>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Each nightguard is custom-made to fit comfortably and support long-term oral health.
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
                  src="/nightguard-hero.png"
                  alt="Custom nightguard protecting teeth"
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

      {/* Benefits of Nightguards Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Benefits of Nightguards
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Discover how a custom nightguard can protect your smile and improve your quality of sleep.
              </p>
            </div>
          </AnimatedSection>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 100}>
                <div className="group h-full text-center">
                  {/* Icon Display */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 group-hover:border-[#c9a962]/30 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Decorative rings */}
                      <div className="absolute w-32 h-32 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute w-24 h-24 rounded-full border border-white/10 group-hover:scale-125 transition-transform duration-500" />
                      {/* Icon container */}
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#c9a962]/20 to-[#c9a962]/5 border border-[#c9a962]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <iconify-icon
                          icon={benefit.icon}
                          width="40"
                          height="40"
                          className="text-[#c9a962]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-white/50 text-sm lg:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Using and Caring for Your Nightguard Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/nightguard-hero.png"
                  alt="Proper nightguard care and storage"
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
                Using and Caring for
                <span className="text-white/50 block">Your Nightguard</span>
              </h2>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-4">
                Proper use and care are important for effectiveness and comfort.
              </p>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-8">
                General guidelines include:
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
                Common questions about nightguards and teeth grinding.
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
              Protect Your Teeth While You Sleep
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Stop grinding damage before it starts. Schedule a consultation to discuss a custom nightguard that fits your needs.
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
                Ready to protect your teeth while you sleep? Contact us for a consultation and learn more about custom nightguards.
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
                      placeholder="Tell us about your concerns with teeth grinding..."
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
