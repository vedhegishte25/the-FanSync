/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "media.api-sports.io",
      "upload.wikimedia.org",
      "www.cricapi.com",
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

module.exports = nextConfig;