// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    // YAHAN BHI APNI ASLI VERCEL WALI WEBSITE KA LINK DAALEIN
    const baseUrl = 'https://aapki-website-ka-naam.vercel.app';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}