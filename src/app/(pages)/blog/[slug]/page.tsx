import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components';
import { Metadata } from 'next';

// Blog posts content
const blogPosts: Record<
  string,
  {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    category: string;
    image: string;
    readTime: string;
  }
> = {
  'why-visit-dentist-during-treatment': {
    id: 'why-visit-dentist-during-treatment',
    title: 'Why should I visit the dentist during my treatment?',
    excerpt: 'So, you just got your braces on, and you\'re wondering why you should continue visiting your general dentist since you\'re seeing Dr. Cronin every other month.',
    content: `<p>So, you just got your braces on, and you're wondering why you should continue visiting your general dentist since you're seeing Dr. Cronin every other month. Patients always ask us if they should continue to see their dentist while in orthodontic treatment. In short, the answer is yes.</p>
      
<p>Today, we thought we would share a few reasons why it's crucial to keep up with your regular visits with your dentist in addition to coming in for your regular adjustments at Cronin Ortho.</p>

<h2>Removing Plaque and Tartar</h2>
<p>One of the best reasons to visit your dentist while you undergo orthodontic treatment is to remove plaque and tartar. Having braces provides additional nooks and crannies in which food particles and bacteria can hide. Eventually, plaque and tartar can form around your brackets, bands or other appliances which can lead to cavities. Having your teeth professionally cleaned can help ensure most, if not all, plaque and tartar is removed. Even if you are undergoing clear aligner treatment, dental checkups and cleanings are equally as important.</p>

<h2>Protecting Against Decalcification</h2>
<p>The next reason to visit a dentist is to help protect your teeth from decalcification, or the loss of calcium in your teeth. A potentially serious condition in which white spots on your tooth surfaces, decalcification is irreversible and if left untreated, can lead to cavities. Decalcification is preventable; patients who cut down on sugary sweets and acidic foods, practice good oral hygiene, and visit their dentist regularly can help prevent decalcification.</p>

<h2>Avoiding Treatment Delays</h2>
<p>The final reason we recommend visiting your dentist while you have braces is this: cavities can prolong your treatment. If you are interested in completing your orthodontic treatment on time and without any delays, visiting your dentist every six months or as recommended can go a long way toward making that a realistic goal. Your dentist can provide fluoride treatments or other treatments that strengthen your teeth and protect them from cavities.</p>

<p>Making sure to visit your dentist will help ensure your teeth look their best once your braces come off. If you do not have a general dentist and would like a recommendation on finding one in the Langley area, please give us a call or let us know at your next adjustment appointment!</p>`,
    author: 'Dr. D.G. Cronin',
    date: '2026-03-04',
    category: 'Patient Care',
    image: '/ortho-teentrio-smiling.jpg',
    readTime: '5 min read',
  },
  'water-pick-do-i-need-one': {
    id: 'water-pick-do-i-need-one',
    title: 'What is a water pick and do I need one?',
    excerpt: 'Water picks, sometimes called "oral irrigators," make an excellent addition to your regular home care regimen of brushing and flossing.',
    content: `<p>Water picks, sometimes called "oral irrigators," make an excellent addition to your regular home care regimen of brushing and flossing. Especially helpful to those who suffer from periodontal disease and those patients of ours undergoing orthodontic treatment with full-bracketed braces, water picks use powerful tiny bursts of water to dislodge food scraps, bacteria, and other debris nestled in the crevices of your mouth. Children undergoing orthodontic treatment may find using a water pick is beneficial if their toothbrush bristles tend to get caught on their wires or brackets.</p>

<p>When you use a water pick, you're not only dislodging any particles or debris and bacteria you might have missed when brushing, you are also gently massaging the gums, which helps promote blood flow in the gums and keeps them healthy. While water picks are an excellent addition to your daily fight against gingivitis and other periodontal diseases, they are incapable of fully removing plaque, which is why Dr. Cronin and our team at Cronin Ortho want to remind you to keep brushing and flossing every day.</p>

<p>If you have sensitive teeth or gums and find it uncomfortable to floss daily, water picks are a good alternative to reduce discomfort while effectively cleaning between teeth. Diabetics sometimes prefer water picks to flossing because they don't cause bleeding of the gums, which can be a problem with floss. If you have a permanent bridge, crowns, or other dental restoration, you may find that a water pick helps you keep the area around the restorations clean.</p>

<h2>So how do you choose the right water pick?</h2>
<p>Water picks are available for home or portable use. The home versions tend to be larger and use standard electrical outlets, while portable models use batteries. Aside from the size difference, they work in the same manner, both using pulsating water streams. A more crucial difference between water picks is the ability to adjust the pressure. Most home models will let you choose from several pressure settings, depending on how sensitive your teeth and gums are. Most portable models have only one pressure setting. If you want to use mouthwash or a dental rinse in your water pick, check the label first; some models suggest using water only.</p>

<p>Please give us a call at our Langley office if you have any questions about water picks, or ask Dr. Cronin during your next visit!</p>`,
    author: 'Dr. D.G. Cronin',
    date: '2026-02-25',
    category: 'Patient Care',
    image: '/dental-water-pick.jpg',
    readTime: '6 min read',
  },
  'best-dental-floss': {
    id: 'best-dental-floss',
    title: "What's the best dental floss?",
    excerpt: 'Dental floss is similar to a lot of products that depend mainly on the consumer\'s preference. Fact is, floss comes in a wide variety of flavors, coatings, and other variations.',
    content: `<p>Dental floss is similar to a lot of products that depend mainly on the consumer's preference. Fact is, floss comes in a wide variety of flavors, coatings, and other variations, but all types of floss essentially do the same thing. After all, that is what is most important: that the dental floss you buy is functional—cleaning the areas in between your teeth. If you want to know what the best dental floss is, the answer is the kind that enables you to successfully and regularly clean those areas. So to help you find the right type of floss for you, here are some options.</p>

<h2>Flavored Dental Floss</h2>
<p>Many people that floss prefer a flavored dental floss because it freshens their breath even more than unscented floss. The latter can also take on the smells associated with bacteria in your mouth. And we all know how bad that can be. So, if flavored dental floss is what you prefer, and it allows you to floss your teeth regularly, then it is automatically best for your mouth.</p>

<h2>Flossers</h2>
<p>There are also products on the market called flossers, which usually consist of a plastic instrument with strung floss and a pick on the opposite end. This option can be both effective at cleaning the areas in between your teeth and scraping off plaque. These flossers also come flavored in mint and various other varieties.</p>

<h2>Gentle Dental Floss</h2>
<p>Some people find that typical dental floss is too harsh on their gums. For that reason some companies make floss with soft coatings that are less abrasive on the gums. For the most part these types of floss are just as effective as regular floss, and for those people that require a more sensitive approach to flossing, especially when just starting out, this is the best option.</p>

<p>Of the aforementioned options, it is difficult to name an absolute best type of floss. However, Dr. Cronin and our team say that the type of floss that works best for you, giving you the greatest chance of succeeding at regular flossing, is the best. For more information on floss, contact our Langley office.</p>`,
    author: 'Dr. D.G. Cronin',
    date: '2026-02-18',
    category: 'Patient Care',
    image: '/whats-best-dental-floss_46391726.jpg',
    readTime: '4 min read',
  },
  'team-dark-chocolate': {
    id: 'team-dark-chocolate',
    title: 'Team Dark Chocolate',
    excerpt: 'Valentine\'s Day is the holiday to celebrate all the treasured relationships in your life. Dr. Cronin recommends dark chocolate as a teeth-friendly alternative.',
    content: `<p>Valentine's Day is the holiday to celebrate all the treasured relationships in your life. It's a time to honor love in all shapes and forms with cards, social gatherings, and sometimes even binge eating of sweets.</p>

<p>It's hard to look the other way when grocery stores and pharmacies are invaded with goodies connected to the Valentine's Day theme, and especially if you're on the receiving end of some of these sweets. We get it. In fact, we're all for it!</p>

<p>However, we also support a cavity-free smile. So in the interest of your dental and general health, and because we think it's genuinely tasty, Dr. Cronin recommends an alternative to the Valentine treats you may be accustomed to: dark chocolate.</p>

<h2>Yes, Healthy Chocolate Exists</h2>
<p>Studies have shown that dark chocolate is high in flavonoids, an ingredient found in the cocoa beans used to make chocolate. Flavonoids can help protect the body against toxins, reduce blood pressure, and improve blood flow to the heart and brain.</p>

<p>By opting for dark chocolate rather than milk chocolate, you get to reap these benefits! Pretty sweet, right? Just make sure to stick to high-quality dark chocolates that have undergone minimal processing.</p>

<h2>Dark Chocolate, AKA Protector of Teeth</h2>
<p>Not only does dark chocolate provide some nice benefits for your overall health, it also helps protect your teeth against cavities! According to the Texas A&M Health Science Center, dark chocolate contains high amounts of tannins, another ingredient present in cocoa beans.</p>

<p>Tannins can actually help prevent cavities by interfering with the bacteria that causes them. Think of them as scarecrows for bacteria. They don't always prevail, but isn't it nice to have them there?</p>

<h2>Smooth Never Sticky</h2>
<p>Unlike many popular candies, dark chocolate is less likely to stick in the crevices of your teeth. Chewy, gooey sweets are more likely to hang around in your mouth for longer periods of time, which means they raise the odds of your harboring cavity-creating bacteria.</p>

<p>While some dark chocolates have additives like caramel or marshmallow, it's best to opt for the plain varieties, which are just as delicious. If you're feeling festive, though, a dark chocolate with caramel is still better than a milk chocolate with caramel, so that's the way to go!</p>

<p>While dark chocolate has some pretty sweet benefits, the most important thing to remember (whether you go the dark chocolate route or not), is that moderation is key. That being said, we hope you have fun satisfying your sweet tooth and shopping for treats for your friends and loved ones. Happy Valentine's Day from all of us at Cronin Ortho!</p>`,
    author: 'Dr. D.G. Cronin',
    date: '2026-02-11',
    category: 'Oral Health',
    image: '/team_dark_chocolate_xl_83658465.jpg',
    readTime: '5 min read',
  },
};

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
      title: 'Post Not Found | Cronin Orthodontics Blog',
    };
  }

  return {
    title: `${post.title} | Cronin Orthodontics Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
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
