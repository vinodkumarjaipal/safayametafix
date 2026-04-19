// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://safayametafix.vercel.app';
    const host = new URL(baseUrl).host;

    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/', '/about', '/blog', '/contact', '/dashboard', '/privacy', '/terms'],
                disallow: ['/api/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host,
    };
}