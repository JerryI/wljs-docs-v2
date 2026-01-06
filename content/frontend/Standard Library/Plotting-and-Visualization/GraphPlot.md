# GraphPlot

`GraphPlot[g]` generates a plot of the graph g. Works with adjacency lists, rules, or matrices.

## Examples

Plot a simple graph:

```wolfram
GraphPlot[{1 -> 2, 2 -> 3, 3 -> 1}]
```

From adjacency matrix:

```wolfram
GraphPlot[{{0, 1, 1}, {1, 0, 1}, {1, 1, 0}}]
```

With styling:

```wolfram
GraphPlot[{a -> b, b -> c}, VertexLabeling -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphPlot.html) for more details.*