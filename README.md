# CroninOrtho

Next.js site for CroninOrtho.

## Deploy (recommended: Vercel)

1. Import this repo in [Vercel](https://vercel.com).
2. Vercel sets `VERCEL` during build so the app runs with **Route Handlers** (e.g. `/api/contact/` for forms).
3. Add **Environment Variables** in the Vercel project (Production): see **`.env.example`** (`SMTP_*`, `RECIPIENT_EMAIL`). Never commit real secrets.

**Custom domain:** attach it in Vercel → **Settings → Domains**.

## GitHub Pages (optional)

On push to **`master`**, [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds a static `out/` site and deploys it with **GitHub Actions**.

1. Repo → **Settings → Pages** → **Source**: **GitHub Actions**.
2. First run may need the **`github-pages`** environment approved under **Settings → Environments**.
3. **Contact forms** on Pages still need a live API: deploy the same repo on Vercel with SMTP env vars, then add repo secret **`NEXT_PUBLIC_CONTACT_API_URL`** (e.g. `https://your-app.vercel.app/api/contact/`) so the static build points forms at that URL.

## Local development

```bash
npm install
npm run dev
```

Copy **`.env.example`** to **`.env.local`** for local SMTP testing.

## Static export (optional)

Without `VERCEL`, `npm run build` produces a static `out/` folder (no `/api/*`). Use only if you host static files elsewhere; contact forms need a separate API or a full Next.js host.

## Contact form

Production forms require SMTP variables on the **same host** that serves `/api/contact/` (typically Vercel). See **`.env.example`**.
