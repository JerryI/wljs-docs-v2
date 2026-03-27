'use client';

import { useEffect, useRef } from 'react';

let counter = 0;

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      const mermaid = (await import('mermaid')).default;
      mermaid.initialize({ startOnLoad: false, theme: 'default' });

      if (cancelled || !ref.current) return;

      const id = `mermaid-${++counter}`;
      try {
        const { svg } = await mermaid.render(id, chart);
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (e) {
        console.error('Mermaid render error:', e);
      }
    }

    render();
    return () => { cancelled = true; };
  }, [chart]);

  return (
    <div
      ref={ref}
      className="my-6 flex justify-center overflow-x-auto invertColor"
    />
  );
}
