---
title: FindShortestPath
---

`FindShortestPath[g, s, t]` finds the shortest path from source vertex s to target vertex t in graph g.

## Examples

Find shortest path:

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 4, 1 <-> 4}]
FindShortestPath[g, 1, 3]
(* {1, 2, 3} or {1, 4, 3} *)
```

In a grid:

```wolfram
FindShortestPath[GridGraph[{5, 5}], 1, 25]
```

Path length:

```wolfram
Length[FindShortestPath[g, 1, 3]] - 1
(* 2 edges *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindShortestPath.html) for more details.*