# Project Overview

## What this is

Phase 1 of the PulsarIP website: a premium, conversion-focused lead-generation site for an intellectual-property and corporate legal-services brand. No client portal, payments, document uploads, or login system are included in this phase — see [Phase 2 Recommendations](#phase-2-recommendations) below for what's deliberately deferred.

## Architecture decisions

- **Next.js App Router + TypeScript (strict)** — server components by default; client components (`"use client"`) only where interaction is required (header dropdowns, mobile nav, forms, FAQ accordion, cookie consent, insights search/filter).
- **Local typed content, not a CMS** — `src/content/services`, `src/content/blog`, `src/content/industries` are plain TypeScript objects conforming to shared types in `src/types/index.ts`. This keeps the site fast, type-safe, and git-versioned. A CMS can be layered in later by swapping the content-fetching functions without touching page components.
- **One reusable service-page template** (`src/components/sections/service-page-template.tsx`) renders all 13 IP/business-registration/legal-documentation detail pages from data, per the required 17-part structure (breadcrumb → hero → who-needs-this → benefits → eligibility → documents → process → timeline/fees → risks → why-us → FAQ → related → CTA → disclaimer). Adding a new service is a content file + a 10-line page route, not a new template.
- **Central `siteConfig`** (`src/config/site.ts`) is the single source of truth for phone, WhatsApp, email, address, hours, and social links — all environment-variable driven, all optional, all rendered conditionally so nothing shows as an empty placeholder in production.
- **Form backend uses a provider abstraction** (`src/lib/mail/provider.ts`): logs to console in development / when `SMTP_HOST` is unset, and sends real email via `nodemailer` once SMTP env vars are configured. No code changes needed to go from dev to production email.

## Sitemap (routes)

- `/` `/about` `/services` `/services/intellectual-property` `/services/business-registration`
- `/services/trademark` `/services/patents` `/services/copyright` `/services/design-registration` `/services/ip-advisory`
- `/services/business-registration/{company-registration,llp-registration,opc-registration,proprietorship-registration,msme-udyam-registration,import-export-code,startup-india-registration}`
- `/services/legal-documentation`
- `/startups` `/industries` `/insights` `/insights/[slug]` `/contact` `/thank-you`
- `/privacy-policy` `/terms` `/cookie-policy` `/legal-disclaimer` `/accessibility` `/sitemap-page`
- `/sitemap.xml` `/robots.txt` `/api/contact` `/api/health`
- `not-found` (404), `error` (runtime error boundary), `public/maintenance.html` (static maintenance page for use during deploys)

## Component map

```text
components/
  layout/    Header, MobileNav, Footer, WhatsAppFloatingButton, MobileStickyCallBar,
             CookieConsent, Analytics (GA4/Clarity, env-gated)
  sections/  ServicePageTemplate, ServiceCard, ProcessTimeline, FaqAccordion,
             ArticleCard, CtaBanner, LegalPageLayout
  forms/     ConsultationForm (React Hook Form + Zod, honeypot, UTM capture)
  ui/        Button/LinkButton, Badge, Breadcrumb, Container, Section/SectionHeading
```

## Data flow: contact form

1. `ConsultationForm` (client) validates with `contactFormClientSchema`, captures UTM params + referrer + honeypot on submit.
2. `POST /api/contact` (`src/app/api/contact/route.ts`) re-validates server-side with the full `contactFormSchema`, applies IP-based rate limiting, checks the honeypot and a time-to-submit heuristic, then calls the mail provider.
3. Mail provider sends a notification to `CONTACT_FORM_RECIPIENT` and an acknowledgement to the submitter; optionally posts to `CONTACT_FORM_WEBHOOK_URL` if configured.
4. Client redirects to `/thank-you` (noindex) on success.

## Phase 2 Recommendations

Documented but intentionally not built in Phase 1: client login, application/case tracking, secure document upload, payment gateway, consultation scheduling, legal CRM, automated deadline reminders, IP portfolio dashboard, multi-user company accounts, role-based access control, GNS notification integration, admin CMS, pricing engine, multilingual support. The typed-content architecture and clean API-route boundary (`src/app/api/`) are designed so these can be added incrementally without a rebuild.
