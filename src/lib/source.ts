import { docs, blogPosts, releases } from 'fumadocs-mdx:collections/server';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/frontend',
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const releasesSource = loader({
  baseUrl: '/releases',
  source: toFumadocsSource(releases, []),
  plugins: [lucideIconsPlugin()]
});

export const blogSource = loader({
  baseUrl: '/blog',
  source: toFumadocsSource(blogPosts, []),
  plugins: [lucideIconsPlugin()]
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/frontend/${segments.join('/')}`,
  };
}

function processLLMText(text: string): string {
  let result = text;

  // Strip <wljs-editor ...>{`...`}</wljs-editor> and convert to code blocks
  result = result.replace(/<wljs-editor\s+([^>]*)>\s*\{\`([\s\S]*?)\`\}\s*<\/wljs-editor>/g, (match, attrs, code) => {
    const isEncoded = /encoded\s*=\s*["']true["']/.test(attrs);
    const content = isEncoded ? decodeURIComponent(code) : code;
    return '```\n' + content.trim() + '\n```';
  });

  // Strip <Card ...> and </Card> tags (keep content)
  result = result.replace(/<Card[^>]*>/g, '');
  result = result.replace(/<\/Card>/g, '');

  // Strip <WLJSWrapper> and </WLJSWrapper> tags (keep content)
  result = result.replace(/<WLJSWrapper>/g, '');
  result = result.replace(/<\/WLJSWrapper>/g, '');

  // Strip decorative spans (gradient blur spans)
  result = result.replace(/<span\s+className="[^"]*blur[^"]*"[^/]*\/>/g, '');

  // Strip <Callout ...>...</Callout> but keep content
  result = result.replace(/<Callout[^>]*>/g, '');
  result = result.replace(/<\/Callout>/g, '');
  result = result.replace(/<div\s+className="code-input"[^/]*\/>/g, '');

  // Clean up excessive blank lines
  result = result.replace(/\n{3,}/g, '\n\n');

  return result;
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');
  const cleaned = processLLMText(processed);

  return `# ${page.data.title}

${cleaned}`;
}
