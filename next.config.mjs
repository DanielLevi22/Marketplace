/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "marketplace-production-334c.up.railway.app",
      },
    ],
  },
  experimental: {
    esmExternals: 'loose',
  },
};

export default nextConfig;
