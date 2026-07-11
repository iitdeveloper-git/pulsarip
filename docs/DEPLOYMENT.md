# Deployment Guide

## Overview

The app builds to a Next.js **standalone** server (`output: "standalone"` in `next.config.ts`) — a self-contained Node server bundled with only the dependencies it needs at runtime. This is what the Dockerfile packages and what `docker compose up` runs.

## Option A — Docker (recommended, matches the existing PulsarIP server)

```bash
# 1. Configure environment
cp .env.example .env
# fill in whatever business/SMTP/analytics details are available — see
# docs/PENDING_CLIENT_INPUTS.md for the current list of blanks

# 2. Build and run
docker compose build
docker compose up -d

# 3. Verify
curl http://localhost:3000/api/health
docker compose logs -f web
```

To update after a code change: `docker compose build && docker compose up -d` (add `--force-recreate` if the container doesn't pick up the new image).

**Rollback**: `docker compose down`, then `docker run` (or re-`up`) the previous image tag if you're tagging releases (e.g. `pulsarip-web:v1.0.0`). Keep the last known-good image untagged-latest before rebuilding, or push tagged images to a registry for this to be reliable.

## Option B — Bare Node process (no Docker)

```bash
npm ci
npm run build
node .next/standalone/server.js
# .next/static and public/ must sit alongside server.js — see Dockerfile
# for the exact copy steps if running this manually outside Docker.
```

Run under a process manager (`pm2`, `systemd`) for restart-on-crash in production.

## Option C — Vercel / Netlify

The app is a standard Next.js App Router project and deploys to Vercel with zero config (`vercel --prod`) or Netlify via its Next.js runtime. Set the same environment variables from `.env.example` in the platform's dashboard. `output: "standalone"` is harmless on these platforms (they ignore it and use their own build output).

## Nginx reverse proxy

A ready-to-adapt config is at [`docs/deploy/nginx.pulsarip.conf.example`](deploy/nginx.pulsarip.conf.example). It:

- Redirects HTTP → HTTPS and `www` → apex domain
- Proxies to the Node process on `127.0.0.1:3000`
- Sets long-lived caching for `/_next/static/`
- Reinforces HSTS at the proxy layer

## SSL setup notes

Use Certbot for Let's Encrypt certificates:

```bash
sudo certbot certonly --webroot -w /var/www/certbot -d pulsarip.com -d www.pulsarip.com
```

Certbot's renewal cron/systemd timer handles auto-renewal; the Nginx config already serves the `/.well-known/acme-challenge/` path needed for renewal.

## Domain verification checklist

Do not assume DNS is correct — verify explicitly before go-live:

- [ ] `A`/`AAAA` records for `pulsarip.com` point to the production server IP
- [ ] `CNAME` (or `A`) for `www.pulsarip.com` resolves and redirects to the apex domain (handled by Nginx above)
- [ ] `dig pulsarip.com` / `dig www.pulsarip.com` resolve correctly from an external network
- [ ] TLS certificate covers both `pulsarip.com` and `www.pulsarip.com`
- [ ] `curl -I https://pulsarip.com` returns `200` with the expected security headers

## Health & log inspection

```bash
curl https://pulsarip.com/api/health          # { "status": "ok", "timestamp": "..." }
docker compose logs -f web                     # container logs
docker compose ps                               # container health status
```

## Environment variables

See [`.env.example`](../.env.example) for the full list. `NEXT_PUBLIC_*` variables are inlined into the client bundle at **build time** — changing them requires a rebuild, not just a container restart. Server-only variables (`SMTP_*`, `RECAPTCHA_SECRET_KEY`) can be changed and picked up on container restart alone.

## Backup guidance

This app is stateless (no database) — the only durable state is the codebase (in git) and environment configuration (`.env`, kept outside git). Back up `.env` securely (e.g. in a secrets manager) since it is not recoverable from the repository.

## Pre-deploy checklist

See the completion checklist in [`docs/CLIENT_HANDOVER.md`](CLIENT_HANDOVER.md) and the security checklist in [`docs/SECURITY.md`](SECURITY.md) before every production deploy.
