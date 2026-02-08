'use client';

import Giscus from '@giscus/react';

export function GiscusComments() {
  return (
    <Giscus
      id="comments"
      repo="JerryI/wljs-docs-v2"
      repoId="R_kgDOQv2aDA"
      category="Comments"
      categoryId="DIC_kwDOQv2aDM4C2C4o"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}

