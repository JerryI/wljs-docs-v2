---
title: FindEdgeCover
---

`FindEdgeCover[g]` finds an edge cover of the graph g with a minimum number of edges.

`FindEdgeCover[{v->w,…}]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find minimum edge cover *)
g = Graph[{1 -> 2, 2 -> 3, 3 -> 4, 4 -> 1}];
FindEdgeCover[g]

(* Visualize the edge cover *)
cover = FindEdgeCover[g];
HighlightGraph[g, cover]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindEdgeCover.html) for more details.