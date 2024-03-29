/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    child-src *.youtube.com *.google.com *.twitter.com;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

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
    formats: ["image/webp", "image/avif"],
  },
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
});

module.exports = nextConfig;
