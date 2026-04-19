// src/app/privacy/page.tsx
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Zero-Knowledge Privacy | SafayaMetaFix',
    description: 'Our privacy stance for SafayaMetaFix: 100% local video processing with transparent analytics and contact-form disclosures.',
};

export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-10 py-10 pb-20">

            {/* Header Section */}
            <div className="space-y-4 border-b border-emerald-900/50 pb-8">
                <div className="inline-block px-3 py-1 border border-emerald-900 rounded-full bg-emerald-950/30 text-xs text-emerald-400 tracking-widest uppercase">
                    [ Document: SEC-PRI-001 ]
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                    Zero-Knowledge <span className="text-emerald-500">Privacy Policy</span>
                </h1>
                <p className="text-zinc-400 text-lg">
                    Last Updated: <strong>System Initialization Date</strong>
                </p>
            </div>

            {/* Core Privacy Stance */}
            <section id="zero-log-guarantee" className="p-6 border border-emerald-900/50 bg-emerald-950/10 rounded-xl space-y-4 text-zinc-300 leading-relaxed shadow-inner shadow-black">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-emerald-500">🛡️</span> The Core Rule: We Can&apos;t Leak What We Don&apos;t Have
                </h2>
                <p className="text-emerald-300 font-semibold">
                    100% Client-Side Processing. No videos are uploaded to any server. Zero logs.
                </p>
                <p>
                    SafayaMetaFix operates on a strict <strong>Zero-Knowledge Architecture</strong>. Unlike traditional cloud-based privacy tools, we do not have a backend server that receives, processes, or stores your media files.
                </p>
            </section>

            {/* Detailed Points */}
            <div className="space-y-8 text-zinc-400 text-sm md:text-base leading-relaxed">

                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">1. Local Processing via WebGPU / WebAssembly</h3>
                    <p>
                        All video mutation, EXIF scrubbing, and noise injection occur entirely within your device&apos;s local memory (RAM/VRAM) using your browser. <strong>Your files never leave your device.</strong> There is no upload process, and therefore, no risk of data interception during transit.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">2. Zero Data Logging</h3>
                    <p>
                        We do not log or store metadata from the videos you process. We do not require account creation to use the scrubber. For operational security monitoring and basic traffic measurement, limited telemetry may be processed through third-party services as described below.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">3. Cookies, Analytics, and Contact Processing</h3>
                    <p>
                        The SafayaMetaFix core engine uses strictly necessary local storage (such as IndexedDB or OPFS) to perform client-side video processing. We also use Google Analytics for aggregate website measurement and Formspree for contact form delivery. These services may process technical request metadata (such as IP address, user agent, and timestamp) according to their own privacy terms.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">4. Subpoenas and Warrants</h3>
                    <p>
                        Because we do not collect, process, or store user data, we have nothing to hand over to law enforcement or third parties, even under a legally binding subpoena. <strong>Math and cryptography protect you, not just our word.</strong>
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">5. Telemetry Retention and Minimization</h3>
                    <p>
                        Security telemetry (such as CSP violation reports) is minimized and logged without full URLs or payload bodies where possible. Operational logs are retained only as long as needed for security and reliability monitoring, with a target retention window of up to 30 days unless a longer period is required for active incident response.
                    </p>
                </div>

            </div>

            {/* Footer Return */}
            <div className="pt-8">
                <Link href="/" className="text-emerald-500 hover:text-emerald-400 font-mono text-sm underline decoration-emerald-900 underline-offset-4">
                    ← Return to Safaya Core
                </Link>
            </div>

        </div>
    );
}