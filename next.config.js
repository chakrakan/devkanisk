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
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact in production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }
    return config;
  },
});

module.exports = nextConfig;
