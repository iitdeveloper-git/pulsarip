# Content Guide

All page content lives in `src/content/` as plain TypeScript objects — no CMS, no database. Edit the file, save, and Next.js hot-reloads (or rebuild for production).

## Editing a service page

Each service (trademark, patents, company registration, etc.) is one object in `src/content/services/*.ts` conforming to the `ServiceContent` type (`src/types/index.ts`). Fields map directly to the 17-part page template:

| Field | Renders as |
| --- | --- |
| `title`, `summary` | Hero heading and intro |
| `whoNeedsThis`, `benefits` | Two-column list section |
| `eligibility`, `documentsRequired` | Two-column list section |
| `process` | Numbered step cards |
| `estimatedTimeline`, `governmentFeeNote`, `professionalFeeNote` | Three-card fee/timeline row |
| `commonRisks`, `whyPulsarIP` | Two-column section |
| `faqs` | Accordion + FAQPage schema |
| `relatedServices` | Related-service link row |
| `subServices` (optional) | Sub-service grid, shown only if present |

To add a **new** service: create a content file exporting a `ServiceContent` object, add it to the relevant array in `src/content/services/index.ts`, and add a `page.tsx` under `src/app/services/...` that imports the content and renders `<ServicePageTemplate content={...} path="..." />` (copy any existing service page — they're ~15 lines).

## Editing blog / Insights content

Posts live in `src/content/blog/posts.ts` as `BlogPost` objects. Every post currently ships with `isDraft: true` and a visible "Draft — Pending Legal Review" banner, per the project's content rules (see [LEGAL_REVIEW_REQUIRED.md](LEGAL_REVIEW_REQUIRED.md)). Once a post has been reviewed and approved:

1. Set `isDraft: false`.
2. Confirm `updatedAt` reflects the review date.
3. Draft posts are automatically excluded from `sitemap.xml` and marked `noindex` — flipping `isDraft` to `false` makes them indexable.

## Editing industries

`src/content/industries.ts` — one `IndustryContent` object per industry, each linking to 2–3 relevant services.

## Central business details (`siteConfig`)

Phone, WhatsApp, email, address, business hours, and social links are **not** hardcoded anywhere in components — they all read from `src/config/site.ts`, which reads environment variables (see `.env.example`). Update `.env.local` (dev) or your hosting platform's environment variables (production); no code changes needed. Any value left blank is hidden gracefully rather than shown as an empty placeholder — see each component's conditional rendering (e.g. `Footer`, `ContactPage`, `MobileStickyCallBar`).

## Content rules to preserve

- No fabricated statistics, testimonials, team bios, qualifications, or case studies.
- No guaranteed-outcome language ("100% approval", "fastest in India", etc.) — see `docs/LEGAL_REVIEW_REQUIRED.md`.
- Every service page ends with a disclaimer paragraph (`ServicePageTemplate`) — do not remove it.
- Government/professional fees are always phrased as "varies" / "request a quote" — never a fixed number, since no verified pricing has been provided.
