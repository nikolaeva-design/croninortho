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

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 31536000,
    // Next Image Optimization doesn't run on GitHub Pages static hosting.
    unoptimized: true,
    qualities: [75, 85, 90, 100],
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // Strict mode for better development
  reactStrictMode: true,
};

export default nextConfig;
