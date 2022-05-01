/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextConfig = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "dev-to-uploads.s3.amazonaws.com",
      "victoria.dev",
      "149695847.v2.pressablecdn.com",
      "i.scdn.co",
    ],
    formats: ["image/avif", "image/webp"],
  },
});

module.exports = nextConfig;
