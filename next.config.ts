import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // 🛡️ Security: Add standard HTTP security headers for defense in depth
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // 🛡️ Security: Prevent clickjacking attacks
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // 🛡️ Security: Prevent MIME-type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // 🛡️ Security: Control referrer information
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // 🛡️ Security: Enforce HTTPS connections
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
