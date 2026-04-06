---
title: EmbeddingLayer
---

`EmbeddingLayer[size,n]` represents a trainable net layer that embeds integers between 1 and n into a continuous vector space of dimension size.

`EmbeddingLayer[size]` leaves the n to be inferred from context.

## Examples

Create an embedding layer for 1000 tokens with 128-dimensional vectors:

```wolfram
EmbeddingLayer[128, 1000]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EmbeddingLayer.html) for more details.