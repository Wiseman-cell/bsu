import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  // Image optimization — add specific external hosts here when needed
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  // Compression
  compress: true,
  // Disable x-powered-by header
  poweredByHeader: false,
};

export default nextConfig;
