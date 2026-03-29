// app/icon.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            // ✅ Contianer: Removed background and added flex centering
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent', // Removed black background
                }}
            >
                {/* ✅ SVG: Re-colored for high contrast and removed fill */}
                <svg
                    width="28" // Slightly larger for better visibility
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none" // Ensure background is transparent
                    stroke="#10b981" // Emerald 500 green
                    strokeWidth="2.5" // Thicker stroke for small sizes
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        // Dynamic Drop Shadow (Neon glow effect)
                        filter: 'drop-shadow(0 0 4px #10b981)',
                    }}
                >
                    {/* The main shield outline from Lucide Shields */}
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />

                    {/* The Bolt / Zap icon (Matching Navbar) */}
                    <path
                        d="M13.5 8L9.5 14H14.5L10.5 20"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        ),
        {
            ...size,
        }
    );
}