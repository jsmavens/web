import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // 🛡️ Security: Prevent Clickjacking
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // 🛡️ Security: Prevent MIME-sniffing
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // 🛡️ Security: Control referrer information
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload", // 🛡️ Security: Enforce HTTPS
          },
        ],
      },
    ];
  },
};

export default nextConfig;
