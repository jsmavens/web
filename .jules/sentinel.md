# Sentinel Journal

## 2024-07-07 - Missing Security Headers
**Vulnerability:** The application was lacking standard HTTP security headers (CSP, X-Frame-Options, etc.).
**Learning:** Next.js applications require explicit configuration of security headers via the `headers()` async function in `next.config.ts`.
**Prevention:** Always add a baseline set of security headers for Next.js applications during initial setup.
