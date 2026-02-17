'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

// Treatment categories and items with detailed descriptions
const treatments = [
  {
    id: 'surgical-orthodontics',
    title: 'Surgical Orthodontics',
    description: 'Surgical orthodontics, also known as orthognathic surgery, combines orthodontic treatment with corrective jaw surgery. This comprehensive approach is recommended when jaw abnormalities are too severe to be corrected with braces or aligners alone.',
    details: 'The process typically involves pre-surgical orthodontic treatment to align the teeth, followed by surgery to reposition the jaw bones, and post-surgical orthodontics for final refinement. This treatment can dramatically improve facial balance, breathing, and bite function, providing both functional and aesthetic benefits that last a lifetime.',
    image: '/surgical-ortho-hero.png',
  },
  {
    id: 'tmj-tmd',
    title: 'TMJ-TMD',
    description: 'Temporomandibular Joint Disorder (TMD) affects the jaw joint and surrounding muscles, causing pain, clicking, and limited jaw movement. Our comprehensive approach addresses both the symptoms and underlying causes of jaw dysfunction.',
    details: 'Treatment may include custom splint therapy to reduce joint stress, bite adjustment procedures, coordination with physical therapy, and pain management strategies. Many patients experience significant relief within weeks of starting treatment, with long-term solutions tailored to their specific condition.',
    image: '/tmj-diagram.jpg',
  },
  {
    id: 'craniofacial-orthodontics',
    title: 'Craniofacial Orthodontics',
    description: 'Specialized orthodontic care for patients with craniofacial conditions, including cleft lip and palate, requires a multidisciplinary approach. We work closely with surgeons, speech therapists, and other specialists to provide comprehensive care.',
    details: 'Treatment planning begins early in life and continues through adulthood, with orthodontic intervention timed to coincide with growth spurts and surgical procedures. Our goal is to optimize both function and aesthetics while supporting the patient through each stage of their journey.',
    image: '/surgical-ortho-procedure.png',
  },
  {
    id: 'clear-braces',
    title: 'Clear Braces',
    description: 'Clear ceramic braces offer an excellent aesthetic alternative to traditional metal braces. Made from tooth-colored or translucent materials, they blend naturally with your teeth while providing the same effective treatment as metal brackets.',
    details: 'Modern ceramic brackets are highly durable and resistant to staining. They work with the same mechanics as metal braces, making them suitable for treating a wide range of orthodontic issues. Many adult patients prefer clear braces for their professional appearance during treatment.',
    image: '/adults-ceramic-braces.png',
  },
  {
    id: 'types-of-appliances',
    title: 'Types of Appliances',
    description: 'Orthodontic appliances are specialized devices used to move teeth, modify jaw growth, or maintain teeth in their corrected positions. Each appliance is custom-made and selected based on the patient\'s specific treatment needs.',
    details: 'Appliances can be fixed (bonded to teeth) or removable, depending on the treatment goals. From expanders that widen the palate to retainers that maintain results, each appliance plays a crucial role in achieving and preserving your perfect smile.',
    image: '/splint-types.png',
  },
  {
    id: 'palatal-expander',
    title: 'Palatal Expander',
    description: 'A palatal expander is a custom-fitted device that gradually widens the upper jaw to create more space for teeth and improve bite alignment. It works by applying gentle pressure to the palatal bones, which are still flexible in growing children.',
    details: 'Treatment typically takes several months, with daily adjustments made at home using a special key. The expansion creates space for crowded teeth, corrects crossbites, and can even improve breathing by widening the nasal passages. Best results are achieved when treatment begins during childhood.',
    image: '/Gemini_Generated_Image_z10gufz10gufz10g.png',
  },
  {
    id: 'metal-braces',
    title: 'Metal Braces',
    description: 'Traditional metal braces remain one of the most effective and versatile orthodontic treatments available. Modern metal braces are significantly smaller, more comfortable, and more efficient than those from previous generations.',
    details: 'Metal braces can treat virtually any orthodontic issue, from simple spacing problems to complex bite corrections. Patients can personalize their treatment with colorful elastic bands, making braces a fun way for kids and teens to express their personality while achieving a beautiful smile.',
    image: '/Gemini_Generated_Image_fzol1hfzol1hfzol.png',
  },
  {
    id: 'self-ligating-braces',
    title: 'Self-Ligating Braces',
    description: 'Self-ligating braces use a specialized clip mechanism instead of elastic bands to hold the archwire in place. This innovative design reduces friction between the bracket and wire, potentially allowing teeth to move more freely.',
    details: 'Benefits may include shorter appointment times (no elastic bands to change), easier cleaning due to fewer components, and potentially reduced treatment duration. Self-ligating systems are available in both metal and clear ceramic options to suit patient preferences.',
    image: '/self-ligating-braces.jpg',
  },
  {
    id: 'clear-aligners',
    title: 'Clear Aligners',
    description: 'Clear aligners, such as Invisalign, are a series of custom-made, virtually invisible plastic trays that gradually move teeth into their desired positions. They offer a discreet alternative to traditional braces for many orthodontic cases.',
    details: 'Aligners are removable, allowing you to eat, brush, and floss without restrictions. Each set of aligners is worn for about two weeks before progressing to the next set. Advanced 3D imaging technology allows patients to preview their expected results before treatment begins.',
    image: '/Clear-Aligners.jpg',
  },
  {
    id: 'tads',
    title: 'TADs',
    description: 'Temporary Anchorage Devices (TADs) are small titanium screws temporarily placed in the jawbone to serve as fixed anchor points for tooth movement. They enable precise control over tooth positioning that was previously difficult or impossible to achieve.',
    details: 'TADs are placed using local anesthesia in a quick, minimally invasive procedure. They allow orthodontists to move specific teeth without affecting others, close extraction spaces efficiently, and correct complex bite issues. Once treatment is complete, TADs are easily removed.',
    image: '/Gemini_Generated_Image_ktmc7dktmc7dktmc.png',
  },
  {
    id: 'braces-diagram',
    title: 'Braces Diagram',
    description: 'Understanding the components of your braces helps you take better care of your orthodontic appliances and communicate effectively with your orthodontic team. Each part plays a specific role in moving your teeth to their ideal positions.',
    details: 'Key components include brackets (attached to each tooth), the archwire (connects brackets and applies pressure), elastic bands or ligatures (hold the wire to brackets), and sometimes rubber bands (correct bite alignment). Regular adjustments ensure continuous progress throughout treatment.',
    image: '/Gemini_Generated_Image_miqdg5miqdg5miqd.png',
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

export default function TreatmentsPage() {
  const scrollToTreatment = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
            <span className="text-white/90 text-sm font-medium">
              Comprehensive Care
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="text-white">Common </span>
            <span className="text-white/50">Treatments</span>
          </h1>

          {/* Description */}
          <p
            className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Explore our comprehensive range of orthodontic treatments. From traditional braces to advanced surgical options, we offer solutions for every smile.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <Button variant="primary" size="lg" href="#treatments">
              Explore Treatments
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/contact#contact-form"
              icon="solar:phone-bold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-[#0f0f0f] border-y border-white/5 sticky top-16 z-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {treatments.slice(0, 11).map((treatment) => (
              <button
                key={treatment.id}
                onClick={() => scrollToTreatment(treatment.id)}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:bg-[#c9a962]/20 hover:text-white hover:border-[#c9a962]/40 transition-all"
              >
                {treatment.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments - Zigzag Layout */}
      <section id="treatments" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <AnimatedSection>
            <div className="text-center mb-20 lg:mb-28">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Treatment Options
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Learn about each treatment option to understand how it can help you achieve your perfect smile.
              </p>
            </div>
          </AnimatedSection>

          {/* Treatments List - Zigzag */}
          <div className="space-y-24 lg:space-y-32">
            {treatments.map((treatment, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <AnimatedSection key={treatment.id}>
                  <div
                    id={treatment.id}
                    className="scroll-mt-48 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                  >
                    {/* Image */}
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/5">
                        {treatment.image ? (
                          <Image
                            src={treatment.image}
                            alt={treatment.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center">
                                <iconify-icon
                                  icon="solar:gallery-bold"
                                  width="40"
                                  height="40"
                                  className="text-[#c9a962]/50"
                                />
                              </div>
                              <p className="text-white/30 text-sm">Image placeholder</p>
                              <p className="text-white/20 text-xs mt-1">{treatment.title}</p>
                            </div>
                          </div>
                        )}
                        {/* Decorative gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      {/* Number badge */}
                      <div className="inline-flex items-center gap-3 mb-6">
                        <span className="text-[#c9a962]/30 text-5xl lg:text-6xl font-light">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
                        {treatment.title}
                      </h3>

                      {/* Description paragraphs */}
                      <div className="space-y-4">
                        <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                          {treatment.description}
                        </p>
                        <p className="text-white/50 text-base lg:text-lg leading-relaxed">
                          {treatment.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,98,0.08),transparent_70%)]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Find the Right Treatment
              <span className="text-white/50 block">For Your Smile</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Not sure which treatment is right for you? Schedule a consultation and our experts will create a personalized plan for your unique needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" href="/contact#contact-form">
                Book Consultation
              </Button>
              <Button variant="secondary" size="lg" href="/orthodontics/kids">
                Kids Orthodontics
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <span className="text-[#c9a962] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Get Started
              </span>
              <h2 className="text-white text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Ready to Begin?
                <span className="text-white/50 block">We&apos;re Here to Help</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Contact us today to schedule your consultation. Our team will evaluate your needs and recommend the best treatment options for you.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
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
                    <div className="text-white font-medium">(604) 533-1151</div>
                    <div className="text-white/50 text-sm">Call us directly</div>
                  </div>
                </a>

                <a
                  href="mailto:info@croninortho.com"
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
                    <div className="text-white font-medium">info@croninortho.com</div>
                    <div className="text-white/50 text-sm">Email us anytime</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a962]/10 flex items-center justify-center">
                    <iconify-icon
                      icon="solar:clock-circle-bold"
                      width="24"
                      height="24"
                      className="text-[#c9a962]"
                    />
                  </div>
                  <div>
                    <div className="text-white font-medium">Mon-Fri: 9am - 6pm</div>
                    <div className="text-white/50 text-sm">Office hours</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Image/Decoration */}
            <AnimatedSection delay={200}>
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#c9a962]/20 to-[#c9a962]/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <iconify-icon
                    icon="solar:health-bold"
                    width="80"
                    height="80"
                    className="text-[#c9a962]/50 mb-6"
                  />
                  <h3 className="text-white text-2xl font-semibold mb-4">
                    Expert Orthodontic Care
                  </h3>
                  <p className="text-white/50 text-sm max-w-xs mx-auto">
                    Our experienced team is dedicated to helping you achieve your best smile with personalized treatment plans.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
