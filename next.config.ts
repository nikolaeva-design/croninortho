import type { NextConfig } from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
// GitHub Pages (project pages) are served from https://<user>.github.io/<repo>/...
// For user/organization pages (<user>.github.io), repo is typically '<user>.github.io' and basePath should be empty.
const isUserOrOrgPages = !!repoName && repoName.endsWith('.github.io');
const basePath = isGithubActions && repoName && !isUserOrOrgPages ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,

  // Image optimization - disabled for static export but configured for best practices
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    // Next Image Optimization doesn't run on GitHub Pages static hosting.
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
