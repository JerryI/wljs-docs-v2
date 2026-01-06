# FindEdgeIndependentPaths

`FindEdgeIndependentPaths[g,s,t,k]` finds at most k edge-independent paths from vertex s to vertex t in the graph g.

`FindEdgeIndependentPaths[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find 2 edge-independent paths *)
g = Graph[{1 <-> 2, 1 <-> 3, 2 <-> 4, 3 <-> 4}];
FindEdgeIndependentPaths[g, 1, 4, 2]

(* Find all possible independent paths *)
FindEdgeIndependentPaths[g, 1, 4, Infinity]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindEdgeIndependentPaths.html) for more details.*