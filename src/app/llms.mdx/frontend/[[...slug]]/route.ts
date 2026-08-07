import { getLLMText, source } from '@/lib/source';

// Export one Markdown document per documentation page. This route is kept
// separate from /frontend so it works with Next.js static export as well.
export const revalidate = false;
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: undefined }, ...source.generateParams()];
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug } = await params;
  const page = source.getPage(slug ?? []);

  if (!page) {
    return new Response('Not Found', { status: 404 });
  }

  return new Response(await getLLMText(page), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
