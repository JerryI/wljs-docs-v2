---
title: VertexDiceSimilarity
---

`VertexDiceSimilarity[g, u, v]` gives the Dice similarity between vertices u and v of the graph g.

- `VertexDiceSimilarity[{v -> w, ...}, ...]` uses rules `v -> w` to specify the graph g.

The Dice similarity measures the overlap between the neighborhoods of two vertices.

## Examples

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 4, 1 <-> 3}];
VertexDiceSimilarity[g, 1, 3]
```

```wolfram
VertexDiceSimilarity[CompleteGraph[5], 1, 2]
```

```wolfram
VertexDiceSimilarity[{1 -> 2, 2 -> 3, 1 -> 3}, 1, 2]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexDiceSimilarity.html) for more details.