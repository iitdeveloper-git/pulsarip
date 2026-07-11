# Changelog

All notable changes to **PulsarIP** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Full Next.js 14 (App Router) project setup with TypeScript
- Tailwind CSS configuration with custom design tokens
- ESLint and Prettier configuration for code quality
- `Dockerfile` with multi-stage build for optimised production image (`output: standalone`)
- `docker-compose.yml` for local containerised development
- GitHub Actions CI/CD workflows (`.github/`)
- Playwright end-to-end testing setup (`e2e/`, `playwright.config.ts`)
- Vitest unit testing setup (`vitest.config.ts`, `vitest.setup.ts`)
- `src/` — full application source (pages, components, config, styles)
- `public/` — static assets including `maintenance.html` branded page
- `docs/` — project documentation
- `.env.example` — complete environment variable reference with all keys documented
- `CHANGELOG.md` — this file

### Changed
- `.gitignore` — expanded with complete entries for Next.js + TypeScript + Docker:
  - Added `dist/`, `.turbo/`, `.cache/`, `*.log` catch-all, `.eslintcache`, `.stylelintcache`
  - Added `.yarn/install-state.gz`, `Thumbs.db`
- `.dockerignore` — major expansion for production Docker builds:
  - Added `Dockerfile*`, `docker-compose*.yml`, `.github/`, `.claude/`
  - Added dev tooling configs (`.eslintrc*`, `.prettierrc*`, `tsconfig.tsbuildinfo`)
  - Added test tooling (`vitest*`, `playwright.config.ts`, `e2e/`)
  - Added security entries (`*.pem`) and OS artifacts (`.DS_Store`, `Thumbs.db`)
- `.env.example` — added `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` placeholder for GA4

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
