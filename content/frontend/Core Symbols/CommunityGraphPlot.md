# CommunityGraphPlot

`CommunityGraphPlot[g]` generates a plot showing the community structure of the graph g.

`CommunityGraphPlot[g, {{vi1, vi2, ...}, ...}]` generates a plot for the graph g with communities {vi1, vi2, ...}, ....

`CommunityGraphPlot[g, {..., wj[{vi1, ...}], ...}]` generates a plot with highlighting features defined by the symbol wrappers wj.

`CommunityGraphPlot[{vi1 -> vj1, vi2 -> vj2, ...}, ...]` generates a plot for a graph in which vertex vik is connected to vertex vjk.

`CommunityGraphPlot[m, ...]` generates a plot for a graph represented by the adjacency matrix m.

## Examples

```wolfram
CommunityGraphPlot[RandomGraph[{20, 40}]]
```

```wolfram
CommunityGraphPlot[PetersenGraph[]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CommunityGraphPlot.html) for more details.*