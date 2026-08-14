import { blogSource } from '@/lib/source';

export const dynamic = 'force-static';

const siteUrl = 'https://wljs.io';

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function GET() {
  const posts = blogSource
    .getPages()
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    );

  const lastBuildDate = posts[0]
    ? new Date(posts[0].data.date).toUTCString()
    : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = `${siteUrl}${post.url}`;
      const categories = (post.data.tags ?? [])
        .map((tag) => `<category>${escapeXml(tag)}</category>`)
        .join('');

      return `<item>
  <title>${escapeXml(post.data.title)}</title>
  <link>${url}</link>
  <guid isPermaLink="true">${url}</guid>
  <description>${escapeXml(post.data.description ?? '')}</description>
  <dc:creator>${escapeXml(post.data.author)}</dc:creator>
  <pubDate>${new Date(post.data.date).toUTCString()}</pubDate>
  ${categories}
</item>`;
    })
    .join('\n');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
<channel>
  <title>WLJS Notebook Blog</title>
  <link>${siteUrl}/blog</link>
  <description>Tutorials, showcases, research notes, and developer updates from the WLJS Notebook community.</description>
  <language>en</language>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
  <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
  ${items}
</channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
