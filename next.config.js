/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["media-cdn.tripadvisor.com"],
  },
};
// module.exports = nextConfig;
