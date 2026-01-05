# VertexDegree

`VertexDegree[g]` gives the list of vertex degrees for all vertices in graph g. `VertexDegree[g, v]` gives the degree for vertex v.

## Examples

Get all vertex degrees:

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 1, 1 <-> 4}]
VertexDegree[g]
(* {3, 2, 2, 1} *)
```

Degree of a specific vertex:

```wolfram
VertexDegree[g, 1]
(* 3 *)
```

Complete graph degrees:

```wolfram
VertexDegree[CompleteGraph[5]]
(* {4, 4, 4, 4, 4} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexDegree.html) for more details.*