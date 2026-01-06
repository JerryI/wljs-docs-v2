---
title: VertexDelete
---

`VertexDelete[g, v]` makes a graph by deleting the vertex v and all edges connected to v from the graph g.

- `VertexDelete[g, {v1, v2, ...}]` deletes a collection of vertices from g.
- `VertexDelete[g, patt]` deletes all vertices that match the pattern patt.
- `VertexDelete[{v -> w, ...}, ...]` uses rules to specify the graph g.

## Examples

```wolfram
VertexDelete[CompleteGraph[5], 1]
```

```wolfram
VertexDelete[graph, {1, 2, 3}]
```

```wolfram
VertexDelete[g, _?OddQ]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexDelete.html) for more details.*