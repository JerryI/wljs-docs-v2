---
title: GraphQ
---

`GraphQ[g]` yields `True` if g is a valid `Graph` object and `False` otherwise.

## Examples

Test for graphs:

```wolfram
GraphQ[Graph[{1 -> 2}]]
(* True *)

GraphQ[{1 -> 2}]
(* False - just a list, not a Graph *)

GraphQ[CompleteGraph[5]]
(* True *)
```

Conditional handling:

```wolfram
If[GraphQ[g], VertexCount[g], "Not a graph"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphQ.html) for more details.*