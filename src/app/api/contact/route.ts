import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration for Enom SMTP
// You need to get these settings from your Enom hosting control panel
const SMTP_CONFIG = {
  host: process.env.SMTP_HOST || 'mail.croninortho.com', // Enom SMTP server
  port: parseInt(process.env.SMTP_PORT || '587'), // Usually 587 (TLS) or 465 (SSL)
  secure: process.env.SMTP_SECURE === 'true' || false, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER || 'info@croninortho.com', // Your Enom email address
    pass: process.env.SMTP_PASS || '', // Your Enom email password
  },
};

// Recipient email where form submissions will be sent
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'info@croninortho.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message, formType } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport(SMTP_CONFIG);

    // Verify SMTP connection
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP Connection Error:', error);
      return NextResponse.json(
        { error: 'Email service not configured. Please check SMTP settings.' },
        { status: 500 }
      );
    }

    // Format email content
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

    // Send email
    const info = await transporter.sendMail({
      from: `"Cronin Ortho Website" <${SMTP_CONFIG.auth.user}>`,
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
              <td style="padding: 10px; background: #f5f5f5;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #fff; font-weight: bold;">Email:</td>
              <td style="padding: 10px; background: #fff;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; background: #f5f5f5;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #fff; font-weight: bold;">Form Type:</td>
              <td style="padding: 10px; background: #fff;">${formType || 'General Contact'}</td>
            </tr>
          </table>
          
          <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #c9a962; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999;">
            <p>Submitted from: croninortho.com</p>
            <p>Date: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
