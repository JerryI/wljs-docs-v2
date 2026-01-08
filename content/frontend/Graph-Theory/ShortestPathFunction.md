---
title: ShortestPathFunction
---

`ShortestPathFunction[type, data]` represents a function that gives the shortest path from a source vertex s to target vertex t in a graph.

## Examples

Find shortest paths from a single source:

```wolfram
g = Graph[{1 -> 2, 2 -> 3, 1 -> 3, 3 -> 4}];
spf = FindShortestPath[g, 1, All]
```

Get path to a specific target:

```wolfram
spf[4]
(* {1, 3, 4} *)
```

Use with weighted graphs:

```wolfram
g = Graph[{1 -> 2, 2 -> 3, 1 -> 3}, EdgeWeight -> {1, 1, 5}];
spf = FindShortestPath[g, 1, All];
spf[3]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ShortestPathFunction.html) for more details.