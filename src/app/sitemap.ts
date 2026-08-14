import { blogSource, releasesSource, source } from '@/lib/source'

export const dynamic = 'force-static'

export default async function sitemap() {
  const baseUrl = 'https://wljs.io'
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/releases`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]
  const docsUrls = source
    // Optional: leverage the noIndex property we previously added.
    // .filter(page => page.data.noIndex !== true)
    .getPages().map(page => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

  const blogUrls = blogSource.getPages().map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(page.data.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const releaseUrls = releasesSource.getPages().map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(page.data.date),
    changeFrequency: 'never' as const,
    priority: 0.5,
  }))

  return [...staticUrls, ...docsUrls, ...blogUrls, ...releaseUrls]
}
