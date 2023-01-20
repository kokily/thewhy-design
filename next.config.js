/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['image.thewhy.kr'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
