---
title: FindSpanningTree
---

`FindSpanningTree[g]` finds a spanning tree of graph g that connects all vertices with minimum total edge weight.

## Examples

Spanning tree of a complete graph:

```wolfram
FindSpanningTree[CompleteGraph[5]]
```

From a grid:

```wolfram
FindSpanningTree[GridGraph[{3, 3}]]
(* Tree with 9 vertices, 8 edges *)
```

Minimum spanning tree with weights:

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3, 1 <-> 3}, 
  EdgeWeight -> {1, 2, 3}]
FindSpanningTree[g]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindSpanningTree.html) for more details.