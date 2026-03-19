import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog-posts';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';
export const revalidate = false;

type Freq = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

const staticRoutes: { path: string; priority: number; changeFrequency: Freq }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/contact/', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/about/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about/dr-cronin/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about/dr-mo/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about/team/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/patient/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/patient-care/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/services/treatments/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/orthodontics/kids/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/orthodontics/teens/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/orthodontics/adults/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/orthodontics/surgical/', priority: 0.75, changeFrequency: 'yearly' },
  { path: '/services/retainers/', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/services/nightguards/', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/services/splints/', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/aesthetics/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/gallery/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/blog/', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/emergency/', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/privacy/', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms/', priority: 0.3, changeFrequency: 'yearly' },
];

function pageUrl(path: string) {
  if (path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, priority, changeFrequency }) => ({
      url: pageUrl(path),
      lastModified,
      changeFrequency,
      priority,
    })
  );

  const blogEntries: MetadataRoute.Sitemap = Object.keys(blogPosts).map((slug) => ({
    url: pageUrl(`/blog/${slug}/`),
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  return [...pages, ...blogEntries];
}
