/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    PRIVATE_ENV: process.env.PRIVATE_ENV,
  },
};

module.exports = nextConfig;
