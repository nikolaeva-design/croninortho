'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Benefits of splints
const benefits = [
  {
    title: 'Bite Support',
    description: 'Splints help support proper jaw positioning and reduce uneven pressure on the bite.',
    icon: 'solar:shield-check-bold',
  },
  {
    title: 'Jaw Comfort',
    description: 'By minimizing strain on the jaw muscles and joints, splints can help improve comfort.',
    icon: 'solar:face-scan-circle-bold',
  },
  {
    title: 'Functional Stability',
    description: 'Splints may be used as part of a broader treatment plan to support long-term oral function.',
    icon: 'solar:layers-bold',
  },
];

// Care instructions
const careInstructions = [
  'Wear your splint as instructed',
  'Clean it regularly following provided instructions',
  'Store it in its case when not in use',
  'Contact our office if the splint becomes uncomfortable or damaged',
];

// FAQs
const faqs = [
  {
    question: 'What is a splint/occlusal?',
    answer: 'A splint (also called an occlusal splint or stabilization splint) is a custom-made oral appliance designed to improve the alignment of your jaw and reduce stress on the temporomandibular joint (TMJ). Unlike nightguards that primarily protect teeth, splints are therapeutic devices that help treat jaw disorders.',
  },
  {
    question: 'How is a splint different from a nightguard?',
    answer: 'While both are worn in the mouth, they serve different purposes. Nightguards protect teeth from grinding damage. Splints are designed to treat jaw problems by repositioning the jaw into a more optimal position, relieving muscle tension, and allowing the TMJ to heal.',
  },
  {
    question: 'How long do I need to wear my splint?',
    answer: 'Treatment duration varies depending on your condition. Some patients wear splints only at night, while others may need them during the day as well. Your orthodontist will create a personalized treatment plan and adjust it based on your progress.',
  },
  {
    question: 'Will a splint fix my TMJ problems permanently?',
    answer: 'Splints are highly effective at managing TMJ symptoms and allowing the joint to heal. Many patients experience significant, lasting improvement. However, some may need ongoing splint therapy to maintain results, especially if the underlying cause (like stress or misalignment) persists.',
  },
  {
    question: 'Are splints comfortable to wear?',
    answer: 'Custom-fitted splints are designed for comfort. There may be an adjustment period of a few days to a week as you get used to wearing it. If discomfort persists, we can make adjustments to improve the fit.',
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

export default function SplintsPage() {
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
            src="/splint-hero.png"
            alt="Custom dental splint for TMJ and bite therapy"
            fill
            className="object-cover object-[right_75%]"
            priority
            quality={100}
            unoptimized
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
                TMJ Therapy
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="text-white">Splints</span>
            </h1>

            {/* Description */}
            <p
              className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Splints are therapeutic appliances designed to support jaw alignment and improve overall bite comfort, providing relief for TMJ disorders.
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

      {/* What Are Splints Section */}
      <section id="info" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium mb-6">
                <iconify-icon
                  icon="solar:health-bold"
                  width="14"
                  height="14"
                  className="text-[#c9a962]"
                />
                Therapeutic Care
              </div>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
                What Are
                <span className="text-white/50 block">Splints?</span>
              </h2>
              <div className="space-y-6 mb-10">
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Splints are removable oral appliances designed to help stabilize the bite and reduce strain on the jaw. They are commonly recommended as part of a comprehensive approach to managing jaw-related concerns and supporting overall oral function.
                </p>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Each splint is custom-made to ensure comfort, proper fit, and effective support.
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
                  src="/splint-types.png"
                  alt="Custom dental splint for jaw therapy"
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

      {/* Benefits of Splints Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Benefits of Splints
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Discover how a custom splint can help relieve jaw pain and improve your overall bite function.
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

      {/* Using and Caring for Your Splint Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/splint-types.png"
                  alt="Proper splint care and maintenance"
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
                <span className="text-white/50 block">Your Splint</span>
              </h2>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-4">
                Proper use and care are important to ensure effectiveness and comfort.
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
                Common questions about splints and TMJ therapy.
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
              Support Jaw Comfort and Function
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Don&apos;t let TMJ pain affect your quality of life. Schedule a consultation to learn how a custom splint can help.
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
                Experiencing jaw pain or TMJ discomfort? Contact us to discuss how a custom splint can provide relief and improve your quality of life.
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
                      placeholder="Tell us about your jaw pain or TMJ symptoms..."
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
