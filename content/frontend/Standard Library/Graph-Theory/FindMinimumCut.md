# FindMinimumCut

`FindMinimumCut[g]` gives the minimum cut of the graph g.

`FindMinimumCut[{v->w,…}]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find minimum cut *)
g = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 4, 4 <-> 1, 1 <-> 3}];
FindMinimumCut[g]

(* Visualize the cut *)
cut = FindMinimumCut[g];
HighlightGraph[g, cut]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindMinimumCut.html) for more details.*