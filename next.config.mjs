/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["backend.wisbato.com"],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
