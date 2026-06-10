## 2026-06-10 - Add Next.js Security Headers
**Vulnerability:** Missing standard HTTP security headers (CSP, X-Frame-Options, Strict-Transport-Security, etc) leaving the app vulnerable to XSS, framing, and MIME-sniffing.
**Learning:** Next.js requires these headers to be configured within the async `headers()` function in `next.config.ts`. CSP syntax required inline scripts and evals for next/gsap, and needs newline removal.
**Prevention:** Ensure `next.config.ts` includes the `headers()` configuration with standard security headers from project inception.
