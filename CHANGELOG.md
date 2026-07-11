# Changelog

All notable changes to **PulsarIP** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Full Next.js 14 (App Router) project setup with TypeScript
- Tailwind CSS configuration with custom design tokens
- `Dockerfile` with multi-stage build for optimised production image (`output: standalone`)
- `docker-compose.yml` for local containerised development
- GitHub Actions CI/CD workflows (`.github/`)
- Playwright end-to-end testing setup (`e2e/`, `playwright.config.ts`)
- Vitest unit testing setup (`vitest.config.ts`, `vitest.setup.ts`)
- `src/` — full application source (pages, components, config, styles)
- `public/` — static assets including `maintenance.html` branded page
- `docs/` — project documentation
- `.env.example` — complete environment variable reference with all keys documented
- `netlify.toml` — Netlify configuration for Next.js App Router SSR builds and runtime
- `CHANGELOG.md` — this file
- **Advocate Lucky Singh** founder section on About page with Person JSON-LD schema
- Floating Call (yellow) and WhatsApp (green) buttons with pulse animations and hover scaling matching reference design
- Business structure comparison table (Proprietorship, OPC, LLP, Private Limited) on business registration overview page

### Changed
- `.gitignore` — expanded with complete entries for Next.js + TypeScript + Docker
- `.dockerignore` — major expansion for production Docker builds
- `.env.example` — added `NEXT_PUBLIC_GA_ID` placeholder
- `next.config.ts` — removed `output: "standalone"` to support Netlify builds
- `src/components/layout/analytics.tsx` — loaded GA4 using `beforeInteractive` strategy in `<head>` so Google's crawler detects it immediately
- `src/app/insights/page.tsx` — filtered out draft articles from the public listing
- `src/app/contact/page.tsx` — removed fallback TBD strings, only showing contact cards when environment variables are set
- `src/lib/seo/jsonld.ts` — enhanced `Organization` and `LegalService` structured data
- `src/components/layout/whatsapp-button.tsx` and `mobile-call-bar.tsx` — converted to server components (removed `"use client"`) to prevent hydration flash/disappearing buttons

### Removed
- `index.html` — replaced by Next.js App Router pages

---

## [0.1.0] — 2026-07-11

### Added
- Initial project scaffold and first commit
- Basic `index.html` placeholder page
- `README.md` with project overview

---

[Unreleased]: https://github.com/iitdeveloper-git/pulsarip/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/iitdeveloper-git/pulsarip/releases/tag/v0.1.0
