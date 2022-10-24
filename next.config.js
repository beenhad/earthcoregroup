/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/commercial',
        destination: '/residential',
        permanent: false,
      },
      {
        source: '/intown-fix',
        destination: '/residential',
        permanent: false,
      },
      {
        source: '/environmental',
        destination: '/residential',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
