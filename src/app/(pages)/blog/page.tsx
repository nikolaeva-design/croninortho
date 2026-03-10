'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Blog posts
const blogPosts = [
  {
    id: 'why-visit-dentist-during-treatment',
    title: 'Why should I visit the dentist during my treatment?',
    excerpt: 'So, you just got your braces on, and you\'re wondering why you should continue visiting your general dentist since you\'re seeing Dr. Cronin every other month. Patients always ask us if they should continue to see their dentist while in orthodontic treatment. In short, the answer is yes.',
    author: 'Dr. D.G. Cronin',
    date: '2026-03-04',
    category: 'Patient Care',
    image: '/ortho-teentrio-smiling.jpg',
    readTime: '5 min read',
  },
  {
    id: 'water-pick-do-i-need-one',
    title: 'What is a water pick and do I need one?',
    excerpt: 'Water picks, sometimes called "oral irrigators," make an excellent addition to your regular home care regimen of brushing and flossing. Especially helpful to those who suffer from periodontal disease and those patients of ours undergoing orthodontic treatment with full-bracketed braces.',
    author: 'Dr. D.G. Cronin',
    date: '2026-02-25',
    category: 'Patient Care',
    image: '/dental-water-pick.jpg',
    readTime: '6 min read',
  },
  {
    id: 'best-dental-floss',
    title: 'What\'s the best dental floss?',
    excerpt: 'Dental floss is similar to a lot of products that depend mainly on the consumer\'s preference. Fact is, floss comes in a wide variety of flavors, coatings, and other variations, but all types of floss essentially do the same thing.',
    author: 'Dr. D.G. Cronin',
    date: '2026-02-18',
    category: 'Patient Care',
    image: '/whats-best-dental-floss_46391726.jpg',
    readTime: '4 min read',
  },
  {
    id: 'team-dark-chocolate',
    title: 'Team Dark Chocolate',
    excerpt: 'Valentine\'s Day is the holiday to celebrate all the treasured relationships in your life. However, we also support a cavity-free smile. So in the interest of your dental and general health, and because we think it\'s genuinely tasty, Dr. Cronin recommends an alternative to the Valentine treats you may be accustomed to: dark chocolate.',
    author: 'Dr. D.G. Cronin',
    date: '2026-02-11',
    category: 'Oral Health',
    image: '/team_dark_chocolate_xl_83658465.jpg',
    readTime: '5 min read',
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

// Blog post card component
function BlogPostCard({
  post,
  index,
}: {
  post: (typeof blogPosts)[0];
  index: number;
}) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <AnimatedSection delay={index * 50}>
      <Link
        href={`/blog/${post.id}`}
        className="group block h-full rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#c9a962]/30 transition-all duration-300 overflow-hidden flex flex-col"
      >
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] flex-shrink-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 flex flex-col flex-grow">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-3 text-sm text-white/40">
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-white text-xl lg:text-2xl font-semibold mb-3 group-hover:text-[#c9a962] transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-white/50 text-sm lg:text-base leading-relaxed mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>

          {/* Read More */}
          <div className="flex items-center justify-start pt-4 border-t border-white/5 mt-auto">
            <span className="text-[#c9a962] text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Read More
              <iconify-icon
                icon="solar:arrow-right-linear"
                width="16"
                height="16"
              />
            </span>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}

export default function BlogPage() {

  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-20">
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
              Orthodontic Insights
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="text-white">Our </span>
            <span className="text-white/50">Blog</span>
          </h1>

          {/* Description */}
          <p
            className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Expert insights, treatment guides, and helpful tips from our orthodontic team. Stay informed about your oral health and orthodontic care.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
