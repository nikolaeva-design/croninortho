'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components';

const faqs = [
  {
    question: 'When might surgical orthodontics be needed?',
    answer:
      'Surgical orthodontics may be recommended for adults with improper bites or significant aesthetic and functional concerns that can’t be corrected with orthodontics alone. Because jaw growth must be complete before orthognathic surgery, it’s typically considered after growth has finished (often around age 16 for females and 18 for males). When the jaws don’t line up correctly, surgery can align the jaw so braces can place the teeth into an ideal bite.',
  },
  {
    question: 'How do I know if I need orthognathic surgery?',
    answer:
      'Your orthodontist can tell you whether orthognathic surgery is needed as part of your treatment. Based on your bite, jaw position, facial balance, and 3D imaging, we’ll recommend whether braces alone can achieve your goals or if surgery would provide the best result.',
  },
  {
    question: 'How does orthognathic surgery work?',
    answer:
      'An oral and maxillofacial surgeon performs orthognathic surgery in a hospital setting. Surgery can take several hours depending on the case, followed by a typical recovery period of about two weeks. After healing, your orthodontist “fine-tunes” your bite with braces. In many cases, braces are removed within 6–12 months after surgery, and a retainer helps maintain your results long-term.',
  },
  {
    question: 'What are the risks associated with orthognathic surgery?',
    answer:
      'As with any major surgery, there are risks, but orthognathic surgery is a well-established procedure performed for many years. We’ll review your case carefully, coordinate with your surgeon, and answer any questions so you feel informed and comfortable throughout the process.',
  },
  {
    question: 'What are the rewards of orthognathic surgery?',
    answer:
      'For many patients, the biggest reward is a healthier, more stable bite and a smile that looks and feels better for life. Whether you’re correcting a bad bite, malocclusion, or jaw imbalance, surgery can improve function, facial balance, and long-term comfort.',
  },
];

// When surgical orthodontics may be needed
const indications = [
  {
    title: 'Severe Bite Issues',
    description: 'When braces alone cannot correct significant overbite, underbite, or crossbite.',
    icon: 'solar:bolt-circle-bold',
  },
  {
    title: 'Jaw Misalignment',
    description: 'Upper and lower jaws that don\'t align properly, affecting function and appearance.',
    icon: 'solar:ruler-angular-bold',
  },
  {
    title: 'Facial Imbalance',
    description: 'Asymmetry or disproportion that impacts both aesthetics and oral function.',
    icon: 'solar:user-circle-bold',
  },
  {
    title: 'TMJ Disorders',
    description: 'Chronic jaw pain, clicking, or limited movement caused by structural issues.',
    icon: 'solar:health-bold',
  },
];

