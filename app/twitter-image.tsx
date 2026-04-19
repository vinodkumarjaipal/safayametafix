import { ImageResponse } from 'next/og';

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default function TwitterImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '64px',
                    background: 'linear-gradient(135deg, #000000 0%, #052e24 100%)',
                    color: '#ffffff',
                    fontFamily: 'Arial',
                }}
            >
                <div style={{ fontSize: 24, color: '#34d399', letterSpacing: 2, fontWeight: 700 }}>
                    PRIVACY-FIRST VIDEO TOOL
                </div>
                <div style={{ marginTop: 20, fontSize: 58, lineHeight: 1.1, fontWeight: 800, maxWidth: 980 }}>
                    SafayaMetaFix
                </div>
                <div style={{ marginTop: 14, fontSize: 30, color: '#a7f3d0', maxWidth: 980 }}>
                    FFmpeg WASM metadata scrubber with zero server logs
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
