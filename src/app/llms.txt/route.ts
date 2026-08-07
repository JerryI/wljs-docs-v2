import { source } from '@/lib/source';

const siteUrl = 'https://wljs.io';

export const revalidate = false;

export function GET() {
  const pages = source
    .getPages()
    .map((page) => {
      const description = page.data.description
        ? `: ${page.data.description}`
        : '';

      return `- [${page.data.title}](${siteUrl}/llms.mdx${page.url})${description}`;
    })
    .join('\n');

  return new Response(
    `# WLJS documentation

> Documentation for WLJS, a JavaScript frontend for the Wolfram Language.

## Complete documentation

- [All documentation in one file](${siteUrl}/llms-full.txt): use this when the complete documentation is needed.

## Individual documentation pages

${pages}
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}
