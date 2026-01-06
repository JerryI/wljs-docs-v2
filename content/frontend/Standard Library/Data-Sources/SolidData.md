---
title: SolidData
---

`SolidData[entity, property]` gives the value of the specified property for the solid entity.

`SolidData[{entity1, entity2, ...}, property]` gives a list of property values for the specified solid entities.

## Examples

Get properties of a solid:

```wolfram
SolidData["Tetrahedron", "VertexCount"]
(* 4 *)
```

Get multiple properties:

```wolfram
SolidData["Cube", {"FaceCount", "EdgeCount"}]
(* {6, 12} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SolidData.html) for more details.*