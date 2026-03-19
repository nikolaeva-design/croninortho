import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components';
import { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';
import { SITE_NAME } from '@/lib/constants';

const blogBrand = `${SITE_NAME} Blog`;

// Generate static params for all blog posts
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: { absolute: `Post Not Found | ${blogBrand}` },
    };
  }

  return {
    title: { absolute: `${post.title} | ${blogBrand}` },
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${blogBrand}`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="bg-[#0a0a0a] -mt-20 min-h-screen pt-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 text-center">
          <h1 className="text-white text-4xl font-semibold mb-4">Post Not Found</h1>
          <p className="text-white/60 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Button variant="primary" href="/blog">
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[35vh] flex items-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9a962]/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-[800px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6 sm:mb-8"
          >
            <iconify-icon icon="solar:arrow-left-linear" width="20" height="20" />
            <span className="text-sm sm:text-base">Back to Blog</span>
          </Link>

          {/* Title */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-5 sm:mb-6 leading-tight break-words">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/50 text-sm sm:text-base">
            <span className="whitespace-nowrap">{formatDate(post.date)}</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="whitespace-nowrap">{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-6 sm:py-8 lg:py-12 bg-[#0a0a0a]">
        <div className="max-w-[800px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-12 lg:py-16 bg-[#0a0a0a]">
        <div className="max-w-[800px] mx-auto px-6 sm:px-8 lg:px-12">
          <article
            className="prose prose-invert prose-lg sm:prose-xl max-w-none
              prose-headings:text-white prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-4
              prose-h1:text-3xl prose-h1:sm:text-4xl prose-h1:lg:text-5xl
              prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:lg:text-4xl prose-h2:mt-10 prose-h2:mb-5
              prose-p:text-white/60 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base sm:prose-p:text-lg
              prose-ul:text-white/60 prose-li:text-white/60 prose-li:mb-2
              prose-strong:text-white prose-strong:font-semibold
              prose-a:text-[#c9a962] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
              prose-img:rounded-xl prose-img:my-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

    </div>
  );
}
