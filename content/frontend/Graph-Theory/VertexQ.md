---
title: VertexQ
---

`VertexQ[g, v]` yields `True` if v is a vertex in the graph g and `False` otherwise.

## Examples

Check if a vertex exists in a graph:

```wolfram
g = Graph[{1 -> 2, 2 -> 3}];
VertexQ[g, 2]
(* True *)
```

Non-existent vertex:

```wolfram
VertexQ[g, 5]
(* False *)
```

With named vertices:

```wolfram
g = Graph[{"a" -> "b", "b" -> "c"}];
VertexQ[g, "a"]
(* True *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexQ.html) for more details.