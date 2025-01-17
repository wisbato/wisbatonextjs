import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
//   reactStrictMode: true,
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'backend.wisbato.com',
              pathname: '/public/wisbato/**',
          }
      ]
  }
};

export default nextConfig;