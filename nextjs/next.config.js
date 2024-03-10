// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // Trailing slash is optional, see below
        // destination: "http://127.0.0.1:8000/api/:path*",
        // http://172.18.0.2 is Django docker IP address used for next JS to talk to",
        destination: "http://172.18.0.2:8000/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
