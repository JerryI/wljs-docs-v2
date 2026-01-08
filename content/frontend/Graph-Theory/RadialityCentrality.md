---
title: RadialityCentrality
---

`RadialityCentrality[g]` gives a list of radiality centralities for the vertices in the graph g.

`RadialityCentrality[g,"In"]` gives a list of in-centralities for a directed graph g.

`RadialityCentrality[g,"Out"]` gives a list of out-centralities for a directed graph g.

`RadialityCentrality[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

Compute radiality centrality for a graph:

```wolfram
RadialityCentrality[CycleGraph[5]]
(* {3/4, 3/4, 3/4, 3/4, 3/4} *)
```

Radiality centrality for a star graph:

```wolfram
RadialityCentrality[StarGraph[5]]
(* {1, 5/8, 5/8, 5/8, 5/8} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RadialityCentrality.html) for more details.