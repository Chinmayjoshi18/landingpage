/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    AVS_API_URL: process.env.AVS_API_URL, // Ensures API URL is available at runtime
  },
  images: {
    domains: [], // Add image domains if needed
  },
};

module.exports = nextConfig;