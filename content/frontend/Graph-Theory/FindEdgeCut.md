---
title: FindEdgeCut
---

`FindEdgeCut[g]` finds a smallest edge cut of the graph g.

- `FindEdgeCut[g,s,t]` finds a smallest s-t edge cut of the graph g.
- `FindEdgeCut[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find the smallest edge cut *)
g = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 4, 1 <-> 4}];
FindEdgeCut[g]

(* Find s-t edge cut *)
FindEdgeCut[g, 1, 3]

(* Visualize the cut *)
cut = FindEdgeCut[g];
HighlightGraph[g, cut]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindEdgeCut.html) for more details.