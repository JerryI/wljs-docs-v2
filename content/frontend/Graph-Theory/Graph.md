---
title: Graph
---

`Graph[{e1, e2, ...}]` creates a graph with specified edges. `Graph[{v1, v2, ...}, {e1, e2, ...}]` specifies both vertices and edges.

## Examples

Create graphs:

```wolfram
(* Simple graph from edges *)
Graph[{1 -> 2, 2 -> 3, 3 -> 1}]

(* Undirected graph *)
Graph[{1 <-> 2, 2 <-> 3, 3 <-> 4, 4 <-> 1}]

(* With vertex labels *)
Graph[{"A" -> "B", "B" -> "C", "C" -> "A"},
  VertexLabels -> "Name"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Graph.html) for more details.