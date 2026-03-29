// src/app/about/page.tsx
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'About Core | SafayaMetaFix',
    description: 'Learn about the technology and philosophy behind SafayaMetaFix, the ultimate client-side video privacy tool.',
};

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 py-10 pb-20">

            {/* Header Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                    THE <span className="text-emerald-500">SAFAYA</span> MANIFESTO
                </h1>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                    We don&apos;t just erase metadata. We rewrite your digital footprint.
                </p>
            </div>

            <hr className="border-emerald-900/30" />

            {/* Philosophy Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="text-emerald-500">01.</span> The Problem with &quot;Cloud Privacy&quot;
                </h2>
                <div className="p-6 bg-[#030303] border border-zinc-900 rounded-xl space-y-4 text-zinc-400 leading-relaxed text-sm md:text-base shadow-inner shadow-black">
                    <p>
                        In the modern web, true anonymity is a myth. Every time you upload a video to a standard &quot;metadata wiper&quot; online, you are making a fatal mistake: <strong>You are giving them your file.</strong>
                    </p>
                    <p>
                        Server-side processing means your raw, unedited footage sits on a server you don&apos;t control. Even if they promise to delete it, IP logs, session IDs, and shadow copies remain. Algorithms don&apos;t just read file names; they analyze the inherent DNA of your media.
                    </p>
                </div>
            </section>

            {/* Technology Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="text-emerald-500">02.</span> Our WebGPU / Wasm Solution
                </h2>
                <div className="p-6 bg-emerald-950/10 border border-emerald-900/30 rounded-xl space-y-4 text-zinc-400 leading-relaxed text-sm md:text-base">
                    <p>
                        <strong>SafayaMetaFix</strong> was engineered to operate in a completely zero-trust environment. We brought the server to your browser.
                    </p>
                    <ul className="space-y-3 list-disc list-inside text-zinc-300 ml-2">
                        <li><strong>Client-Side Execution:</strong> Using WebAssembly, we run a full FFmpeg engine directly inside your browser&apos;s memory.</li>
                        <li><strong>Hardware Acceleration:</strong> WebGPU integration allows us to utilize your local graphics card, mutating 4K videos in seconds without network bottlenecks.</li>
                        <li><strong>Cryptographic Scrambling:</strong> We inject imperceptible perceptual noise (micro-grain) and offset framerates (e.g., 30fps to 29.98fps) to completely shatter the original MD5/SHA-256 hash.</li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <div className="text-center pt-8">
                <Link href="/dashboard" className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors">
                    Experience the Core Engine →
                </Link>
            </div>

        </div>
    );
}