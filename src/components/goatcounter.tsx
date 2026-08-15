'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    goatcounter?: {
      count?: (options?: {
        path?: string;
        title?: string;
        referrer?: string;
        event?: boolean;
        no_session?: boolean;
      }) => void;
    };
  }
}

function isEnabled(value: string | undefined) {
  return ['1', 't', 'true'].includes(value?.toLowerCase() ?? '');
}

function PageViewTracker({ ready }: { ready: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedPath = useRef<string | null>(null);
  const query = searchParams.toString();
  const path = query ? `${pathname}?${query}` : pathname;

  useEffect(() => {
    if (!ready || !window.goatcounter?.count) return;

    if (lastTrackedPath.current !== path) {
      window.goatcounter.count({ path, title: document.title });
      lastTrackedPath.current = path;
    }
  }, [path, ready]);

  useEffect(() => {
    if (!ready) return;

    const trackClick = (event: MouseEvent) => {
      const element =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>('[data-goatcounter-click]')
          : null;

      if (!element || !window.goatcounter?.count) return;

      window.goatcounter.count({
        event: true,
        path:
          element.dataset.goatcounterClick || element.getAttribute('name') || element.id,
        title:
          element.dataset.goatcounterTitle ||
          element.title ||
          element.textContent?.trim().slice(0, 200),
        referrer:
          element.dataset.goatcounterReferrer ||
          element.dataset.goatcounterReferral ||
          '',
        no_session: isEnabled(element.dataset.goatcounterNoSession),
      });
    };

    document.addEventListener('click', trackClick);
    document.addEventListener('auxclick', trackClick);

    return () => {
      document.removeEventListener('click', trackClick);
      document.removeEventListener('auxclick', trackClick);
    };
  }, [ready]);

  return null;
}

export default function GoatCounter() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Script
        id="goatcounter"
        src="https://gc.zgo.at/count.js"
        data-goatcounter="https://jerryi.goatcounter.com/count"
        data-goatcounter-settings='{"no_onload":true}'
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      />
      <Suspense fallback={null}>
        <PageViewTracker ready={ready} />
      </Suspense>
    </>
  );
}
