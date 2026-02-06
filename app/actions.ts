'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;
const YOUR_EMAIL = 'rumaizahmed1@gmail.com'; // Your email for alerts

// Optional: Add a database or logging service for fallback
// import { logWaitlistEntry } from '@/lib/db'; // Example fallback

export async function handleWaitlist(formData: FormData) {
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;
  const brokerage = (formData.get('brokerage') as string) || 'Not provided';

  // Validate inputs
  if (!email || !name) {
    return { error: 'Email and Name are required.' };
  }

  try {
    // 1. Save the lead to Resend Audience
    await resend.contacts.create({
      email,
      firstName: name,
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    });

    // 2. Notify YOU (internal alert)
    await resend.emails.send({
      from: 'Posts Alerts <onboarding@resend.dev>',
      to: YOUR_EMAIL,
      subject: `🚀 New Waitlist Signup: ${name} | ${brokerage || 'No Brokerage'}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #ffffff; color: #1a1a1a; padding: 40px 20px; }
              .container { max-width: 500px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 32px; }
              .header { font-size: 10px; font-weight: 800; letter-spacing: 0.3em; text-transform: uppercase; color: #94a3b8; margin-bottom: 24px; }
              .title { font-size: 24px; font-weight: 300; margin-bottom: 8px; letter-spacing: -0.02em; }
              .subtitle { font-size: 14px; color: #64748b; margin-bottom: 32px; }
              .field { background-color: #f8fafc; padding: 24px; border-left: 2px solid #000000; margin-bottom: 12px; }
              .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin: 0 0 4px 0; }
              .field-value { font-size: 16px; font-weight: 500; margin: 0; color: #000000; }
              .button { display: inline-block; background-color: #000000; color: #ffffff; padding: 14px 24px; text-decoration: none; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; margin-top: 20px; }
              .footer { font-size: 10px; color: #cbd5e1; text-align: center; font-style: italic; margin-top: 40px; }
              .divider { border: 0; border-top: 1px solid #f1f5f9; margin: 40px 0 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <p class="header">POSTS SYSTEMS / INTERNAL ALERT</p>

              <h2 class="title">New Waitlist Signup</h2>
              <p class="subtitle">An agent has requested early access to Posts.</p>

              <div class="field">
                <p class="field-label">AGENT NAME</p>
                <p class="field-value">${name}</p>
              </div>

              <div class="field">
                <p class="field-label">EMAIL ADDRESS</p>
                <p class="field-value">${email}</p>
              </div>

              <div class="field">
                <p class="field-label">BROKERAGE / TEAM</p>
                <p class="field-value">${brokerage}</p>
              </div>

              <a href="mailto:${email}?subject=Welcome to Posts&body=Hi ${name},%0D%0A%0D%0AThanks for joining the waitlist!%0D%0A%0D%0AWe’ll notify you as soon as early access is available.%0D%0A%0D%0ABest,%0D%0ARumaiz%0D%0AFounder, Posts%0D%0A%0D%0A--%0D%0APosts: The all-in-one real estate marketing system.%0D%0A%0D%0A?utm_source=waitlist&utm_medium=email&utm_campaign=early_access"
                 class="button">
                SEND WELCOME EMAIL
              </a>

              <hr class="divider" />
              <p class="footer">2026 EDITION / EARLY ACCESS PIPELINE</p>
            </div>
          </body>
        </html>
      `,
    });

    // 3. (Optional) Send a confirmation email to the user
    await resend.emails.send({
      from: 'Rumaiz @ Posts <onboarding@resend.dev>',
      to: email,
      subject: `🎉 You're on the Posts Waitlist, ${name}!`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #ffffff; color: #1a1a1a; padding: 40px 20px; }
              .container { max-width: 500px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 32px; }
              .header { font-size: 10px; font-weight: 800; letter-spacing: 0.3em; text-transform: uppercase; color: #94a3b8; margin-bottom: 24px; }
              .title { font-size: 24px; font-weight: 300; margin-bottom: 8px; letter-spacing: -0.02em; }
              .subtitle { font-size: 16px; color: #64748b; margin-bottom: 32px; line-height: 1.5; }
              .cta-button { display: inline-block; background-color: #000000; color: #ffffff; padding: 14px 24px; text-decoration: none; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; margin: 20px 0; }
              .footer { font-size: 10px; color: #cbd5e1; text-align: center; font-style: italic; margin-top: 40px; }
              .divider { border: 0; border-top: 1px solid #f1f5f9; margin: 40px 0 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <p class="header">POSTS / EARLY ACCESS</p>

              <h2 class="title">You're on the list, ${name}!</h2>
              <p class="subtitle">
                Thanks for joining the Posts waitlist. You'll be the first to know when we launch <strong>FollowUp Simple</strong> (our CRM for solo agents) and the rest of the platform.
              </p>

              <p class="subtitle">
                <strong>What happens next?</strong><br />
                1. We’ll notify you when early access is ready.<br />
                2. You’ll get a lifetime discount for being an early adopter.<br />
                3. We’ll schedule a 1-on-1 onboarding call to get you set up.
              </p>

              <a href="https://getposts.app?utm_source=waitlist&utm_medium=email&utm_campaign=confirmation"
                 class="cta-button">
                VISIT OUR SITE
              </a>

              <hr class="divider" />
              <p class="footer">
                Questions? Reply to this email. We’re here to help.<br />
                © 2026 Posts. All rights reserved.
              </p>
            </div>
          </body>
        </html>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error('Waitlist Submission Error:', {
      error: err,
      context: { email, name, brokerage },
    });

    // Fallback: Log to a database or send a Slack alert
    // await logWaitlistEntry({ email, name, brokerage }); // Example fallback

    // Return success to avoid breaking the UI, but log the error
    return { success: true, error: 'Failed to send notification (check logs)' };
  }
}
