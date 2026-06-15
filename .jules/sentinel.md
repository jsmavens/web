## 2025-06-15 - Missing Security Headers in Next.js
**Vulnerability:** The Next.js application was missing standard HTTP security headers (CSP, X-Frame-Options, X-Content-Type-Options, etc.).
**Learning:** Default Next.js setups do not automatically include full security headers, and they must be explicitly configured via `next.config.ts`. Additionally, multiline CSP headers can cause invalid header format errors if newlines aren't stripped.
**Prevention:** Always configure `headers` in `next.config.ts` for new Next.js projects and ensure headers are formatted as a single string.