'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components';
import { CONTACT, OFFICE_HOURS } from '@/lib/constants';

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#c9a962]/5 rounded-full blur-[100px] sm:blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#c9a962]/5 rounded-full blur-[80px] sm:blur-[120px]" />
        </div>

        {/* Content */}
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 w-full text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 mb-6 sm:mb-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a962] animate-pulse-glow" />
            <span className="text-white/90 text-xs sm:text-sm font-medium">
              Get In Touch
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-4 sm:mb-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="text-white">Contact </span>
            <span className="text-white/50">Us</span>
          </h1>

          {/* Description */}
          <p
            className="text-white/60 text-sm sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Have questions or ready to start your smile journey? We&apos;d love
            to hear from you. Fill out the form below and we&apos;ll get back to
            you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-12 sm:py-16 lg:py-24 bg-[#0a0a0a] relative overflow-hidden scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            {/* Form */}
            <AnimatedSection>
              <div className="rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 p-5 sm:p-8 lg:p-10">
                <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
                  Send us a message
                </h2>
                <p className="text-white/50 text-sm sm:text-base mb-6 sm:mb-8">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center mx-auto mb-6">
                      <iconify-icon
                        icon="solar:check-circle-bold"
                        width="40"
                        height="40"
                        className="text-[#c9a962]"
                      />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-white/50 mb-6">
                      Thank you for reaching out. We&apos;ll be in touch soon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#c9a962] hover:text-[#d4b872] transition-colors text-sm font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* First Name */}
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-white/70 text-sm font-medium mb-2"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962]/50 focus:ring-1 focus:ring-[#c9a962]/50 transition-all"
                          placeholder="John"
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-white/70 text-sm font-medium mb-2"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962]/50 focus:ring-1 focus:ring-[#c9a962]/50 transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white/70 text-sm font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962]/50 focus:ring-1 focus:ring-[#c9a962]/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-white/70 text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a962]/50 focus:ring-1 focus:ring-[#c9a962]/50 transition-all resize-none"
                        placeholder="Tell us about your orthodontic needs or ask any questions..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#c9a962] hover:bg-[#d4b872] text-[#0a0a0a] font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={100}>
              <div className="space-y-4 sm:space-y-8">
                {/* Phone */}
                <div className="group rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 p-4 sm:p-6 transition-all duration-200 hover:border-[#c9a962]/30 hover:bg-[#c9a962]/[0.05]">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center shrink-0">
                      <iconify-icon
                        icon="solar:phone-bold"
                        width="20"
                        height="20"
                        className="text-[#c9a962] sm:w-6 sm:h-6"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Phone</h3>
                      <a
                        href={`tel:${CONTACT.phone}`}
                        className="text-white/60 text-sm sm:text-base hover:text-[#c9a962] transition-colors"
                      >
                        {CONTACT.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 p-4 sm:p-6 transition-all duration-200 hover:border-[#c9a962]/30 hover:bg-[#c9a962]/[0.05]">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center shrink-0">
                      <iconify-icon
                        icon="solar:letter-bold"
                        width="20"
                        height="20"
                        className="text-[#c9a962] sm:w-6 sm:h-6"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Email</h3>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-white/60 text-sm sm:text-base hover:text-[#c9a962] transition-colors break-all"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="group rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 p-4 sm:p-6 transition-all duration-200 hover:border-[#c9a962]/30 hover:bg-[#c9a962]/[0.05]">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center shrink-0">
                      <iconify-icon
                        icon="solar:map-point-bold"
                        width="20"
                        height="20"
                        className="text-[#c9a962] sm:w-6 sm:h-6"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Location</h3>
                      <p className="text-white/60 text-sm sm:text-base">
                        {CONTACT.address.street}, {CONTACT.address.city}, {CONTACT.address.state} {CONTACT.address.zip}, {CONTACT.address.country}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center shrink-0">
                      <iconify-icon
                        icon="solar:clock-circle-bold"
                        width="20"
                        height="20"
                        className="text-[#c9a962] sm:w-6 sm:h-6"
                      />
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">Office Hours</h3>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    {Object.entries(OFFICE_HOURS).map(([day, hours]) => (
                      <div
                        key={day}
                        className="flex justify-between text-xs sm:text-sm"
                      >
                        <span className="text-white/50 capitalize">{day}</span>
                        <span
                          className={
                            hours === 'Closed'
                              ? 'text-white/30'
                              : 'text-white/70'
                          }
                        >
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">
              Prefer to Call?
            </h2>
            <p className="text-white/60 text-sm sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10">
              Our friendly team is here to help. Give us a call during office
              hours and we&apos;ll be happy to assist you.
            </p>
            <Button
              variant="primary"
              size="lg"
              href={`tel:${CONTACT.phone}`}
            >
              Call us {CONTACT.phoneDisplay}
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
