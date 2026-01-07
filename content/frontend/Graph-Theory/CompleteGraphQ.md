---
title: CompleteGraphQ
---

`CompleteGraphQ[g]` yields True if the graph g is a complete graph, and False otherwise.

`CompleteGraphQ[g, vlist]` yields True if the subgraph induced by vlist is a complete graph.

## Examples

Test if a graph is complete:

```wolfram
CompleteGraphQ[CompleteGraph[5]]
(* True *)
```

A cycle graph is not complete:

```wolfram
CompleteGraphQ[CycleGraph[5]]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CompleteGraphQ.html) for more details.*