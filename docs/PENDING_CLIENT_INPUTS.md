# Pending Client Inputs

Everything below is a deliberate blank placeholder, not an oversight. The site renders correctly with all of these empty (relevant UI sections hide themselves rather than showing broken/empty placeholders — see `src/config/site.ts`). Fill in via environment variables; no code changes required.

## Contact details
- [ ] Phone number (`NEXT_PUBLIC_PHONE`)
- [ ] WhatsApp number (`NEXT_PUBLIC_WHATSAPP_NUMBER`)
- [ ] Contact email (`NEXT_PUBLIC_CONTACT_EMAIL`)
- [ ] Office address (`NEXT_PUBLIC_OFFICE_ADDRESS`)
- [ ] Business hours (`NEXT_PUBLIC_BUSINESS_HOURS`)

## Social links
- [ ] LinkedIn (`NEXT_PUBLIC_LINKEDIN_URL`)
- [ ] Instagram (`NEXT_PUBLIC_INSTAGRAM_URL`)
- [ ] Facebook (`NEXT_PUBLIC_FACEBOOK_URL`)
- [ ] YouTube (`NEXT_PUBLIC_YOUTUBE_URL`)

## Team / founder details
- [ ] Founder/team names, roles, and **verified** qualifications — do not add without verification (bar registrations, patent agent registrations, etc. are asserted nowhere on the current site)
- [ ] Team photos, if desired for the About page

## Pricing & process
- [ ] Service pricing (currently every service page says "request a quote" / "government fees vary" / "professional fees depend on scope" — intentional per the no-fake-pricing rule)
- [ ] Any fixed-fee packages the client wants to advertise, if applicable

## Testimonials & case studies
- [ ] Real client testimonials (none exist on the site — no fake ones were added)
- [ ] Real case studies, if the client wants to publish any (with client consent)

## Legal & compliance sign-off
- [ ] Legal review and approval of: Privacy Policy, Terms of Use, Cookie Policy, Legal Disclaimer, Accessibility Statement — all currently marked as drafts (see `docs/LEGAL_REVIEW_REQUIRED.md`)
- [ ] Legal review and approval of all 4 draft blog articles before removing their "Draft" badge

## Technical / integrations
- [ ] SMTP credentials for production email (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USERNAME`, `SMTP_PASSWORD`, `SMTP_FROM_EMAIL`) — until set, form submissions are logged to the server console only, not emailed
- [ ] `CONTACT_FORM_RECIPIENT` — inbox that should receive consultation requests
- [ ] Google Analytics 4 ID (`NEXT_PUBLIC_GA_ID`)
- [ ] Microsoft Clarity ID (`NEXT_PUBLIC_CLARITY_ID`)
- [ ] Google Search Console verification (`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`)
- [ ] Bing Webmaster verification (`NEXT_PUBLIC_BING_SITE_VERIFICATION`)
- [ ] reCAPTCHA keys, only if spam becomes a problem beyond honeypot + rate limiting (`RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`)
- [ ] Google Business Profile link, once created (for local SEO, not yet wired into the site)
- [ ] Confirmation that DNS for `pulsarip.com` points at the intended production server (see `docs/DEPLOYMENT.md`)

## Explicitly not fabricated (by design)
No fake statistics, awards, client logos, testimonials, number-one claims, guaranteed-approval language, or invented team bios exist anywhere in this codebase. Do not add any without real, verifiable source data.
