# TreePlot

`TreePlot[g]` generates a tree plot of the graph *g*.

- `TreePlot[{e1, e2, ...}]` generates a tree plot of the graph with edges *ej*.
- `TreePlot[{..., w[ei], ...}]` plots *ei* with features defined by the symbolic wrapper *w*.
- `TreePlot[{vi1 -> vj1, ...}]` uses rules *vi1 -> vj1* to specify the graph *g*.
- `TreePlot[m]` generates a tree plot of the graph represented by the adjacency matrix *m*.
- `TreePlot[..., v -> pos]` places the root *v* in the plot at position *pos*.

## Examples

```wolfram
TreePlot[{1 -> 2, 1 -> 3, 2 -> 4, 2 -> 5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreePlot.html) for more details.*