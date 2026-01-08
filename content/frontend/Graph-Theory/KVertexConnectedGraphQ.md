---
title: KVertexConnectedGraphQ
---

`KVertexConnectedGraphQ[g, k]` yields `True` if the graph g is k-vertex-connected and `False` otherwise.

## Examples

Check if a graph is 2-vertex-connected:

```wolfram
KVertexConnectedGraphQ[CompleteGraph[5], 2]
(* True *)
```

```wolfram
KVertexConnectedGraphQ[PathGraph[{1, 2, 3}], 2]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KVertexConnectedGraphQ.html) for more details.