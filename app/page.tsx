// src/app/page.tsx
import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="space-y-20 py-10 pb-24">

      {/* ================= HERO SECTION ================= */}
      <section className="text-center space-y-8 max-w-5xl mx-auto relative p-8 md:p-16 border border-emerald-950 rounded-3xl bg-black/50 shadow-[0_0_80px_rgba(16,185,129,0.07)] backdrop-blur-sm">
        {/* Glow effect */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="inline-block px-5 py-1.5 border border-emerald-800 rounded-full bg-emerald-950/40 text-xs text-emerald-400 tracking-widest font-bold shadow-inner shadow-black">
          [ SYSTEM ACTIVE: V1.0 QUANTUM PRIVACY ENGINE ]
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
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
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Inside the Mutation Engine</h2>
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
      <section className="max-w-6xl mx-auto space-y-10 pt-10">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-center">
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
      <section className="max-w-4xl mx-auto p-8 border-l-4 border-emerald-600 bg-emerald-950/10 rounded-r-xl">
        <h3 className="text-2xl font-bold text-white mb-4">The Ultimate Antidote to Algorithmic Tracking</h3>
        <p className="text-zinc-400 text-sm leading-relaxed space-y-4">
          <span className="block mb-2">In an era where every pixel is analyzed and every frame is hashed, traditional privacy tools are obsolete. Social media platforms and tracking networks don&apos;t just look at your file name; they analyze the inherent <strong>Digital DNA</strong> of your media. </span>
          <span className="block mb-2"><strong>SafayaMetaFix</strong> was engineered to break this cycle. By leveraging next-generation <strong>WebGPU</strong> and multi-threaded processing directly within the client layer, we bypass the need for centralized servers. This means no waiting in queues, no upload limits imposed by cloud servers, and most importantly, absolute cryptographic certainty that your raw data remains yours. </span>
          <span className="block">Whether you are a journalist protecting sources, a creator dodging unfair copyright strikes, or a privacy advocate, the Safaya Zone provides a military-grade cloak for your digital assets.</span>
        </p>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <div className="text-center pt-10">
        <Link href="/dashboard" className="text-emerald-400 hover:text-emerald-300 font-bold text-lg border-b-2 border-emerald-900 hover:border-emerald-400 transition-colors pb-1">
          Ready to disappear? Enter the Dashboard →
        </Link>
      </div>

    </div>
  );
}