## 2025-03-01 - Missing Security Headers
**Vulnerability:** Missing standard HTTP security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).
**Learning:** Default Next.js applications do not include security headers by default. Need to explicitly define them in next.config.ts.
**Prevention:** Add a standardized headers configuration in next.config.ts.
