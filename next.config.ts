import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Image optimization
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 31536000,
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // Strict mode for better development
  reactStrictMode: true,
};

export default nextConfig;
