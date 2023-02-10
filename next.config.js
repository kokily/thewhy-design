/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['image.thewhy.kr', 'd3cz7blqhirvsp.cloudfront.net'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
