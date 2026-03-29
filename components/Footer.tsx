import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="p-8 border-t border-emerald-950 bg-black text-center text-xs md:text-sm text-zinc-600 mt-auto">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-emerald-800 uppercase tracking-widest font-bold">
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms</Link>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy</Link>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">Support</Link>
            </div>
            <p className="tracking-widest opacity-60 font-mono">
                © 2026 SAFAYAMETAFIX Core v1.0 • Quantum-Grade Video Privacy
            </p>
        </footer>
    );
}