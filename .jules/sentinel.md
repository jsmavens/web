## 2024-05-18 - Missing Security Headers in Next.js

**Vulnerability:** The application was missing basic security headers like `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Strict-Transport-Security`, and `Content-Security-Policy`.
**Learning:** Next.js doesn't apply these by default. They need to be explicitly configured in `next.config.ts` using the `headers()` async function.
**Prevention:** Always ensure standard security headers are added to the Next.js configuration when starting a new project.
