// src/app/terms/page.tsx
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Terms of Operation | SafayaMetaFix',
    description: 'Rules of engagement and terms of service for utilizing the SafayaMetaFix engine.',
};

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-10 py-10 pb-20">

            {/* Header Section */}
            <div className="space-y-4 border-b border-zinc-900 pb-8">
                <div className="inline-block px-3 py-1 border border-zinc-800 rounded-full bg-zinc-900/50 text-xs text-zinc-400 tracking-widest uppercase">
                    [ Document: SEC-TOS-001 ]
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                    Terms of <span className="text-zinc-500">Operation</span>
                </h1>
                <p className="text-zinc-500 text-lg">
                    Please read carefully before initiating the Safaya process.
                </p>
            </div>

            {/* Notice Block */}
            <div className="p-5 border-l-4 border-emerald-600 bg-emerald-950/10 text-emerald-400 text-sm font-mono">
                &gt; WARNING: By accessing the Safaya Zone and utilizing our WebGPU engine, you agree to be bound by these operational directives.
            </div>

            {/* Content */}
            <div className="space-y-8 text-zinc-400 text-sm md:text-base leading-relaxed">

                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">1. Provision of Service &quot;As Is&quot;</h3>
                    <p>
                        SafayaMetaFix is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. Due to the experimental nature of WebGPU and browser-based FFmpeg (Wasm) processing, we do not guarantee that the tool will work perfectly on all devices, hardware configurations, or video codecs. You use this tool at your own risk.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">2. Acceptable Use Policy</h3>
                    <p>
                        Our tool is designed for privacy protection, dodging unfair algorithmic tracking, and preventing unauthorized data harvesting. You agree NOT to use SafayaMetaFix to facilitate illegal activities, distribute malicious payloads, or bypass legal copyright protections maliciously. However, because our tool is 100% client-side, we have no technical ability to monitor or restrict what you process.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">3. Limitation of Liability</h3>
                    <p>
                        In no event shall the developers, maintainers, or hosts of SafayaMetaFix be held liable for any data loss, hardware strain, or consequences arising from the use of the mutated media files. Because processing heavily relies on your local GPU and CPU, it is your responsibility to ensure your hardware can handle the computational load.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">4. Code Modifications and Intellectual Property</h3>
                    <p>
                        The interface, branding, and custom mutation algorithms are the intellectual property of SafayaMetaFix. While we utilize open-source technologies (like FFmpeg) in the backend, unauthorized mirroring, scraping, or commercial repackaging of our specific Web interface is prohibited.
                    </p>
                </div>

            </div>

            {/* Footer Return */}
            <div className="pt-8">
                <Link href="/" className="text-zinc-500 hover:text-white font-mono text-sm transition-colors">
                    ← Acknowledge and Return
                </Link>
            </div>

        </div>
    );
}