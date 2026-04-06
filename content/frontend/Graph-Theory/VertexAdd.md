---
title: VertexAdd
---

`VertexAdd[g, v]` makes a graph by adding the vertex v to the graph g.

- `VertexAdd[g, {v1, v2, ...}]` adds a collection of vertices to g.
- `VertexAdd[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
VertexAdd[Graph[{1 -> 2, 2 -> 3}], 4]
```

```wolfram
VertexAdd[CycleGraph[4], {5, 6}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexAdd.html) for more details.