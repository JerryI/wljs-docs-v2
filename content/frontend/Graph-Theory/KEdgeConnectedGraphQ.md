---
title: KEdgeConnectedGraphQ
---

`KEdgeConnectedGraphQ[g,k]` yields True if the graph g is k-edge-connected and False otherwise.

## Examples

Check if a graph is 2-edge-connected:

```wolfram
KEdgeConnectedGraphQ[CompleteGraph[5], 2]
(* True *)
```

```wolfram
KEdgeConnectedGraphQ[PathGraph[{1, 2, 3}], 2]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KEdgeConnectedGraphQ.html) for more details.