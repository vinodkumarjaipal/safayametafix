"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Dev Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            {/* Header with Glassmorphism & Neon Bottom Border */}
            <header className="sticky top-0 z-100 w-full border-b border-emerald-500/20 bg-black/80 backdrop-blur-md px-4 md:px-8 py-4 flex justify-between items-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">

                {/* Logo Section inside Navbar */}
                <Link href="/" className="group relative flex items-center gap-3">
                    <div className="relative">
                        {/* Background Glow Effect */}
                        <div className="absolute -inset-2 bg-emerald-500 rounded-full blur-md opacity-20 group-hover:opacity-60 transition duration-500"></div>

                        {/* ✅ EXACT MATCH SVG (Favicon Style) */}
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="relative drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform duration-300"
                        >
                            {/* Outer Shield Path */}
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />

                            {/* Inner Zap / Bolt (Matching your theme) */}
                            <path
                                d="M13.5 8L9.5 14H14.5L10.5 20"
                                stroke="#10b981"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div className="text-xl md:text-2xl font-black tracking-tighter text-white">
                        SAFAYA<span className="text-emerald-500 group-hover:drop-shadow-[0_0_12px_#10b981] transition-all">META</span>FIX
                    </div>
                </Link>

                {/* Desktop Nav - The Magic Glow Part */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium tracking-widest uppercase text-zinc-400 transition-all duration-300 hover:text-emerald-400 group"
                        >
                            {link.name}
                            {/* Animated Underline */}
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#10b981]"></span>
                        </Link>
                    ))}

                    {/* Cyberpunk Button */}
                    <Link
                        href="/dashboard"
                        className="group relative px-6 py-2.5 font-bold text-emerald-500 transition-all duration-300"
                    >
                        <span className="absolute inset-0 w-full h-full border border-emerald-500/50 rounded-lg group-hover:border-emerald-400 transition-all"></span>
                        <span className="absolute inset-0 w-full h-full bg-emerald-500/10 rounded-lg blur-0 group-hover:blur-sm transition-all"></span>
                        <span className="relative flex items-center gap-2 group-hover:text-white">
                            SAFE ZONE <Zap size={16} className="animate-pulse" />
                        </span>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button onClick={toggleMenu} className="md:hidden p-2 text-emerald-500 hover:bg-emerald-500/10 rounded-lg transition-all">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </header>

            {/* Mobile Menu with Slide-down Animation */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-90 md:hidden bg-black/95 backdrop-blur-xl pt-24 px-6 animate-in fade-in slide-in-from-top duration-300">
                    <nav className="flex flex-col gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu}
                                className="text-3xl font-black text-zinc-500 hover:text-emerald-500 transition-all active:scale-95"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/dashboard"
                            onClick={closeMenu}
                            className="mt-4 p-5 bg-emerald-600 text-white text-center rounded-2xl font-black text-xl shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                        >
                            OPEN SAFAYA ZONE ⚡
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}