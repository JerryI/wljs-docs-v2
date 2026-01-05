# GraphPlot3D

`GraphPlot3D[g]` generates a 3D plot of the graph g.

`GraphPlot3D[{e1, e2, …}]` generates a 3D plot of the graph with edges ei.

`GraphPlot3D[{…, w[ei], …}]` plots ei with features defined by the symbolic wrapper w.

`GraphPlot3D[{vi1 -> vj1, …}]` uses rules to specify the graph g.

`GraphPlot3D[m]` uses the adjacency matrix m to specify the graph g.

## Examples

Plot a 3D graph from edges:

```wolfram
GraphPlot3D[{1 -> 2, 2 -> 3, 3 -> 1, 1 -> 4}]
```

Plot a complete graph in 3D:

```wolfram
GraphPlot3D[CompleteGraph[5]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphPlot3D.html) for more details.*