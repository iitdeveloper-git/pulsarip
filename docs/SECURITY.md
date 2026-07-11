# Security

## Implemented

- **Security headers** (`next.config.ts`): `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (camera/mic/geolocation disabled), `Strict-Transport-Security` (2-year max-age, includeSubDomains, preload), and a `Content-Security-Policy` scoped to self + Google Analytics/Clarity/reCAPTCHA origins.
- **CSRF-aware form design**: the contact API only accepts same-origin `fetch` POSTs from the app's own form; no state-changing GET endpoints exist.
- **Honeypot + timing heuristic**: a hidden `website` field and a "submitted <2s after page load" check silently no-op bot submissions in `src/app/api/contact/route.ts` without alerting the bot.
- **Rate limiting**: in-memory sliding-window limiter (`src/lib/security/rate-limit.ts`), 5 requests / 10 minutes per IP, on the contact API. Documented as needing a shared store (Redis) if the app scales to multiple instances.
- **Input validation & sanitization**: every field is validated server-side with Zod (`src/lib/validation/contact.ts`) independent of client-side validation — the API never trusts client input.
- **Safe error messages & logging**: API routes return generic error messages to the client and log only non-sensitive metadata (name/email/service, never full message bodies) to the server console.
- **No secrets in frontend code**: all credentials (SMTP, reCAPTCHA secret) are server-only env vars, never `NEXT_PUBLIC_*`. `.env.example` documents every variable; `.env*` is gitignored.
- **External links**: every `target="_blank"` link in the codebase sets `rel="noopener noreferrer"` (see `LinkButton`, footer social links, developer credit).
- **Docker runtime**: non-root user (`nextjs:nodejs`), minimal Alpine base, standalone Next.js output (no dev dependencies in the runtime image), container `HEALTHCHECK`.

## Known upstream issues (documented, not app-controlled)

`npm audit` reports 4 remaining advisories (3 moderate, 1 high) as of this build, all inside **Next.js's own internal build tooling** (a bundled `postcss`/`esbuild`/`vite` used by Next's dev server and Playwright/Vitest's dev-time tooling) — not in code that ships to production or is reachable by an end user. These will be resolved by upgrading Next.js when a patched release is available; re-run `npm audit` before each deployment and upgrade if a runtime-affecting advisory appears.

## Security checklist (run before each production deploy)

- [ ] `npm audit --omit=dev` shows no unresolved runtime-affecting vulnerabilities
- [ ] `.env` / `.env.local` are not committed (`git status` clean, check `.gitignore`)
- [ ] `RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` set if spam volume exceeds honeypot + rate-limiting effectiveness
- [ ] SMTP credentials are stored as platform secrets, not in a committed file
- [ ] `NEXT_PUBLIC_SITE_URL` matches the real production domain (affects canonical URLs and CSP-adjacent config)
- [ ] TLS/HSTS is active at the Nginx layer (see `docs/deploy/nginx.pulsarip.conf.example`)
- [ ] Health endpoint (`/api/health`) is reachable only internally or is safe to expose (it returns no sensitive data)
- [ ] Rate-limit thresholds in `src/lib/security/rate-limit.ts` are appropriate for expected traffic
