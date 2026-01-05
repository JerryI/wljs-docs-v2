# LayeredGraphPlot

`LayeredGraphPlot[g]` generates a layered plot of the graph g.

`LayeredGraphPlot[{e1, e2, …}]` generates a layered plot of the graph with edges ej.

`LayeredGraphPlot[{…, w[ei], …}]` plots ei with features defined by the symbolic wrapper w.

`LayeredGraphPlot[{vi1 -> vj1, …}]` uses rules vik->vjk to specify the graph g.

`LayeredGraphPlot[m]` uses the adjacency matrix m to specify the graph g.

`LayeredGraphPlot[…, v -> pos]` places the dominant vertex v in the plot at position pos.

## Examples

```wolfram
LayeredGraphPlot[{1 -> 2, 2 -> 3, 1 -> 3}]
(* Graphics[...] *)
```

```wolfram
LayeredGraphPlot[Graph[{1 -> 2, 2 -> 3, 3 -> 4, 1 -> 4}]]
(* Graphics[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LayeredGraphPlot.html) for more details.*