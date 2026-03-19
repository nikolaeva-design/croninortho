/**
 * POST URL for contact forms.
 * - Same-origin `/api/contact` when the app runs as a full Next.js deployment (e.g. Vercel).
 * - Set `NEXT_PUBLIC_CONTACT_API_URL` to the full URL (e.g. https://api.example.com/api/contact)
 *   when the public site is static-only (e.g. GitHub Pages) and the API is hosted elsewhere.
 */
export function getContactFormPostUrl(): string {
  const url = process.env.NEXT_PUBLIC_CONTACT_API_URL?.trim();
  if (url) return url;
  // Match next.config trailingSlash so the browser does not rely on a POST redirect.
  return '/api/contact/';
}
