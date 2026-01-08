---
title: FindPlanarColoring
---

`FindPlanarColoring[g]` finds a coloring with minimal size for the faces of the planar graph g.

`FindPlanarColoring[g,{c1,c2,…}]` finds a coloring {c1,c2,…,ck} for the faces in the graph g.

## Examples

```wolfram
(* Find face coloring for a planar graph *)
g = GridGraph[{3, 3}];
FindPlanarColoring[g]

(* Use specific colors *)
FindPlanarColoring[g, {Red, Blue, Green, Yellow}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindPlanarColoring.html) for more details.