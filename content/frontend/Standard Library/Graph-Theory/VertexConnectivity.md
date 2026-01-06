---
title: VertexConnectivity
---

`VertexConnectivity[g]` gives the vertex connectivity of the graph g.

- `VertexConnectivity[g, s, t]` gives the s-t vertex connectivity of the graph g.
- `VertexConnectivity[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

Find vertex connectivity of a graph:

```wolfram
g = CompleteGraph[5];
VertexConnectivity[g]
(* 4 *)
```

Connectivity between specific vertices:

```wolfram
VertexConnectivity[g, 1, 3]
```

Using edge rules:

```wolfram
VertexConnectivity[{1 -> 2, 2 -> 3, 3 -> 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexConnectivity.html) for more details.*