# TransitiveReductionGraph

`TransitiveReductionGraph[g]` gives a transitive reduction of the graph g.

`TransitiveReductionGraph[{v -> w, ...}]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
TransitiveReductionGraph[{1 -> 2, 2 -> 3, 1 -> 3}]
```

```wolfram
TransitiveReductionGraph[CompleteGraph[4, DirectedEdges -> True]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransitiveReductionGraph.html) for more details.*