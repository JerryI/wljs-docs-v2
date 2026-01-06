---
title: ClosenessCentrality
---

`ClosenessCentrality[g]` gives a list of closeness centralities for the vertices in the graph g.

`ClosenessCentrality[{v -> w, ...}]` uses rules to specify the graph g.

## Examples

Closeness centrality of a graph:

```wolfram
ClosenessCentrality[CycleGraph[5]]
(* {0.666667, 0.666667, 0.666667, 0.666667, 0.666667} *)
```

Star graph centrality:

```wolfram
ClosenessCentrality[StarGraph[5]]
(* {1., 0.571429, 0.571429, 0.571429, 0.571429} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClosenessCentrality.html) for more details.*