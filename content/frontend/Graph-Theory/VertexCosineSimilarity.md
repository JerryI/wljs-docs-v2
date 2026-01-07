---
title: VertexCosineSimilarity
---

`VertexCosineSimilarity[g, u, v]` gives the cosine similarity between vertices u and v of the graph g.

- `VertexCosineSimilarity[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

Calculate cosine similarity between two vertices:

```wolfram
g = Graph[{1 -> 2, 1 -> 3, 2 -> 3, 2 -> 4, 3 -> 4}];
VertexCosineSimilarity[g, 1, 2]
```

Compare different vertex pairs:

```wolfram
VertexCosineSimilarity[g, 2, 3]
```

Using edge rules directly:

```wolfram
VertexCosineSimilarity[{1 -> 2, 1 -> 3, 2 -> 3}, 1, 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexCosineSimilarity.html) for more details.*