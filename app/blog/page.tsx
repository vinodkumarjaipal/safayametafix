// src/app/blog/page.tsx
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Intelligence Logs | SafayaMetaFix Blog',
    description: 'Deep dives into algorithmic tracking, metadata vulnerabilities, and the engineering behind SafayaMetaFix.',
};

export default function BlogPage() {

    // Bhai, yahan aap apne naye blogs add karte jayenge future mein
    const blogPosts = [
        {
            id: 1,
            slug: '/blog/tiktok-algorithm-fingerprinting',
            date: 'MAR 29, 2026',
            readTime: '5 MIN READ',
            title: "How TikTok's AI Fingerprints Your Media (And How to Break It)",
            excerpt: "They aren't just looking at your hashtags. Social algorithms analyze the invisible digital DNA of your video frames. Here is the mathematical way to blind the tracking bots.",
        },
        {
            id: 2,
            slug: '/blog/cloud-wipers-are-honeypots',
            date: 'MAR 15, 2026',
            readTime: '4 MIN READ',
            title: "Why Cloud-Based 'Metadata Wipers' Are Actually Privacy Honeypots",
            excerpt: "Uploading your raw, unedited footage to a server to 'clean' it is a fatal operational security flaw. Discover why local WebGPU processing is the only true defense.",
        },
        {
            id: 3,
            slug: '/blog/hidden-camera-serial-numbers',
            date: 'FEB 28, 2026',
            readTime: '7 MIN READ',
            title: "The Hidden Camera Serial Numbers Exposing Your Real Identity",
            excerpt: "Did you know every video you shoot contains a unique hardware ID linking back to the exact smartphone in your pocket? Learn how to scrub the un-scrubbable EXIF data.",
        },
        {
            id: 4,
            slug: '/blog/what-is-perceptual-noise',
            date: 'FEB 10, 2026',
            readTime: '6 MIN READ',
            title: "Perceptual Noise Injection: Mutating MD5 Hashes at the Pixel Level",
            excerpt: "Changing a file name doesn't change its hash. We break down the WebAssembly tech we use to inject micro-grain, ensuring your file is seen as a completely new entity.",
        }
    ];

    return (
        <div className="max-w-5xl mx-auto py-10 pb-20 space-y-12">

            {/* Header Section */}
            <div className="space-y-4 border-b border-emerald-900/50 pb-8 text-center md:text-left">
                <div className="inline-block px-3 py-1 border border-emerald-900 rounded-full bg-emerald-950/30 text-xs text-emerald-400 tracking-widest uppercase">
                    [ ACCESSING: INTELLIGENCE LOGS ]
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                    DEV <span className="text-emerald-500">LOGS</span>
                </h1>
                <p className="text-zinc-400 text-lg max-w-2xl">
                    Research, zero-day vulnerabilities in social algorithms, and the engineering behind our quantum privacy core.
                </p>
            </div>

            {/* Blog Posts List */}
            <div className="space-y-6">
                {blogPosts.map((post) => (
                    <Link
                        key={post.id}
                        href={post.slug}
                        className="block p-6 md:p-8 border border-zinc-900 bg-[#030303] hover:bg-black rounded-2xl hover:border-emerald-800 transition-all duration-300 group shadow-lg shadow-black"
                    >
                        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">

                            {/* Left Side: Meta Info */}
                            <div className="flex flex-row md:flex-col gap-4 text-xs font-mono text-zinc-500 md:w-32 shrink-0 pt-1 border-b md:border-b-0 border-zinc-900 pb-3 md:pb-0">
                                <span className="text-emerald-700 font-bold">{post.date}</span>
                                <span className="opacity-60 hidden md:block">{post.readTime}</span>
                            </div>

                            {/* Right Side: Content */}
                            <div className="space-y-3 flex-1">
                                <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                                    {post.excerpt}
                                </p>

                                {/* Hacker style "Read More" button */}
                                <div className="pt-4 flex items-center gap-2 text-sm font-bold text-emerald-600 group-hover:text-emerald-400 transition-colors uppercase tracking-widest">
                                    Decrypt File <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination / End of List */}
            <div className="text-center pt-10 border-t border-emerald-900/30">
                <p className="text-zinc-600 font-mono text-sm tracking-widest">[ END OF CURRENT LOGS ]</p>
            </div>

        </div>
    );
}