import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    // Serve AVIF first, then WebP, before falling back to the original format.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
