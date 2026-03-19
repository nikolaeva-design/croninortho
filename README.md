# Deploy to GitHub Pages

This project is configured to deploy automatically to GitHub Pages via GitHub Actions.

## One-time setup in GitHub

1. Push this repo to GitHub (default branch: `main`).
2. In GitHub: **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

After that, every push to `main` will deploy.

## Your site URL

- Project Pages: `https://<username>.github.io/<repo-name>/`
- User/Org Pages (repo named `<username>.github.io`): `https://<username>.github.io/`

## Notes

- GitHub Pages serves project sites from a subpath (`/<repo-name>`). `next.config.ts` auto-detects this in GitHub Actions and sets `basePath`/`assetPrefix`.
- `public/.nojekyll` is included so `_next/` assets load correctly.

## Contact form email (SMTP)

Forms need a **live** `/api/contact` handler and **SMTP env vars on that host** (not in GitHub — never commit `.env`). Local: see **`.env.example`** → `.env.local`.

### If the public site is on GitHub Pages (static)

Pages has **no server**, so you must:

1. **Deploy this repo on [Vercel](https://vercel.com)** (Import Project → same GitHub repo). Vercel runs full Next.js, including the API.
2. In Vercel → **Settings → Environment Variables** (Production), add the same values as `.env.example`:  
   `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `RECIPIENT_EMAIL`.  
   Redeploy after saving.
3. Copy your Vercel URL for the API, e.g. `https://<project>.vercel.app/api/contact/` (include trailing slash).
4. On GitHub: **Settings → Secrets and variables → Actions → New repository secret**  
   Name: `NEXT_PUBLIC_CONTACT_API_URL`  
   Value: that full URL from step 3.
5. Push any commit or **re-run** the “Deploy to GitHub Pages” workflow so the static build embeds the secret and forms call Vercel.

CORS defaults already allow `https://nikolaeva-design.github.io` and `croninortho.com`. For another domain, set **`ALLOWED_ORIGINS`** on Vercel (comma-separated).

### If the whole site is on Vercel (custom domain)

Add the same **`SMTP_*` / `RECIPIENT_EMAIL`** variables in Vercel only — no GitHub secret needed.

# ortho
