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

Forms POST to `/api/contact`, which sends mail via **Nodemailer** using eNom (or any SMTP) settings from environment variables. See **`.env.example`** — copy to `.env.local` for local testing; **never commit passwords**.

- **GitHub Pages** builds are **static only** (no server), so `/api/contact` is **not** on that host. Either:
  1. **Deploy the same repo to [Vercel](https://vercel.com)** (recommended): Vercel sets `VERCEL` during build so Next.js runs in **server mode** and the API route works. Add `SMTP_*` and `RECIPIENT_EMAIL` in the Vercel project **Environment Variables**, or  
  2. Keep GitHub Pages for the site but host the API elsewhere, then set **`NEXT_PUBLIC_CONTACT_API_URL`** at **build time** to the full URL of that API (e.g. `https://your-app.vercel.app/api/contact`) and add your live site origin(s) to **`ALLOWED_ORIGINS`** on the API.

# ortho
