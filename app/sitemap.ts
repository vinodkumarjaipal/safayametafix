// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://safayametafix.vercel.app';
    const now = new Date();

    const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
        { path: '/', priority: 1.0, changeFrequency: 'weekly' },
        { path: '/dashboard', priority: 0.9, changeFrequency: 'weekly' },
        { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
        { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
        { path: '/privacy', priority: 0.5, changeFrequency: 'yearly' },
        { path: '/terms', priority: 0.5, changeFrequency: 'yearly' },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}