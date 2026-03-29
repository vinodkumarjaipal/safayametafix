// src/app/contact/page.tsx
import React from 'react';

export const metadata = {
    title: 'Secure Contact | SafayaMetaFix',
    description: 'Reach out to the SafayaMetaFix core team securely.',
};

export default function ContactPage() {
    return (
        <div className="max-w-5xl mx-auto py-10 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left Column: Info */}
            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="inline-block px-3 py-1 border border-emerald-900 rounded-full bg-emerald-950/30 text-xs text-emerald-400 tracking-widest">
                        [ SECURE COMM CHANNEL ]
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                        Establish <span className="text-emerald-500">Connection</span>
                    </h1>
                    <p className="text-zinc-400 leading-relaxed">
                        Have a technical inquiry, bug report, or need enterprise-grade API access? Use the encrypted portal to reach our core development team. We do not track IPs on this form.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="p-5 border border-zinc-900 bg-[#030303] rounded-xl flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-950/50 flex items-center justify-center rounded-lg text-xl">📧</div>
                        <div>
                            <h3 className="text-white font-bold">Direct Email</h3>
                            <p className="text-emerald-500 font-mono text-sm">core@safayametafix.com</p>
                        </div>
                    </div>

                    <div className="p-5 border border-zinc-900 bg-[#030303] rounded-xl flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-950/50 flex items-center justify-center rounded-lg text-xl">🔐</div>
                        <div>
                            <h3 className="text-white font-bold">PGP Fingerprint</h3>
                            <p className="text-zinc-500 font-mono text-xs mt-1 break-all">
                                4A9F 8B2C D1E4 77X9 00P1 L99Q M22N 55ZX
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Encrypted Form UI */}
            <div className="p-8 border border-emerald-900/50 bg-black rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.05)] relative overflow-hidden">
                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center pointer-events-none"></div>

                <form className="space-y-5 relative z-10">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Alias / Name</label>
                        <input
                            type="text"
                            placeholder="Anonymous"
                            className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg p-3 focus:outline-none focus:border-emerald-500 transition-colors font-mono text-sm"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Return Address (Email)</label>
                        <input
                            type="email"
                            placeholder="protonmail@... or leave blank"
                            className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg p-3 focus:outline-none focus:border-emerald-500 transition-colors font-mono text-sm"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Encrypted Payload (Message)</label>
                        <textarea
                            rows={5}
                            placeholder="Enter your message here..."
                            className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg p-3 focus:outline-none focus:border-emerald-500 transition-colors font-mono text-sm resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="button"
                        className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-lg transition-colors flex justify-center items-center gap-2 group"
                    >
                        TRANSMIT MESSAGE
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>

                    <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest mt-4">
                        Transmission secured via TLS 1.3
                    </p>
                </form>
            </div>

        </div>
    );
}