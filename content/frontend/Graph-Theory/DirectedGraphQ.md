---
title: DirectedGraphQ
---

`DirectedGraphQ[g]` yields `True` if graph g is a directed graph and `False` otherwise.

## Examples

Check if graph is directed:

```wolfram
DirectedGraphQ[Graph[{1 -> 2, 2 -> 3}]]
(* True *)

DirectedGraphQ[Graph[{1 <-> 2, 2 <-> 3}]]
(* False *)
```

Complete graphs are undirected:

```wolfram
DirectedGraphQ[CompleteGraph[5]]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DirectedGraphQ.html) for more details.