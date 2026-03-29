// src/app/privacy/page.tsx
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Zero-Knowledge Privacy | SafayaMetaFix',
    description: 'Our uncompromising stance on user data. Zero logs. Zero tracking. 100% local processing.',
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
            <section className="p-6 border border-emerald-900/50 bg-emerald-950/10 rounded-xl space-y-4 text-zinc-300 leading-relaxed shadow-inner shadow-black">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-emerald-500">🛡️</span> The Core Rule: We Can&apos;t Leak What We Don&apos;t Have
                </h2>
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
                        We do not log IP addresses, browser fingerprints, or metadata of the files you process. We do not require account creation, email addresses, or any personally identifiable information (PII). You remain a ghost.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">3. Cookies and Trackers</h3>
                    <p>
                        The SafayaMetaFix core engine uses strictly necessary local storage (such as IndexedDB or OPFS) purely to facilitate the client-side video processing. We do not deploy third-party advertising trackers or analytics that harvest your browsing habits.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">4. Subpoenas and Warrants</h3>
                    <p>
                        Because we do not collect, process, or store user data, we have nothing to hand over to law enforcement or third parties, even under a legally binding subpoena. <strong>Math and cryptography protect you, not just our word.</strong>
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