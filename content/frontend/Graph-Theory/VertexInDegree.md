---
title: VertexInDegree
---

`VertexInDegree[g]` gives the list of vertex in-degrees for all vertices in the graph g.

- `VertexInDegree[g, v]` gives the vertex in-degree for the vertex v.
- `VertexInDegree[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
VertexInDegree[Graph[{1 -> 2, 2 -> 3, 1 -> 3}]]
```

```wolfram
VertexInDegree[Graph[{a -> b, b -> c, c -> a}], b]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexInDegree.html) for more details.