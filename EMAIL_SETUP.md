# Email setup & client handoff (CroninOrtho)

This guide covers **(1)** connecting website forms to Enom SMTP and **(2)** copy-paste emails you can send the client (form delivery, Google / old links, local search).

---

## Contents

- **Part 1 — Enom SMTP:** [What you need from Enom](#what-you-need-from-enom) through [Support](#support)
- **Client email — form delivery:** [Inquiries to info@](#client-handoff-inquiries-to-info)
- **Client email — search & redirects:** [Langley, Google, old links](#client-handoff-langley-google-old-links)

---

## Part 1: Enom SMTP (forms)

## What You Need from Enom

To make forms work, you need your **SMTP settings** from Enom. Here's how to get them:

### Option 1: Check Enom Control Panel
1. Log into your Enom account: https://www.enom.com
2. Go to your domain management
3. Look for "Email" or "Email Accounts" section
4. Find "Email Settings" or "Configure Email Client"
5. Note down these values:
   - **SMTP Server** (e.g., mail.croninortho.com)
   - **Port** (usually 587 or 465)
   - **Username** (your email: info@croninortho.com)
   - **Password** (your email password)

### Option 2: Contact Enom Support
If you can't find the settings:
- Call Enom support or open a ticket
- Ask: "What are the SMTP settings for my email hosting?"
- Provide your domain: croninortho.com

## Setup Steps

### Step 1: Create Environment File
Create a file named `.env.local` in the root of your project (same folder as package.json):

```env
# SMTP Configuration
SMTP_HOST=mail.croninortho.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@croninortho.com
SMTP_PASS=your_actual_password_here
RECIPIENT_EMAIL=info@croninortho.com
```

**Replace the values with your actual Enom settings.**

### Step 2: Install Dependencies
Run this command in your project folder:

```bash
npm install
```

### Step 3: Test the Form
1. Start your website locally: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check if email arrives at info@croninortho.com

### Step 4: Deploy
When deploying to your live server:
1. Set the same environment variables on your hosting platform
2. Most platforms (Vercel, Netlify, etc.) have an "Environment Variables" section in settings

## Common Enom SMTP Settings

If Enom uses standard settings, try these:

| Setting | Value |
|---------|-------|
| SMTP Host | mail.croninortho.com |
| Port | 587 |
| Security | TLS (STARTTLS) |
| Username | info@croninortho.com |
| Password | (your email password) |

Alternative settings to try if above doesn't work:

| Setting | Value |
|---------|-------|
| SMTP Host | smtp.croninortho.com |
| Port | 465 |
| Security | SSL |
| Username | info@croninortho.com |
| Password | (your email password) |

## Troubleshooting

### "Email service not configured" error
- Your SMTP settings are missing or incorrect
- Check .env.local file exists with correct values
- Verify password is correct

### Emails not arriving
1. Check spam/junk folder
2. Verify SMTP settings with Enom
3. Check if Enom email hosting is active
4. Try different port (587 vs 465)

### "Authentication failed" error
- Wrong password
- Email account not set up in Enom
- Contact Enom to verify email account exists

## Security Notes

- Never commit `.env.local` to git (it's already in .gitignore)
- Keep your email password secure
- Use strong password for email account
- Consider using app-specific password if Enom supports it

## Support

If you need help:
1. Contact Enom for SMTP settings: https://www.enom.com/support
2. Check your Enom hosting control panel documentation
3. Ask your web developer to help configure

---

## Client handoff: inquiries to info@

Form mail is addressed to **`RECIPIENT_EMAIL`** (default `info@croninortho.com`). **`SMTP_USER`** should be a mailbox that exists on your host (often the same **`info@croninortho.com`** for both login and delivery).

After deploy, confirm **Production** on Vercel includes `RECIPIENT_EMAIL=info@croninortho.com` and `SMTP_USER=info@croninortho.com` (or omit `RECIPIENT_EMAIL` to use the code default).

**Copy for the client:**

> Hi — form messages are delivered to **info@croninortho.com**. The mail server login (`SMTP_USER`) is set to the same address so sending and delivery stay in sync.
>
> Please send yourself a quick test from the site and confirm it arrives in the **info@** inbox. If not, let us know and we’ll recheck the server settings.

---

## Client handoff: Langley, Google, old links

**Developer note:** Legacy path redirects are configured in `legacy-redirects.ts` / `next.config.ts` (HTTP redirects on **Vercel** for `croninortho.com`). Static/GitHub Pages builds use soft-redirect pages for key paths. No redirect rules for the client to edit in DNS or cPanel unless the primary domain is not pointed at this deployment.

**Copy for the client:**

> **Subject:** Google search & old links — what we did and what you can do
>
> Hi [Name],
>
> A quick update on two things that often come up after a new site goes live.
>
> **1. City / local search**  
> The site is built around **Langley, BC** as the practice location (address, copy, and SEO metadata). If you use **Google Business Profile**, double-check that the profile address and website URL both point to **https://croninortho.com** so Google keeps everything consistent.
>
> **2. Old links in Google (sitelinks, Invisalign, old pages)**  
> Google may still show **URLs or text from the old website** for a while — that’s normal; their index updates on its own schedule.
>
> On our side we’ve **set up redirects** so common old paths forward to the right pages on the new site instead of a 404, when visitors use **your live main domain** (where the new site is hosted). **You don’t need to configure redirects yourself** — that’s handled in the site deployment.
>
> **Optional, to refresh Google faster:** If you have access to **[Google Search Console](https://search.google.com/search-console)** for `croninortho.com`, you can use **URL inspection** on main pages and **request indexing** (home, About, Contact, Treatments, etc.).
>
> If something still 404s after a few weeks, send us the **exact link** from the search result and we can add a redirect for that path.
>
> Best,  
> [Your name]
