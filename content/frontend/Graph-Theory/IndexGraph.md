---
title: IndexGraph
---

`IndexGraph[g]` replaces the vertices of the graph g by its vertex indices.

- `IndexGraph[g, r]` replaces the vertices with integers r, r+1, ....
- `IndexGraph[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

Convert to indexed graph:
```wolfram
IndexGraph[Graph[{a -> b, b -> c, c -> a}]]
```

Start from a different index:
```wolfram
IndexGraph[graph, 10]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IndexGraph.html) for more details.*