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
    default: 'Posts | The All-in-One Real Estate Marketing System',
    template: '%s | Posts',
  },
  description:
    'Posts is the only all-in-one marketing system for real estate agents. Respond to leads instantly, follow up automatically, and post professional content—all in one place.',
  keywords: [
    'real estate CRM',
    'real estate marketing',
    'lead follow-up',
    'real estate automation',
    'AI for real estate',
  ],
  authors: [{ name: 'Rumaiz Ahmed' }],
  creator: 'Rumaiz Ahmed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://getposts.app', // Replace with your domain
    title: 'Posts | The All-in-One Real Estate Marketing System',
    description:
      'Automate your real estate marketing with Posts. Instant lead responses, automatic follow-ups, and professional social media posts—all in one tool.',
    siteName: 'Posts',
    images: [
      {
        url: 'https://getposts.app/og-image.jpg', // Replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Posts: Real Estate Marketing System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Posts | The All-in-One Real Estate Marketing System',
    description:
      'Automate your real estate marketing with Posts. Instant lead responses, automatic follow-ups, and professional social media posts—all in one tool.',
    images: ['https:/posts.app/twitter-image.jpg'], // Replace with your Twitter card image
    creator: '@rumaizahmed', // Replace with your Twitter handle
  },
  icons: {
    icon: [
      { url: '/favicon.ico' }, // Replace with your favicon
      // { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      // { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }, // Replace with your Apple touch icon
    ],
  },
  manifest: '/site.webmanifest', // Replace with your web manifest
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX'); // Replace GTM-XXXXXXX with your GTM ID
            `,
          }}
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Preconnect to Google for GTM */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafafa] text-[#1a1a1a]`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-84EGZ0DKR4" // Replace GTM-XXXXXXX with your GTM ID
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
