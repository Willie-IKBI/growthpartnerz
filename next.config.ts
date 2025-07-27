import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard configuration for Vercel deployment
  reactStrictMode: true,
  // Ensure proper static generation
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Disable problematic features
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
