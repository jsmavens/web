import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // 🛡️ Sentinel: Prevent clickjacking attacks
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // 🛡️ Sentinel: Prevent MIME-sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // 🛡️ Sentinel: Control referrer information sent
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // 🛡️ Sentinel: Enforce HTTPS connections
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