// Treatment process steps
const processSteps = [
  {
    title: 'Consultation & Planning',
    description: 'Comprehensive evaluation with 3D imaging to determine if surgery is needed.',
    tags: ['3D Analysis', 'Custom Plan'],
  },
  {
    title: 'Pre-Surgical Orthodontics',
    description: 'Braces align your teeth in preparation for surgery (12-18 months).',
    tags: ['Braces Placement', 'Surgery Prep'],
  },
  {
    title: 'Orthognathic Surgery',
    description: 'An oral surgeon repositions your jaw bones. Hospital-based with 2-week recovery.',
    tags: ['Expert Surgeon', '2-Week Recovery'],
  },
  {
    title: 'Post-Surgical Refinement',
    description: 'Final adjustments fine-tune your bite. Braces removed within 6-12 months.',
    tags: ['Bite Perfection', 'Retainer Fitting'],
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
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

export default function SurgicalOrthodonticsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [diagramImageFailed, setDiagramImageFailed] = useState(false);
  const [diagramAttempt, setDiagramAttempt] = useState(0);

  // If the image previously failed (often due to missing asset or dev Fast Refresh preserving state),
  // automatically retry a couple times with a cache-busting query param.
  useEffect(() => {
    if (!diagramImageFailed) return;
    if (diagramAttempt >= 2) return;

    const t = setTimeout(() => {
      setDiagramImageFailed(false);
      setDiagramAttempt((a) => a + 1);
    }, 350);

    return () => clearTimeout(t);
  }, [diagramImageFailed, diagramAttempt]);

  const diagramSrc = `/surgical-orthodontics-diagram.jpg?v=${diagramAttempt}`;

  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/surgical-ortho-hero.png"
            alt="Perfect smile after surgical orthodontics treatment"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
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
              <span className="text-white/90 text-sm font-medium">Advanced Treatment</span>
            </div>

            {/* Title */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="text-white">Surgical Orthodontics</span>
            </h1>

            {/* Description */}
            <p 
              className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Corrective jaw surgery combined with orthodontic treatment for cases where braces alone aren&apos;t enough.
            </p>

            {/* CTA */}
            <div 
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Button variant="primary" size="lg" href="/contact#contact-form">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Surgical Orthodontics Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#c9a962]/6 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[140px]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <AnimatedSection>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
                What is Surgical
                <span className="text-white/50 block">Orthodontics?</span>
              </h2>

              <div className="space-y-6 mb-10">
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Surgical orthodontics, also known as orthognathic surgery, is used to correct severe cases such as improper bites, jaw bone abnormalities, and malocclusion. When the jaws don&apos;t line up correctly and a proper bite can&apos;t be achieved with orthodontic treatment alone, surgery helps reposition the jaw while braces move the teeth into their ideal positions.
                </p>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Oral and maxillofacial surgery is a recognized dental specialty focused on complex craniofacial cases involving the mouth, jaw, face, and skull. If you need surgical orthodontics, your orthodontist works closely with an oral and maxillofacial surgeon so you receive coordinated, expert care from start to finish.
                </p>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                  Because the jaw must be done growing before orthognathic surgery, it&apos;s typically considered after growth is complete (often around age 16 for females and 18 for males). During your evaluation, we&apos;ll review your bite, jaw alignment, and goals to determine whether surgery is recommended.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="primary" size="md" href="/contact#contact-form">
                  Schedule Evaluation
                </Button>
              </div>
            </AnimatedSection>

            {/* Right - Image */}
            <AnimatedSection delay={200}>
              <div className="relative aspect-[4096/3614] rounded-3xl overflow-hidden">
                {!diagramImageFailed ? (
                  <Image
                    key={diagramSrc}
                    src={diagramSrc}
                    alt="Illustration showing jaw alignment and braces as part of surgical orthodontics"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={100}
                    unoptimized
                    onError={() => setDiagramImageFailed(true)}
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center p-6">
                    <div className="text-center">
                      <div className="text-white/70 font-semibold">Illustration coming soon</div>
                      <div className="mt-1 text-sm text-white/45">
                        Add <span className="text-white/60 font-medium">public/surgical-orthodontics-diagram.jpg</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* When is Surgery Needed Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                When It May Be
                <span className="text-white/50 block">Recommended</span>
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Surgery is considered when jaw positioning issues are too significant for braces alone.
              </p>
            </div>
          </AnimatedSection>

          {/* Indications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indications.map((indication, index) => (
              <AnimatedSection key={indication.title} delay={index * 100}>
                <div className="h-full p-6 lg:p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[#c9a962]/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center mb-6">
                    <iconify-icon icon={indication.icon} width="28" height="28" className="text-[#c9a962]" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-3">
                    {indication.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {indication.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                The Treatment
                <span className="text-white/50 block">Process</span>
              </h2>
            </div>
          </AnimatedSection>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-px bg-white/20" />
            
            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.title} delay={index * 100}>
                  <div className="relative group">
                    {/* Step Number Circle */}
                    <div className="relative z-10 w-[120px] h-[120px] mx-auto mb-6 rounded-full bg-[#0a0a0a] border border-white/20 group-hover:border-[#c9a962]/50 transition-all duration-300 flex items-center justify-center">
                      <div className="w-[100px] h-[100px] rounded-full bg-white/[0.03] group-hover:bg-[#c9a962]/10 transition-all duration-300 flex items-center justify-center">
                        <span className="text-[#c9a962] text-4xl font-bold">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-white text-xl font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      {/* Tags */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow connector - Desktop only */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-[60px] -translate-y-1/2 right-0 translate-x-1/2 z-20">
                        <span className="text-[#c9a962] text-2xl font-light">→</span>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                Surgical Orthodontics
                <span className="text-white/50 block">FAQs</span>
              </h2>
              <p className="text-white/50 text-lg">
                Clear answers about timing, surgery, recovery, and what to expect.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 50}>
                <div className="rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-white font-medium pr-4">{faq.question}</span>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Schedule a consultation to find out if surgical orthodontics is right for you.
            </p>
            <Button variant="primary" size="lg" href="/contact#contact-form">
              Book Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
