# FindVertexColoring

`FindVertexColoring[g]` finds a coloring with minimal size for the vertices in the graph g.

`FindVertexColoring[g, {c1, c2, ...}]` finds a coloring using the specified colors for the vertices in the graph g.

## Examples

Find a minimal vertex coloring:

```wolfram
FindVertexColoring[PetersenGraph[]]
(* {1, 2, 3, 2, 3, 1, 3, 1, 2, 1} *)
```

Use specific colors:

```wolfram
FindVertexColoring[CycleGraph[4], {Red, Blue}]
(* {Red, Blue, Red, Blue} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindVertexColoring.html) for more details.*