---
title: KatzCentrality
---

`KatzCentrality[g,α]` gives a list of Katz centralities for the vertices in the graph g and weight α.

`KatzCentrality[g,α,β]` gives a list of Katz centralities using weight α and initial centralities β.

`KatzCentrality[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

Compute Katz centrality for a simple graph:

```wolfram
g = Graph[{1 -> 2, 2 -> 3, 3 -> 1}];
KatzCentrality[g, 0.1]
(* {1.11, 1.11, 1.11} *)
```

Use with a path graph:

```wolfram
KatzCentrality[PathGraph[Range[5]], 0.5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KatzCentrality.html) for more details.