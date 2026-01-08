---
title: BreadthFirstScan
---

`BreadthFirstScan[g, s, {event1 -> f1, event2 -> f2, ...}]` performs a breadth-first scan (BFS) of the graph g starting at the vertex s and evaluates fi whenever "eventi" occurs.

`BreadthFirstScan[g, {event1 -> f1, ...}]` performs a breadth-first scan of the whole graph g.

## Examples

BFS with vertex discovery:

```wolfram
BreadthFirstScan[GridGraph[{3, 3}], 1, 
  {"DiscoverVertex" -> Print}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BreadthFirstScan.html) for more details.