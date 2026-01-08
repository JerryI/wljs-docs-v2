---
title: EulerianGraphQ
---

`EulerianGraphQ[g]` yields `True` if the graph g is Eulerian (has an Eulerian circuit), and `False` otherwise.

## Examples

Test if a complete graph is Eulerian:

```wolfram
EulerianGraphQ[CompleteGraph[5]]
(* True *)
```

A cycle graph is always Eulerian:

```wolfram
EulerianGraphQ[CycleGraph[6]]
(* True *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EulerianGraphQ.html) for more details.