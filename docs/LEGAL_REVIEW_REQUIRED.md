# Legal Review Required

The following content is **drafted for structure and SEO purposes only** and must be reviewed and approved by a qualified legal professional before the site is treated as final/production-authoritative. Every item below already carries an in-page banner stating it is a draft.

## Legal policy pages (`src/app/*/page.tsx`, rendered via `LegalPageLayout`)

- [ ] `/privacy-policy` — [src/app/privacy-policy/page.tsx](../src/app/privacy-policy/page.tsx)
- [ ] `/terms` — [src/app/terms/page.tsx](../src/app/terms/page.tsx)
- [ ] `/cookie-policy` — [src/app/cookie-policy/page.tsx](../src/app/cookie-policy/page.tsx)
- [ ] `/legal-disclaimer` — [src/app/legal-disclaimer/page.tsx](../src/app/legal-disclaimer/page.tsx)
- [ ] `/accessibility` — [src/app/accessibility/page.tsx](../src/app/accessibility/page.tsx)

Each page carries a visible amber "draft, pending review" banner (`LegalPageLayout`). Once approved, remove the banner block in `src/components/sections/legal-page-layout.tsx` — or, better, add a per-document `reviewed: boolean` flag if only some documents are approved before others (not currently implemented; flag if needed).

## Blog articles (`src/content/blog/posts.ts`)

All 4 sample articles ship with `isDraft: true`:

- [ ] "What Is a Trademark? A Plain-English Guide"
- [ ] "Provisional vs Complete Patent Application: What's the Difference?"
- [ ] "Copyright for Software: Protecting Your Source Code"
- [ ] "Why Startups Need IP Protection From Day One"

These are intentionally thin outlines (a few paragraphs each), not publish-ready long-form articles — they exist to establish the content architecture (categories, FAQ schema, reading time, related posts) for the client's content team or legal reviewer to expand. Flip `isDraft` to `false` per-post only after legal sign-off (this also makes the post indexable — see `docs/SEO_GUIDE.md`).

## Service page factual claims

Every service page (`src/content/services/*.ts`) was written to avoid guarantees, fixed timelines, and fixed pricing by design — but the underlying process descriptions (e.g. trademark objection vs. opposition, patent provisional vs. complete specification) should be verified by a qualified IP/legal professional for current procedural accuracy before launch, since procedures and government fee structures can change.

## About page

- [ ] Professional Disclaimer section ([src/app/about/page.tsx](../src/app/about/page.tsx)) — confirm wording is sufficient, and confirm no qualifications/registrations should be asserted (none currently are).

## What was deliberately avoided (no review needed, but worth confirming stays that way)

- No guaranteed-outcome language anywhere ("100% approval", "fastest in India", "number one", etc.)
- No fake testimonials, reviews, star ratings, or `Review`/`AggregateRating` schema
- No fabricated case studies, client logos, or statistics
- No asserted professional qualifications, bar registrations, or years-of-experience claims
