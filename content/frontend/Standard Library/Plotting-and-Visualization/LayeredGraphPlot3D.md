# LayeredGraphPlot3D

`LayeredGraphPlot3D[g]` generates a 3D layered plot of the graph g.

- `LayeredGraphPlot3D[{e1, e2, ...}]` generates a 3D layered plot of the graph with edges ei.
- `LayeredGraphPlot3D[{vi1 -> vj1, ...}]` uses rules vik -> vjk to specify the graph g.
- `LayeredGraphPlot3D[m]` uses the adjacency matrix m to specify the graph g.

## Examples

```wolfram
LayeredGraphPlot3D[{1 -> 2, 2 -> 3, 3 -> 4, 1 -> 4}]
```

```wolfram
LayeredGraphPlot3D[Graph[{1 -> 2, 1 -> 3, 2 -> 4, 3 -> 4}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LayeredGraphPlot3D.html) for more details.*