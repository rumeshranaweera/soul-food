/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["media-cdn.tripadvisor.com"],
  },
};
// module.exports = nextConfig;
