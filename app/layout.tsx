import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Simple Follow Up | CRM for Solo Real Estate Agents',
    template: '%s | Simple Follow Up',
  },
  description:
    'The dead-simple CRM for solo real estate agents. Automatic follow-up reminders on days 1, 3, 7, 14, 30, 90. Never lose a deal to forgotten follow-ups. $19/month.',
  keywords: [
    'real estate CRM',
    'solo agent CRM',
    'lead follow-up',
    'real estate follow up tool',
    'simple CRM for realtors',
  ],
  authors: [{ name: 'Rumaiz Ahmed' }],
  creator: 'Rumaiz Ahmed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mndly.netlify.app', // Your actual URL
    title: 'Simple Follow Up | Never Forget to Follow Up Again',
    description:
      'Automatic follow-up reminders for solo real estate agents. Days 1, 3, 7, 14, 30, 90. Join the waitlist for 50% off for life.',
    siteName: 'Simple Follow Up',
    images: [
      {
        url: 'https://mndly.netlify.app/og-image.jpg', // You need to create this
        width: 1200,
        height: 630,
        alt: 'Simple Follow Up: CRM for Solo Agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simple Follow Up | CRM for Solo Real Estate Agents',
    description:
      'Never forget to follow up again. Automatic reminders. $9.50/month for waitlist members.',
    images: ['https://mndly.netlify.app/twitter-image.jpg'],
    creator: '@rumaizahmed',
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-84EGZ0DKR4"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-84EGZ0DKR4');
            `,
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafafa] text-[#1a1a1a]`}
      >
        {children}
      </body>
    </html>
  );
}
