---
title: VertexInComponent
---

`VertexInComponent[g, {v1, v2, ...}, k]` gives the vertices with a directed path to at least one of v1, v2, … of at most length k.

- `VertexInComponent[g, {v1, v2, ...}, {k}]` gives the vertices at length exactly k.
- `VertexInComponent[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
VertexInComponent[Graph[{1 -> 2, 2 -> 3, 3 -> 4}], {4}, 2]
```

```wolfram
VertexInComponent[Graph[{a -> b, b -> c, a -> c}], {c}, 1]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexInComponent.html) for more details.