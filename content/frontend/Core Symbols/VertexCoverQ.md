# VertexCoverQ

`VertexCoverQ[g, vlist]` yields True if the vertex list vlist is a vertex cover of the graph g, and False otherwise.

## Examples

Check if vertices form a cover:
```wolfram
g = Graph[{1 -> 2, 2 -> 3, 3 -> 1}];
VertexCoverQ[g, {1, 2}]
```

Not a cover:
```wolfram
VertexCoverQ[g, {1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexCoverQ.html) for more details.*