---
title: VertexOutComponent
---

`VertexOutComponent[g, {v1, v2, ...}]` gives the vertices in the graph g that have a directed path from at least one of v1, v2, ....

- `VertexOutComponent[g, {v1, v2, ...}, k]` gives the vertices with a directed path from at least one of v1, v2, ... of at most length k.
- `VertexOutComponent[g, {v1, v2, ...}, {k}]` gives the vertices at length exactly k.
- `VertexOutComponent[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

Find vertices reachable from a vertex:

```wolfram
g = Graph[{1 -> 2, 2 -> 3, 1 -> 4}];
VertexOutComponent[g, {1}]
(* {1, 2, 3, 4} *)
```

Limit search depth:

```wolfram
VertexOutComponent[g, {1}, 1]
(* {1, 2, 4} *)
```

Vertices at exact distance:

```wolfram
VertexOutComponent[g, {1}, {2}]
(* {3} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexOutComponent.html) for more details.