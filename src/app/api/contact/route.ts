import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function defaultAllowedOrigins(): string[] {
  const raw =
    process.env.ALLOWED_ORIGINS ||
    [
      'http://localhost:3000',
      'https://croninortho.com',
      'https://www.croninortho.com',
      // GitHub Pages (project site still sends this origin, without repo path)
      'https://nikolaeva-design.github.io',
    ].join(',');
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function corsHeaders(request: NextRequest): HeadersInit {
  const origin = request.headers.get('origin');
  const allowed = defaultAllowedOrigins();
  if (!origin || !allowed.includes(origin)) {
    return {};
  }
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function assertOriginAllowed(request: NextRequest): NextResponse | null {
  const origin = request.headers.get('origin');
  if (!origin) return null;
  if (defaultAllowedOrigins().includes(origin)) return null;
  return NextResponse.json({ error: 'Origin not allowed' }, { status: 403 });
}

function smtpTransport() {
  const pass = process.env.SMTP_PASS?.trim();
  if (!pass) {
    return { error: 'SMTP is not configured (missing SMTP_PASS).' } as const;
  }

  const host = process.env.SMTP_HOST?.trim() || 'mail.enom.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure =
    process.env.SMTP_SECURE === 'true' ||
    (process.env.SMTP_SECURE !== 'false' && port === 465);

  const user =
    process.env.SMTP_USER?.trim() || 'request@croninortho.com';

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    ...(port === 587 && !secure
      ? { requireTLS: true, tls: { minVersion: 'TLSv1.2' as const } }
      : {}),
  });

  return { transporter, user } as const;
}

const RECIPIENT_EMAIL =
  process.env.RECIPIENT_EMAIL?.trim() || 'request@croninortho.com';

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');
  const allowed = defaultAllowedOrigins();
  if (origin && !allowed.includes(origin)) {
    return new NextResponse(null, { status: 403 });
  }
  return new NextResponse(null, { status: 204, headers: corsHeaders(request) });
}

export async function POST(request: NextRequest) {
  const blocked = assertOriginAllowed(request);
  if (blocked) return blocked;

  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message, formType } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400, headers: corsHeaders(request) }
      );
    }

    const smtp = smtpTransport();
    if ('error' in smtp) {
      console.error(smtp.error);
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 503, headers: corsHeaders(request) }
      );
    }

    const safeFirst = escapeHtml(String(firstName));
    const safeLast = escapeHtml(String(lastName));
    const safeEmail = escapeHtml(String(email));
    const safePhone = escapeHtml(String(phone || 'Not provided'));
    const safeFormType = escapeHtml(String(formType || 'General Contact'));
    const safeMessageHtml = escapeHtml(String(message)).replace(/\n/g, '<br>');

    const emailContent = `
New Contact Form Submission
============================

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Form Type: ${formType || 'General Contact'}

Message:
--------
${message}

============================
Submitted from: croninortho.com
Date: ${new Date().toLocaleString()}
    `.trim();

    await smtp.transporter.sendMail({
      from: `"Cronin Ortho Website" <${smtp.user}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Contact Form: ${firstName} ${lastName}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e5a8a; border-bottom: 2px solid #c9a962; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 10px; background: #f5f5f5;">${safeFirst} ${safeLast}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #fff; font-weight: bold;">Email:</td>
              <td style="padding: 10px; background: #fff;"><a href="mailto:${encodeURIComponent(String(email))}">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; background: #f5f5f5;">${safePhone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #fff; font-weight: bold;">Form Type:</td>
              <td style="padding: 10px; background: #fff;">${safeFormType}</td>
            </tr>
          </table>
          <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #c9a962; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${safeMessageHtml}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999;">
            <p>Submitted from: croninortho.com</p>
            <p>Date: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200, headers: corsHeaders(request) }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500, headers: corsHeaders(request) }
    );
  }
}
