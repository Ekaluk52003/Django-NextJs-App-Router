// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // Trailing slash is optional, see below
        // http://172.18.0.3 is Django docker IP address used for next JS to talk to",
        destination: `${process.env.DJANGO_DOCKER_URL}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
