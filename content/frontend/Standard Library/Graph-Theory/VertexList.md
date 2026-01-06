---
title: VertexList
---

`VertexList[g]` gives the list of vertices in graph `g`.

## Examples

Get vertices from a graph:

```wolfram
g = Graph[{1 -> 2, 2 -> 3, 3 -> 1}]

VertexList[g]
(* {1, 2, 3} *)

VertexList[CompleteGraph[5]]
(* {1, 2, 3, 4, 5} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexList.html) for more details.*