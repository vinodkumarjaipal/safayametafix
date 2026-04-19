// src/app/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

const siteUrl = 'https://safayametafix.vercel.app';

export const metadata: Metadata = {
  title: 'Remove Video Metadata Online Free',
  description:
    'Remove video metadata online free using FFmpeg WASM. SafayaMetaFix runs fully in your browser with 100% client-side processing and zero server logs.',
  keywords: [
    'remove video metadata online free',
    'remove metadata from mp4 online',
    'ffmpeg wasm video privacy',
    'strip video exif metadata',
    'browser based metadata scrubber',
  ],
  alternates: {
    canonical: siteUrl,
  },
};

export default async function LandingPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined;

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'SafayaMetaFix',
    applicationCategory: 'MultimediaApplication',
    applicationSubCategory: 'Video Metadata Scrubber',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    isAccessibleForFree: true,
    url: siteUrl,
    description:
      'Privacy-first video metadata scrubber that runs 100% client-side using FFmpeg WASM. No video uploads and zero server logs.',
    browserRequirements: 'Requires modern browser with WebAssembly support',
    featureList: [
      'Remove video metadata online free',
      '100% client-side processing',
      'No videos are uploaded to any server',
      'Zero logs',
      'Runs in browser with FFmpeg WASM',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is SafayaMetaFix really 100% client-side?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. SafayaMetaFix uses FFmpeg compiled to WebAssembly and runs directly in your browser. Your video is processed on your device and is never uploaded to our servers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you keep logs or store my original video?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We do not store uploaded files because there are no uploads. We do not keep processing logs containing your video data.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I remove metadata from MP4 files online for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You can remove metadata from MP4 and other supported formats using the free browser-based workflow on SafayaMetaFix.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which metadata fields are removed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SafayaMetaFix strips common metadata such as location tags, camera/device identifiers, timestamps, and other embedded fields handled by FFmpeg metadata mapping.',
        },
      },
    ],
  };

  return (
    <article className="space-y-20 py-10 pb-24">

      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ================= HERO SECTION ================= */}
      <section aria-labelledby="home-hero-title" className="text-center space-y-8 max-w-5xl mx-auto relative p-8 md:p-16 border border-emerald-950 rounded-3xl bg-black/50 shadow-[0_0_80px_rgba(16,185,129,0.07)] backdrop-blur-sm">
        {/* Glow effect */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="inline-block px-5 py-1.5 border border-emerald-800 rounded-full bg-emerald-950/40 text-xs text-emerald-400 tracking-widest font-bold shadow-inner shadow-black">
          [ SYSTEM ACTIVE: V1.0 QUANTUM PRIVACY ENGINE ]
        </div>

        <h1 id="home-hero-title" className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
          Wipe Video DNA. <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-700">
            Go Untraceable.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium">
          <strong className="text-emerald-300">SafayaMetaFix</strong> is the ultimate defense against algorithmic tracking. We scrub hidden EXIF data, inject micro-noise to shatter MD5 hashes, and scramble FPS.
          <br className="hidden md:block" />
          <strong className="text-white mt-2 block">100% Client-Side WebGPU Processing. No Uploads. Zero Logs.</strong>
        </p>

        <p className="text-sm text-emerald-300/90 tracking-wide">
          100% Client-Side Processing. No videos are uploaded to any server. Zero logs.
          {' '}
          <Link href="/privacy#zero-log-guarantee" className="underline underline-offset-4 hover:text-emerald-200">
            Read the Privacy Guarantee
          </Link>
        </p>

        {/* Prominent CTA to Dashboard */}
        <div className="pt-8 flex flex-col items-center gap-4">
          <Link href="/dashboard" className="inline-flex items-center gap-3 px-12 py-5 bg-emerald-600 hover:bg-emerald-500 text-white text-xl md:text-2xl font-black rounded-2xl shadow-[0_10px_50px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_60px_rgba(16,185,129,0.4)] transition-all hover:-translate-y-1.5 group border border-emerald-400/20">
            INITIATE SAFAYA CORE
            <span className="group-hover:translate-x-3 transition-transform duration-300">⚡</span>
          </Link>
          <p className="text-xs text-zinc-500 tracking-widest uppercase font-bold">Absolutely No Sign-Up Required</p>
        </div>
      </section>

      {/* ================= HACKER TERMINAL SECTION ================= */}
      <section aria-labelledby="mutation-engine-title" className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2 mb-8">
          <h2 id="mutation-engine-title" className="text-3xl md:text-4xl font-black text-white tracking-tight">Inside the Mutation Engine</h2>
          <p className="text-zinc-500 text-sm">Real-time local processing via WebAssembly</p>
        </div>

        <div className="border border-zinc-800 rounded-xl bg-[#030303] shadow-2xl overflow-hidden font-mono text-sm md:text-base">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 p-4 bg-zinc-950 border-b border-zinc-900">
            <div className="w-3.5 h-3.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
            <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
            <div className="w-3.5 h-3.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <span className="text-zinc-600 ml-3 font-bold tracking-wider">safaya_core_v1.sh</span>
          </div>

          {/* Terminal Content (Matrix style output) */}
          <div className="p-6 space-y-3 text-zinc-400">
            <p className="text-emerald-600 font-bold">&gt; Initializing WebGPU Environment...</p>
            <p className="text-white bg-zinc-900 inline-block px-2 py-0.5 rounded">[OK] GPU Compute Shader Loaded Successfully.</p>
            <p className="text-emerald-600 font-bold">&gt; Targeting target_video.mp4 for deep mutation...</p>
            <p>&gt; Injecting micro-noise anomaly at frame 0x4A2...</p>
            <p>&gt; Scrambling original MD5 Hash... <span className="text-white font-bold line-through">a8f3b299x</span> -&gt; <span className="text-emerald-400 font-bold">7c9d1e44z</span></p>
            <p className="text-emerald-600 font-bold">&gt; Re-encoding at dynamic 29.98 FPS (Mutation Delta: 0.02)...</p>
            <p>&gt; Executing forensic metadata wipe... <span className="text-red-500 font-bold">[ERASED 102 tracking fields]</span></p>
            <p className="text-white font-black tracking-widest pt-4 text-lg">STATUS: COMPILING UNTRACEABLE ENTITY...</p>
            <p className="text-emerald-500 animate-pulse text-2xl font-black">&gt; _</p>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS (SEO Heavy Points) ================= */}
      <section aria-labelledby="how-safaya-works" className="max-w-6xl mx-auto space-y-10 pt-10">
        <h2 id="how-safaya-works" className="text-3xl md:text-5xl font-black text-white tracking-tight text-center">
          How <span className="text-emerald-500">SafayaMetaFix</span> Rewrites Reality
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              title: 'Local Interception',
              desc: 'When you drop a file, it never goes to a server. Our engine loads it directly into your browser&apos;s temporary memory using secure OPFS (Origin Private File System).'
            },
            {
              step: '02',
              title: 'DNA Scrambling',
              desc: 'We utilize FFmpeg compiled to WebAssembly (Wasm). It strips GPS, device serials, and dates, while injecting imperceptible visual noise to alter the video&apos;s digital fingerprint.'
            },
            {
              step: '03',
              title: 'Ghost Extraction',
              desc: 'The output is a completely new, untraceable file. Once downloaded, the session self-destructs, leaving zero footprint on your device or the web.'
            },
          ].map(feat => (
            <div key={feat.step} className="p-8 border border-zinc-900 rounded-2xl bg-[#050505] hover:border-emerald-800/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-7xl font-black text-zinc-900/50 group-hover:text-emerald-900/20 transition-colors pointer-events-none">
                {feat.step}
              </div>
              <h3 className="text-xl font-black text-white mb-3 relative z-10">{feat.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed relative z-10">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SEO AUTHORITY TEXT BLOCK ================= */}
      <section aria-labelledby="authority-block" className="max-w-4xl mx-auto p-8 border-l-4 border-emerald-600 bg-emerald-950/10 rounded-r-xl">
        <h2 id="authority-block" className="text-2xl font-bold text-white mb-4">The Ultimate Antidote to Algorithmic Tracking</h2>
        <p className="text-zinc-400 text-sm leading-relaxed space-y-4">
          <span className="block mb-2">In an era where every pixel is analyzed and every frame is hashed, traditional privacy tools are obsolete. Social media platforms and tracking networks don&apos;t just look at your file name; they analyze the inherent <strong>Digital DNA</strong> of your media. </span>
          <span className="block mb-2"><strong>SafayaMetaFix</strong> was engineered to break this cycle. By leveraging next-generation <strong>WebGPU</strong> and multi-threaded processing directly within the client layer, we bypass the need for centralized servers. This means no waiting in queues, no upload limits imposed by cloud servers, and most importantly, absolute cryptographic certainty that your raw data remains yours. </span>
          <span className="block">Whether you are a journalist protecting sources, a creator dodging unfair copyright strikes, or a privacy advocate, the Safaya Zone provides a military-grade cloak for your digital assets.</span>
        </p>
      </section>

      <section aria-labelledby="remove-metadata-online-free" className="max-w-5xl mx-auto space-y-8 p-8 border border-emerald-900/40 bg-black/40 rounded-2xl">
        <h2 id="remove-metadata-online-free" className="text-3xl md:text-4xl font-black text-white tracking-tight">
          Remove Video Metadata Online Free: How It Works
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          SafayaMetaFix is a privacy-first video metadata scrubber built on <strong>FFmpeg WASM</strong>. The full workflow runs in your browser, which means the app can remove video metadata online free without sending your original file to a remote server. If you need to strip GPS tags, camera identifiers, creation timestamps, and other hidden fields, this client-side pipeline gives you direct local control.
        </p>
        <ol className="space-y-4 text-zinc-300">
          <li>
            <h3 className="text-white font-bold mb-1">1. Select your file locally</h3>
            <p className="text-sm text-zinc-400">Drag and drop your MP4, MOV, or WebM file. The browser loads it into local memory for in-device processing.</p>
          </li>
          <li>
            <h3 className="text-white font-bold mb-1">2. FFmpeg WASM scrubs metadata</h3>
            <p className="text-sm text-zinc-400">The embedded FFmpeg WASM engine applies metadata stripping commands and re-exports a cleaned file for distribution.</p>
          </li>
          <li>
            <h3 className="text-white font-bold mb-1">3. Download and share safely</h3>
            <p className="text-sm text-zinc-400">You download the sanitized video directly from your browser session. No central file queue, no backend processing, zero server logs.</p>
          </li>
        </ol>
        <p className="text-sm text-zinc-400">
          Need compliance proof before using the tool?
          {' '}
          <Link href="/privacy#zero-log-guarantee" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4">
            Review our zero-log privacy policy statement
          </Link>
          .
        </p>
      </section>

      <section aria-labelledby="copyright-safe-workflow" className="max-w-5xl mx-auto space-y-8 p-8 border border-emerald-900/40 bg-black/40 rounded-2xl">
        <h2 id="copyright-safe-workflow" className="text-3xl md:text-4xl font-black text-white tracking-tight">
          How to Make Any Video 100% Copyright-Safe
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          <strong>Pro Tip for creators:</strong> if you want to reduce flags from YouTube, TikTok, and Instagram copyright AI systems, use a clean three-step pipeline before publishing. This practical workflow starts with a <strong>video metadata scrubber</strong>, then adds subtle visual and audio changes to support a more copyright-safe upload profile without hurting viewer quality.
        </p>
        <ol className="space-y-4 text-zinc-300">
          <li>
            <h3 className="text-white font-bold mb-1">1. The 99% Rule: Clean the Source</h3>
            <p className="text-sm text-zinc-400">Upload your raw file to SafayaMetaFix first to remove video metadata online free. This instantly strips hidden metadata, origin tags, and identifying fields so your base file starts from a clean state before any editing.</p>
          </li>
          <li>
            <h3 className="text-white font-bold mb-1">2. Visual Tweaks in CapCut or InShot</h3>
            <p className="text-sm text-zinc-400">Import the scrubbed file into your editor and apply lightweight transformations: mirror the frame horizontally, adjust speed slightly (for example, 1.05x), and add a subtle crop/zoom. These changes help bypass copyright bot detection and are especially useful when preparing a TikTok copyright-safe video or Instagram copyright-safe reels.</p>
          </li>
          <li>
            <h3 className="text-white font-bold mb-1">3. Audio Disguise for Bot Resistance</h3>
            <p className="text-sm text-zinc-400">Slightly shift voice pitch up or down, then blend in copyright-free background music at low volume (around 10%). This can reduce direct audio matching and supports a stronger AI copyright protection workflow for YouTube copyright safe upload strategies.</p>
          </li>
        </ol>
      </section>

      <section aria-labelledby="faq-title" className="max-w-5xl mx-auto space-y-6">
        <h2 id="faq-title" className="text-3xl md:text-4xl font-black text-white tracking-tight text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="group p-5 border border-zinc-800 rounded-xl bg-[#040404]" open>
            <summary className="cursor-pointer text-white font-bold text-lg">Is this really a free online video metadata remover?</summary>
            <p className="text-zinc-400 mt-3 text-sm leading-relaxed">Yes. SafayaMetaFix provides a free workflow to remove metadata from videos directly in the browser.</p>
          </details>
          <details className="group p-5 border border-zinc-800 rounded-xl bg-[#040404]">
            <summary className="cursor-pointer text-white font-bold text-lg">Does my video get uploaded to your server?</summary>
            <p className="text-zinc-400 mt-3 text-sm leading-relaxed">No. FFmpeg WASM runs on-device, so your original video stays on your machine during processing.</p>
          </details>
          <details className="group p-5 border border-zinc-800 rounded-xl bg-[#040404]">
            <summary className="cursor-pointer text-white font-bold text-lg">Do you keep any processing logs?</summary>
            <p className="text-zinc-400 mt-3 text-sm leading-relaxed">No server-side processing logs are created for your video because the file never leaves your browser.</p>
          </details>
          <details className="group p-5 border border-zinc-800 rounded-xl bg-[#040404]">
            <summary className="cursor-pointer text-white font-bold text-lg">Which keyword should this page rank for?</summary>
            <p className="text-zinc-400 mt-3 text-sm leading-relaxed">This page is optimized for terms like remove video metadata online free, strip video metadata, and FFmpeg WASM metadata remover.</p>
          </details>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <div className="text-center pt-10">
        <Link href="/dashboard" className="text-emerald-400 hover:text-emerald-300 font-bold text-lg border-b-2 border-emerald-900 hover:border-emerald-400 transition-colors pb-1">
          Ready to disappear? Enter the Dashboard →
        </Link>
      </div>

    </article>
  );
}