// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Script from 'next/script'; // ✅ Analytics ke liye import
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://safayametafix.vercel.app'),
  title: 'SafayaMetaFix v1.0 | Quantum Video Privacy | Zero-Log Core',
  description: 'Wipe video metadata, inject perceptual noise, scramble file hashes, and bypass algorithmic tracking using local WebGPU processing.',
  alternates: {
    canonical: '/',
  },
  verification: {
    // ✅ Search Console Code
    google: '8K9QiHOKyqqWCSdpES_6gXKNys1TknXvjDQy1iy8hRY',
  },
};

// ... (Baaki neeche ka aapka RootLayout function same rahega)
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* ✅ Google Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EQ30RE3G00"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EQ30RE3G00');
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

      </body>
    </html>
  );
}