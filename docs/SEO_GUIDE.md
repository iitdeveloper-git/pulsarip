# SEO Guide

## Metadata

Every route sets unique title/description via `buildMetadata()` (`src/lib/seo/metadata.ts`), which:

- Appends `" | PulsarIP"` to non-home titles for consistent branding.
- Sets a canonical URL from `NEXT_PUBLIC_SITE_URL` + the page path.
- Sets `robots: index,follow` by default, `noindex` for `/thank-you` and draft blog posts.
- Sets Open Graph + Twitter card metadata (title/description; image falls back to the auto-generated `opengraph-image.tsx`).

## Structured data (JSON-LD)

Helpers in `src/lib/seo/jsonld.ts`, used across the site:

- **Organization** + **LegalService** + **WebSite** — emitted once in the root layout (`src/app/layout.tsx`).
- **BreadcrumbList** — emitted by the `Breadcrumb` component on every non-home page.
- **Service** + **FAQPage** — emitted by `ServicePageTemplate` on every service detail page.
- **Article** + **FAQPage** — emitted on each blog post (`src/app/insights/[slug]/page.tsx`).
- **ContactPage** — emitted on `/contact`.

No `Review` or `AggregateRating` schema is used anywhere, per the project's no-fake-testimonials rule.

## Sitemap & robots

- `src/app/sitemap.ts` generates `/sitemap.xml` dynamically from the service/blog/industry content arrays — adding a service or publishing a blog post (`isDraft: false`) automatically includes it. Draft posts are excluded.
- `src/app/robots.ts` generates `/robots.txt`, disallowing `/api/` and `/thank-you`, and points to the sitemap.
- `/sitemap-page` is the human-readable sitemap required by the brief, generated from the same content arrays (kept in sync automatically, no manual duplication).

## GEO / AIO / answer-engine optimization

The service-page template's structure — Who needs this / Benefits / Eligibility / Documents required / Step-by-step process / Timeline / FAQs — is deliberately the same "what/who/how/how long" shape that AI answer engines extract well, and it's backed by matching `Service` + `FAQPage` JSON-LD so the same facts are machine-readable, not just visually formatted. Each blog post has `author`, `publishedAt`, `updatedAt`, and `readingTimeMinutes` fields ready to render (and to add a `reviewer` field once legal review is complete).

## What's pending

- **Google Search Console / Bing verification**: set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION` once IITDEVELOPER has access to Search Console for pulsarip.com (see `docs/PENDING_CLIENT_INPUTS.md`).
- **Submit sitemap** to Search Console after DNS/deployment is live: `https://pulsarip.com/sitemap.xml`.
- **Real OG image**: currently auto-generated from `src/app/opengraph-image.tsx` (navy background, PulsarIP wordmark) — swap for branded artwork if the client provides one later.
- **Blog posts remain `noindex` while `isDraft: true`** — flip after legal review (see `docs/LEGAL_REVIEW_REQUIRED.md`).
