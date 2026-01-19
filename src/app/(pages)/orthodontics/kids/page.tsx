import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Button } from '@/components';

export const metadata: Metadata = {
  title: 'Kids Orthodontics | Ages 7-12 | CroninOrtho',
  description:
    'Early orthodontic care for children ages 7-12. Growth modification, airway development, and preventive treatment at CroninOrtho.',
};

const benefits = [
  {
    icon: 'solar:health-bold',
    title: 'Growth Modification',
    description:
      'Guide jaw development while your child is still growing for optimal facial balance and bite alignment.',
  },
  {
    icon: 'solar:shield-check-bold',
    title: 'Airway Development',
    description:
      'Address breathing issues early to support healthy sleep patterns and overall development.',
  },
  {
    icon: 'solar:star-bold',
    title: 'Prevention First',
    description:
      'Prevent complex orthodontic issues before they develop, reducing future treatment needs.',
  },
  {
    icon: 'solar:heart-bold',
    title: 'Gentle Approach',
    description:
      'Child-friendly care designed to make orthodontic visits comfortable and stress-free.',
  },
];

const treatmentOptions = [
  {
    title: 'Phase 1 Treatment',
    description:
      'Early intervention to address developing problems while permanent teeth are still coming in.',
    features: ['Palatal expanders', 'Space maintainers', 'Habit appliances'],
  },
  {
    title: 'Growth Appliances',
    description:
      'Custom devices that guide jaw growth and create space for permanent teeth.',
    features: ['Headgear', 'Functional appliances', 'Jaw repositioning'],
  },
  {
    title: 'Limited Braces',
    description:
      'Targeted treatment on specific teeth to correct immediate concerns.',
    features: ['Partial braces', 'Clear aligners', 'Removable appliances'],
  },
];

const faqs = [
  {
    question: 'When should my child first see an orthodontist?',
    answer:
      'The American Association of Orthodontists recommends children have their first orthodontic evaluation by age 7. At this age, enough permanent teeth have emerged to identify potential issues.',
  },
  {
    question: 'Does my child need treatment now, or can we wait?',
    answer:
      'Not every child needs early treatment. After evaluation, we\'ll recommend the best timing for your child. Some issues benefit from early intervention, while others are better addressed once all permanent teeth have erupted.',
  },
  {
    question: 'How long does Phase 1 treatment typically last?',
    answer:
      'Phase 1 treatment usually lasts 12-18 months, followed by a resting period where we monitor growth and development before determining if Phase 2 treatment is needed.',
  },
  {
    question: 'Will my child still need braces as a teenager?',
    answer:
      'Many children who have Phase 1 treatment still benefit from Phase 2 treatment as teenagers, but it\'s typically shorter and less complex than it would have been without early intervention.',
  },
];

export default function KidsOrthodonticsPage() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Gemini_Generated_Image_oymo7foymo7foymo.png"
            alt="Child receiving early orthodontic treatment"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
              <span className="text-accent text-sm font-medium">Ages 7–12</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-white/60 text-sm">Early Intervention</span>
            </div>

            {/* Title */}
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
              Kids
              <span className="text-white/50 block">Orthodontics</span>
            </h1>

            {/* Description */}
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
              Early orthodontic care focused on growth modification, airway
              development, and preventing complex issues later in life.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#contact">
                Book Free Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#benefits"
                icon="solar:arrow-down-linear"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              Why Early Treatment Matters
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Starting orthodontic care at the right time can make a significant
              difference in your child&apos;s dental health and overall
              well-being.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <iconify-icon
                    icon={benefit.icon}
                    width="28"
                    height="28"
                    class="text-accent"
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <div>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Treatment Options
              </h2>
              <p className="text-white/50 text-lg mb-12">
                We offer a range of early orthodontic treatments tailored to
                your child&apos;s specific needs and development stage.
              </p>

              <div className="space-y-8">
                {treatmentOptions.map((option, index) => (
                  <div
                    key={option.title}
                    className="relative pl-8 border-l-2 border-white/10 hover:border-accent/50 transition-colors"
                  >
                    <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#0f0f0f] border-2 border-white/20 flex items-center justify-center text-white/50 text-xs">
                      {index + 1}
                    </span>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {option.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4">
                      {option.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {option.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/kids-ortho.png"
                alt="Child with orthodontic appliance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Common Questions
              </h2>
              <p className="text-white/50 text-lg">
                Everything you need to know about early orthodontic care for
                your child.
              </p>
            </div>

            {/* FAQs */}
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-white text-lg font-medium pr-8">
                      {faq.question}
                    </h3>
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      width="20"
                      height="20"
                      class="text-white/50 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="text-white/50 text-sm leading-relaxed mt-4 pt-4 border-t border-white/5">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0f0f0f]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[#141414]" />

            {/* Content */}
            <div className="relative px-8 lg:px-16 py-16 lg:py-24 text-center">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Give Your Child the Best Start
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
                Schedule a free consultation to learn how early orthodontic care
                can benefit your child&apos;s smile and overall health.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg" href="#contact">
                  Book Free Consultation
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="tel:+1234567890"
                  icon="solar:phone-linear"
                >
                  Call Us Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
