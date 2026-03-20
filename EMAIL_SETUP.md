# Email Setup Guide - Enom SMTP Configuration

This guide explains how to connect your website forms to your Enom email hosting.

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

## Client handoff: inquiries go to `info@`

Form mail is addressed to **`RECIPIENT_EMAIL`** (default `info@croninortho.com`). SMTP may still use `request@` for sending only.

After deploy, confirm **Production** environment variables on the host include `RECIPIENT_EMAIL=info@croninortho.com` (or omit it to use the default).

**Copy for the client:**

> Hi — we’ve updated the website so all contact form and appointment-style messages are delivered to **info@croninortho.com** instead of the request@ mailbox. You can keep request@ only for the technical mail login if your host requires it; that does not change where inquiries land.
>
> Please send yourself a quick test from the site and confirm it arrives in the **info@** inbox. If anything still goes only to request@, let us know and we’ll recheck the server settings.
