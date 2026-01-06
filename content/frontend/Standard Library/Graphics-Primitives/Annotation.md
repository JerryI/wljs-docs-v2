---
title: Annotation
---

`Annotation[expr, data]` represents an expression expr, with annotation data.

`Annotation[expr, data, "type"]` specifies the type of annotation being given.

`Annotation[items, key -> value]` associates key-value pairs with items in objects such as `Graph`, `MeshRegion` etc.

## Examples

Add an annotation to an expression:

```wolfram
Annotation[x^2, "This is a quadratic expression"]
```

Annotate a graph vertex:

```wolfram
Graph[{1 -> 2, 2 -> 3}, VertexLabels -> Annotation[1, "Start"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Annotation.html) for more details.*