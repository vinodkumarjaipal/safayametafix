import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

function generateNonce(): string {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);

    let binary = '';
    for (const byte of bytes) {
        binary += String.fromCharCode(byte);
    }

    return btoa(binary);
}

export function proxy(request: NextRequest) {
    const nonce = generateNonce();
    const reportEndpoint = '/api/csp-report';
    const devEvalDirective = process.env.NODE_ENV === 'production' ? '' : " 'unsafe-eval'";

    const contentSecurityPolicy = [
        "default-src 'self'",
        "base-uri 'self'",
        "frame-ancestors 'none'",
        "object-src 'none'",
        `script-src 'self' 'nonce-${nonce}' 'wasm-unsafe-eval'${devEvalDirective} https://www.googletagmanager.com`,
        "connect-src 'self' blob: data: https://www.google-analytics.com https://region1.google-analytics.com",
        "img-src 'self' data: blob: https:",
        "style-src 'self' 'unsafe-inline'",
        "font-src 'self' data:",
        "worker-src 'self' blob:",
        "media-src 'self' blob:",
        `report-uri ${reportEndpoint}`,
        'report-to csp-endpoint',
        'upgrade-insecure-requests',
    ].join('; ');

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    response.headers.set('Content-Security-Policy', contentSecurityPolicy);
    response.headers.set(
        'Report-To',
        JSON.stringify({
            group: 'csp-endpoint',
            max_age: 10886400,
            endpoints: [{ url: reportEndpoint }],
        })
    );
    response.headers.set('Reporting-Endpoints', `csp-endpoint="${reportEndpoint}"`);
    return response;
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};