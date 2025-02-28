/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      AVS_API_URL: process.env.AVS_API_URL,
    },
    images: {
      domains: [], // Add image domains if needed
    },
  };
  
  module.exports = nextConfig;