---
title: BetweennessCentrality
---

`BetweennessCentrality[g]` gives a list of betweenness centralities for the vertices in the graph g.

`BetweennessCentrality[{v -> w, ...}]` uses rules to specify the graph.

## Examples

Compute betweenness centrality:

```wolfram
BetweennessCentrality[CycleGraph[5]]
(* {1, 1, 1, 1, 1} *)
```

```wolfram
BetweennessCentrality[StarGraph[5]]
(* {6, 0, 0, 0, 0} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BetweennessCentrality.html) for more details.*