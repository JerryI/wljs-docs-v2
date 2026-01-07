---
title: GraphDistance
---

`GraphDistance[g, s, t]` gives the shortest path distance from vertex s to vertex t in graph g.

## Examples

Distance between vertices:

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 4}]
GraphDistance[g, 1, 4]
(* 3 *)
```

Distances from one vertex to all others:

```wolfram
GraphDistance[g, 1]
(* {0, 1, 2, 3} *)
```

In a complete graph:

```wolfram
GraphDistance[CompleteGraph[5], 1, 5]
(* 1 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphDistance.html) for more details.*