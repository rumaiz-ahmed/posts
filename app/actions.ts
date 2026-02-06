'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;

export async function handleWaitlist(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email) return { error: 'Email is required.' };

  try {
    // 1. Save the Lead to your Resend Audience
    await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    });

    // 2. Notify YOU (The Account Owner)
    await resend.emails.send({
      from: 'Mnd Alerts <onboarding@resend.dev>',
      to: 'rumaizahmed1@gmail.com',
      subject: `🚀 New Lead: ${email}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #ffffff; color: #1a1a1a; padding: 40px 20px;">
          <div style="max-width: 500px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 32px;">
            <p style="font-size: 10px; font-weight: 800; letter-spacing: 0.3em; text-transform: uppercase; color: #94a3b8; margin-bottom: 24px;">
              Mnd Systems / Internal Alert
            </p>
            
            <h2 style="font-size: 24px; font-weight: 300; margin-bottom: 8px; letter-spacing: -0.02em;">
              New Waitlist Entry
            </h2>
            
            <p style="font-size: 14px; color: #64748b; margin-bottom: 32px;">
              A professional has requested founder access to Post by Mnd.
            </p>
            
            <div style="background-color: #f8fafc; padding: 24px; border-left: 2px solid #000000; margin-bottom: 32px;">
              <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin: 0 0 8px 0;">
                Agent Email
              </p>
              <p style="font-size: 18px; font-weight: 500; margin: 0; color: #000000;">
                ${email}
              </p>
            </div>
            
            <a href="mailto:${email}" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 14px 24px; text-decoration: none; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em;">
              Send Follow-up
            </a>
            
            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 40px 0 20px 0;" />
            
            <p style="font-size: 10px; color: #cbd5e1; text-align: center; font-style: italic;">
              2026 Edition / Private Beta
            </p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error('Internal Notification Error:', err);
    return { success: true };
  }
}
