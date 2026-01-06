---
title: PropertyList
---

`PropertyList[{obj,itemspec}]` lists the properties available for itemspec in obj.

## Examples

List properties of a graph vertex:

```wolfram
g = Graph[{1 -> 2, 2 -> 3}, VertexLabels -> "Name"];
PropertyList[{g, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PropertyList.html) for more details.*