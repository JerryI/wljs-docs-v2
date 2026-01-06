---
title: VertexComponent
---

`VertexComponent[g,{v1,v2,…}]` gives the vertices in the graph g that have a path to at least one of v1, v2, ….

`VertexComponent[g,{v1,v2,…},k]` gives the vertices with a path to at least one of v1, v2, … of at most length k.

`VertexComponent[g,{v1,v2,…},{k}]` gives the vertices at length exactly k.

`VertexComponent[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
VertexComponent[Graph[{1 -> 2, 2 -> 3, 3 -> 4}], {1}]
(* {1, 2, 3, 4} *)
```

```wolfram
VertexComponent[Graph[{1 -> 2, 2 -> 3, 3 -> 4}], {1}, 2]
(* {1, 2, 3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexComponent.html) for more details.*