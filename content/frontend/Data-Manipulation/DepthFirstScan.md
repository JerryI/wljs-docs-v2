---
title: DepthFirstScan
---

`DepthFirstScan[g, s, {event1 -> f1, event2 -> f2, ...}]` performs a depth-first scan of the graph g starting at the vertex s and evaluates fi whenever "eventi" occurs.

`DepthFirstScan[g, {event1 -> f1, event2 -> f2, ...}]` performs a depth-first scan of the whole graph g.

`DepthFirstScan[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

Perform a depth-first scan:

```wolfram
DepthFirstScan[Graph[{1 -> 2, 2 -> 3, 1 -> 3}], 1, {"PrevisitVertex" -> Print}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DepthFirstScan.html) for more details.