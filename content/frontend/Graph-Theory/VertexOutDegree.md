---
title: VertexOutDegree
---

`VertexOutDegree[g]` gives the list of vertex out-degrees for all vertices in the graph g.

`VertexOutDegree[g, v]` gives the vertex out-degree for the vertex v.

`VertexOutDegree[{v -> w, ...}, ...]` uses rules v->w to specify the graph g.

## Examples

```wolfram
VertexOutDegree[Graph[{1 -> 2, 2 -> 3, 1 -> 3}]]
(* {2, 1, 0} *)
```

```wolfram
VertexOutDegree[Graph[{1 -> 2, 2 -> 3}], 1]
(* 1 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexOutDegree.html) for more details.*