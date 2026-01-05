# LineGraph

`LineGraph[g]` gives the line graph of the graph g.

`LineGraph[{v -> w, ...}]` uses rules v->w to specify the graph g.

## Examples

Line graph of a cycle:

```wolfram
LineGraph[CycleGraph[5]]
(* CycleGraph[5] *)
```

Line graph of a complete graph:

```wolfram
LineGraph[CompleteGraph[4]]
(* Octahedral graph *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LineGraph.html) for more details.*