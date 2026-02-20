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

# ortho
