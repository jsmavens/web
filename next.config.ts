import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // 🛡️ Security: Implement standard HTTP security headers to protect against common web vulnerabilities
  // (e.g., Clickjacking, MIME-sniffing, missing secure transport)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevents clickjacking by blocking rendering in iframes
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevents MIME type sniffing
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Controls what referrer information is included with requests
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains", // Enforces HTTPS connections
          },
        ],
      },
    ];
  },
};

export default nextConfig;
