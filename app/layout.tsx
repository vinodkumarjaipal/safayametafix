// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script'; // ✅ Analytics ke liye import
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const siteUrl = 'https://safayametafix.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL('https://safayametafix.vercel.app'),
  title: {
    default: 'SafayaMetaFix | Remove Video Metadata Online Free',
    template: '%s | SafayaMetaFix',
  },
  description:
    'Remove video metadata online free with FFmpeg WASM. 100% client-side processing, zero uploads, zero server logs, and no account required.',
  keywords: [
    'remove video metadata online free',
    'video metadata remover',
    'ffmpeg wasm metadata remover',
    'strip exif from video online',
    'privacy first video tool',
    'client side video processing',
    'zero log video sanitizer',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'SafayaMetaFix',
    title: 'SafayaMetaFix | Remove Video Metadata Online Free',
    description:
      'Privacy-first FFmpeg WASM scrubber. Process videos locally in your browser with zero uploads and zero server logs.',
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'SafayaMetaFix privacy-first video metadata scrubber',
      },
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'SafayaMetaFix fallback Open Graph preview image',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafayaMetaFix | Remove Video Metadata Online Free',
    description:
      '100% client-side FFmpeg WASM video metadata remover. No upload. No account. Zero server logs.',
    images: [`${siteUrl}/twitter-image.png`, `${siteUrl}/twitter-image.jpg`],
  },
  verification: {
    // ✅ Search Console Code
    google: '8K9QiHOKyqqWCSdpES_6gXKNys1TknXvjDQy1iy8hRY',
  },
};

// ... (Baaki neeche ka aapka RootLayout function same rahega)
export default async function RootLayout({ children }: { children: ReactNode }) {
  const nonce = (await headers()).get('x-nonce') ?? undefined;
  const bingVerification = process.env.NEXT_PUBLIC_BING_WEBMASTER_VERIFICATION;

  return (
    <html lang="en" className="dark">
      <head>
        {bingVerification ? (
          <meta name="msvalidate.01" content={bingVerification} />
        ) : null}

        {/* ✅ Google Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R8LRJF7YYF"
          nonce={nonce}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" nonce={nonce} strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R8LRJF7YYF', {
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `}
        </Script>
      </head>
      <body className="bg-[#030303] text-emerald-500 font-mono flex flex-col min-h-screen selection:bg-emerald-900 selection:text-white">

        {/* 1. NAVIGATION BAR */}
        <Navbar />

        {/* 2. MOBILE TOP AD (Hidden on Desktop) */}
        <div className="md:hidden bg-zinc-950 text-zinc-700 text-[10px] p-2 text-center border-b border-emerald-950/20 tracking-widest uppercase">
          [ SPONSORED ADVERTISEMENT ]
        </div>

        {/* 3. MAIN WRAPPER (Flexbox for Sidebars) */}
        <div className="flex flex-1 overflow-hidden">

          {/* LEFT SIDEBAR AD (Desktop Only) */}
          <aside className="hidden md:flex w-40 lg:w-64 bg-[#050505] border-r border-emerald-950/30 items-center justify-center text-zinc-800 text-[10px] p-4 text-center tracking-tighter hover:text-emerald-900 transition-colors">
            VERTICAL<br />BANNER<br />SPACE
          </aside>

          {/* PAGE CONTENT */}
          <main className="flex-1 overflow-y-auto p-4 md:p-10 scrollbar-thin scrollbar-thumb-emerald-900 scrollbar-track-transparent">
            <div className="max-w-5xl mx-auto">
              {children}
            </div>
          </main>

          {/* RIGHT SIDEBAR AD (Desktop Only) */}
          <aside className="hidden md:flex w-40 lg:w-64 bg-[#050505] border-l border-emerald-950/30 items-center justify-center text-zinc-800 text-[10px] p-4 text-center tracking-tighter hover:text-emerald-900 transition-colors">
            VERTICAL<br />BANNER<br />SPACE
          </aside>
        </div>

        {/* 4. MOBILE BOTTOM AD (Hidden on Desktop) */}
        <div className="md:hidden bg-zinc-950 text-zinc-700 text-[10px] p-2 text-center border-t border-emerald-950/20 tracking-widest uppercase">
          [ SPONSORED ADVERTISEMENT ]
        </div>

        {/* 5. FOOTER (Contains Integrated Ad & Links) */}
        <Footer />
        <Analytics />
        <SpeedInsights />

      </body>
    </html>
  );
}