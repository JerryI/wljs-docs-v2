---
title: SimpleGraphQ
---

`SimpleGraphQ[g]` yields `True` if the graph g is a simple graph and `False` otherwise.

## Examples

Check if a graph is simple:

```wolfram
SimpleGraphQ[Graph[{1 -> 2, 2 -> 3}]]
(* True *)
```

A multigraph is not simple:

```wolfram
SimpleGraphQ[Graph[{1 -> 2, 1 -> 2}]]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SimpleGraphQ.html) for more details.*