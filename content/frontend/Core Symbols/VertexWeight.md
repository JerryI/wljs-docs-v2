# VertexWeight

`VertexWeight` is an option and annotation for `Graph` and related functions that specifies a vertex weight.

## Examples

Create a graph with custom vertex weights:
```wolfram
Graph[{1 -> 2, 2 -> 3, 3 -> 1}, VertexWeight -> {1 -> 5, 2 -> 3, 3 -> 8}]
```

Extract vertex weights from a graph:
```wolfram
g = Graph[{1 <-> 2, 2 <-> 3}, VertexWeight -> {1 -> 10, 2 -> 20, 3 -> 30}];
AnnotationValue[g, VertexWeight]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexWeight.html) for more details.*