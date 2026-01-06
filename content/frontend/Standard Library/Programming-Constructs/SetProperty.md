---
title: SetProperty
---

`SetProperty[{obj, itemspec}, name -> value]` sets the property `name -> value` for itemspec in obj.

This function sets properties on objects like graphs, where items can be vertices or edges.

## Examples

```wolfram
g = Graph[{1 -> 2, 2 -> 3}];
SetProperty[{g, 1}, VertexLabels -> "name"]
```

```wolfram
SetProperty[{g, 1 -> 2}, EdgeStyle -> Red]
```

```wolfram
SetProperty[g, GraphLayout -> "CircularEmbedding"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SetProperty.html) for more details.*