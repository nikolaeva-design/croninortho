import type { NextConfig } from 'next';
import { LEGACY_REDIRECTS } from './legacy-redirects';

// Vercel sets VERCEL during build → full Next.js app with Route Handlers (/api/*).
// Local / other CI without VERCEL → static export to `out/` (no server-side API).
const isVercel = Boolean(process.env.VERCEL);

// GitHub Actions: project Pages are served from /repo-name/; user/org Pages use repo named *.github.io → no basePath.
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserOrOrgPages = !!repoName && repoName.endsWith('.github.io');
const basePath =
  isGithubActions && repoName && !isUserOrOrgPages ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  output: isVercel ? undefined : 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,

  // Image optimization - disabled for static export but configured for best practices
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    // Unoptimized: required for static export; on Vercel you could enable optimization separately.
    unoptimized: true,
    qualities: [75, 80, 85],
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,

  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@iconify/react'],
  },

  // Strict mode for better development
  reactStrictMode: true,

  /** Old-site URLs (Google sitelinks) → current routes. Primary on Vercel; static hosts use soft redirect pages where added. */
  async redirects() {
    return LEGACY_REDIRECTS.map(({ source, destination, permanent = true }) => ({
      source,
      destination,
      permanent,
    }));
  },

  // Turbopack configuration (silences warning when using webpack config)
  turbopack: {},

  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
            common: {
              minChunks: 2,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
