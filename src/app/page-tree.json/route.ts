import { source } from '@/lib/source';

export const dynamic = 'force-static';

export async function GET() {
  const pageTree = source.pageTree;
  const serialized = await source.serializePageTree(pageTree);
  
  return new Response(JSON.stringify(serialized), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
