# PulsarIP

Premium intellectual-property and corporate legal-services website for **PulsarIP** — built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

> Domain: https://pulsarip.com · Client: Lucky · Built & maintained by [IITDEVELOPER](https://iitdeveloper.com/)

See [`docs/`](docs/) for the full documentation set, including [`docs/CLIENT_HANDOVER.md`](docs/CLIENT_HANDOVER.md) and [`docs/PENDING_CLIENT_INPUTS.md`](docs/PENDING_CLIENT_INPUTS.md) for what's left before go-live.

## Tech stack

- **Framework**: Next.js 15 (App Router, Server Components), React 19, TypeScript (strict)
- **Styling**: Tailwind CSS, `@tailwindcss/typography`
- **Forms**: React Hook Form + Zod
- **Icons/Motion**: Lucide, Framer Motion (light use only)
- **Content**: Local typed TypeScript content files (`src/content/`) — no CMS dependency for v1
- **Testing**: Vitest (unit/component), Playwright (end-to-end)
- **Deployment**: Docker (standalone Next.js output), Nginx reverse-proxy sample, GitHub Actions CI

## Local development

```bash
npm install
cp .env.example .env.local   # fill in what you have; blanks are handled gracefully
npm run dev                   # http://localhost:3000
```

## Quality checks

```bash
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit (strict mode)
npm run test         # Vitest unit/component tests
npm run build        # Production build
npm run test:e2e     # Playwright end-to-end tests (builds + starts the app automatically)
```

## Production build & run (without Docker)

```bash
npm run build
npm run start        # next start, or see Docker section below for the standalone runner
```

## Docker

```bash
docker compose build
docker compose up -d
curl http://localhost:3000/api/health
```

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for the full production deployment checklist (SSL, Nginx, domain verification, rollback).

## Project structure

```text
src/
  app/            # Next.js App Router routes (pages, layouts, API routes)
  components/      # layout/ sections/ forms/ ui/ — reusable UI
  content/         # Typed content: services, blog posts, industries
  config/          # siteConfig (central placeholders) + navigation
  lib/             # validation/ mail/ seo/ security/ utils
  types/           # Shared TypeScript types
e2e/               # Playwright end-to-end tests
docs/              # Handover, deployment, SEO, security, content docs
```

## Key documents

| Document | Purpose |
| --- | --- |
| [docs/PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md) | Architecture, sitemap, component map |
| [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) | How to edit/add service and blog content |
| [docs/SEO_GUIDE.md](docs/SEO_GUIDE.md) | Metadata, structured data, sitemap strategy |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Docker, Nginx, SSL, rollback, health checks |
| [docs/SECURITY.md](docs/SECURITY.md) | Security checklist and known upstream issues |
| [docs/CLIENT_HANDOVER.md](docs/CLIENT_HANDOVER.md) | What's delivered, what the client owns next |
| [docs/PENDING_CLIENT_INPUTS.md](docs/PENDING_CLIENT_INPUTS.md) | Every blank placeholder to fill before launch |
| [docs/LEGAL_REVIEW_REQUIRED.md](docs/LEGAL_REVIEW_REQUIRED.md) | Content requiring qualified legal sign-off |
| [docs/TEST_REPORT.md](docs/TEST_REPORT.md) | Latest QA results |

## License / usage

Proprietary — built for PulsarIP by IITDEVELOPER. Not for redistribution.
