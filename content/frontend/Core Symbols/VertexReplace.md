# VertexReplace

`VertexReplace[g, {v1 -> w1, v2 -> w2, ...}]` replaces each vertex vi in the graph g by wi.

- `VertexReplace[{v -> w, ...}, ...]` uses rules `v -> w` to specify the graph g.

This function renames vertices in a graph.

## Examples

```wolfram
g = Graph[{1 -> 2, 2 -> 3}];
VertexReplace[g, {1 -> a, 2 -> b, 3 -> c}]
```

```wolfram
VertexReplace[CycleGraph[4], {1 -> "A", 2 -> "B", 3 -> "C", 4 -> "D"}]
```

```wolfram
VertexReplace[{1 -> 2, 2 -> 3}, {1 -> x, 3 -> z}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexReplace.html) for more details.*