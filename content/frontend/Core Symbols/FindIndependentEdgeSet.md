# FindIndependentEdgeSet

`FindIndependentEdgeSet[g]` finds an independent edge set of the graph g with a maximum number of edges.

`FindIndependentEdgeSet[{v->w,…}]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find maximum independent edge set *)
g = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 4, 4 <-> 1, 1 <-> 3}];
FindIndependentEdgeSet[g]

(* Visualize the edge set *)
edges = FindIndependentEdgeSet[g];
HighlightGraph[g, edges]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindIndependentEdgeSet.html) for more details.*