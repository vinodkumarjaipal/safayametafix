import { ImageResponse } from 'next/og';

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
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
                    background: 'linear-gradient(135deg, #020617 0%, #03130e 45%, #052e24 100%)',
                    color: '#ecfeff',
                    fontFamily: 'Arial',
                }}
            >
                <div style={{ fontSize: 26, color: '#34d399', letterSpacing: 2, fontWeight: 700 }}>
                    SAFAYAMETAFIX
                </div>
                <div style={{ marginTop: 20, fontSize: 62, lineHeight: 1.1, fontWeight: 800, maxWidth: 980 }}>
                    Remove Video Metadata Online Free
                </div>
                <div style={{ marginTop: 18, fontSize: 28, color: '#a7f3d0', maxWidth: 980 }}>
                    100% Client-Side FFmpeg WASM. Zero Uploads. Zero Server Logs.
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
