---
title: AdjacencyList
---

`AdjacencyList[g,v]` gives a list of vertices adjacent to vertex v.

`AdjacencyList[g,patt]` gives a list of vertices adjacent to vertices that match the pattern patt.

`AdjacencyList[g,patt,d]` gives a list of vertices that are at distance at most d.

`AdjacencyList[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

Get vertices adjacent to vertex 1 in a graph:

```wolfram
AdjacencyList[Graph[{1 -> 2, 2 -> 3, 1 -> 3}], 1]
(* {2, 3} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AdjacencyList.html) for more details.