---
title: VertexShapeFunction
---

`VertexShapeFunction` is an option and annotation for `Graph` and related functions that specifies a function to use to generate primitives for rendering each vertex.

## Examples

Custom vertex shapes:
```wolfram
Graph[{1 -> 2, 2 -> 3}, VertexShapeFunction -> (Disk[#1, 0.2] &)]
```

Different shapes per vertex:
```wolfram
Graph[graph, VertexShapeFunction -> {1 -> "Square", 2 -> "Star"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexShapeFunction.html) for more details.*