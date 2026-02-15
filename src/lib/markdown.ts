import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { toHtml } from 'hast-util-to-html';

/**
 * Converts a markdown string to HTML.
 * This is a lightweight processor for simple markdown (descriptions, etc.)
 */
export function markdownToHtml(markdown: string): string {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype);

  const mdast = processor.parse(markdown);
  const hast = processor.runSync(mdast);
  return toHtml(hast);
}
