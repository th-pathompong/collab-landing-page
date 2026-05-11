import { MetadataRoute } from 'next';
import { SITE_URL } from '@/components/constants/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  
  // In a real app with a CMS, you would fetch your dynamic paths here
  // For this landing page, we define the main routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/instructions`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/feedback`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  return routes;
}
