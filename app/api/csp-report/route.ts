import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

function redactUrl(input: unknown): string | undefined {
    if (typeof input !== 'string' || !input) {
        return undefined;
    }

    try {
        const url = new URL(input);
        return `${url.origin}${url.pathname}`;
    } catch {
        // Return only a bounded value when input is not a valid URL.
        return input.slice(0, 120);
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.text();

        // Log CSP violations in all environments so production monitoring sees blocked resources.
        try {
            const parsed = JSON.parse(body) as Record<string, unknown>;
            const report = (parsed['csp-report'] ?? parsed) as Record<string, unknown>;

            console.log('CSP violation report:', {
                documentUri: redactUrl(report['document-uri']),
                blockedUri: redactUrl(report['blocked-uri']),
                violatedDirective: report['violated-directive'],
                effectiveDirective: report['effective-directive'],
                sourceFile: redactUrl(report['source-file']),
                disposition: report['disposition'],
            });
        } catch {
            console.log('CSP violation report (unparsed):', {
                contentLength: body.length,
                contentType: request.headers.get('content-type') ?? 'unknown',
            });
        }
    } catch {
        // Ignore parsing failures and still return success to the reporter.
    }

    return new NextResponse(null, { status: 204 });
}

export async function GET() {
    return NextResponse.json(
        { ok: true, message: 'CSP report endpoint is active.' },
        { status: 200 }
    );
}
