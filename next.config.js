/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    Service_ID: process.env.Service_ID, //userID
    TEMPLATE_ID: process.env.TEMPLATE_ID, //templateID
    Public_ID: process.env.Public_ID,
  },
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
