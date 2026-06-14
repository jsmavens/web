## 2025-02-18 - Missing Security Headers in Next.js
**Vulnerability:** The application was missing standard HTTP security headers (Content-Security-Policy, X-Content-Type-Options, etc.).
**Learning:** Next.js requires explicit configuration in `next.config.ts` using the `headers()` function to apply security headers; they are not applied by default.
**Prevention:** Always include a baseline set of security headers in `next.config.ts` for all routes (`/(.*)`) when setting up a Next.js project.
