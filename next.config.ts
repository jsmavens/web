import type { NextConfig } from "next";

const securityHeaders = [
  // 🛡️ Sentinel: Prevent clickjacking attacks
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // 🛡️ Sentinel: Prevent MIME-type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // 🛡️ Sentinel: Control referrer information
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // 🛡️ Sentinel: Enforce HTTPS connections
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
