---
title: FindGraphIsomorphism
---

`FindGraphIsomorphism[g1,g2]` finds an isomorphism that maps the graph g1 to g2 by renaming vertices.

- `FindGraphIsomorphism[g1,g2,n]` finds at most n isomorphisms. 
- `FindGraphIsomorphism[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find isomorphism between two graphs *)
g1 = CycleGraph[5];
g2 = Graph[{1 -> 2, 2 -> 3, 3 -> 4, 4 -> 5, 5 -> 1}];
FindGraphIsomorphism[g1, g2]

(* Find multiple isomorphisms *)
FindGraphIsomorphism[g1, g2, 3]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindGraphIsomorphism.html) for more details.