# VertexTransitiveGraphQ

`VertexTransitiveGraphQ[g]` yields `True` if the graph g is a vertex-transitive graph and `False` otherwise.

A vertex-transitive graph is one where all vertices are equivalent under the graph's automorphism group.

## Examples

```wolfram
VertexTransitiveGraphQ[CompleteGraph[5]]
```

```wolfram
VertexTransitiveGraphQ[CycleGraph[6]]
```

```wolfram
VertexTransitiveGraphQ[PathGraph[{1, 2, 3}]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexTransitiveGraphQ.html) for more details.*