---
title: WeaklyConnectedGraphQ
---

`WeaklyConnectedGraphQ[g]` yields True if the graph g is weakly connected, and False otherwise.

## Examples

Test if a graph is weakly connected:

```wolfram
g = Graph[{1 -> 2, 2 -> 3}];
WeaklyConnectedGraphQ[g]
(* True *)
```

Disconnected graph:

```wolfram
WeaklyConnectedGraphQ[Graph[{1 -> 2, 3 -> 4}]]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WeaklyConnectedGraphQ.html) for more details.