---
title: MeshCellShapeFunction
---

`MeshCellShapeFunction` is an option and annotation for `MeshRegion`, `BoundaryMeshRegion`, and related functions that specifies functions to use to generate primitives for rendering mesh cells.

## Examples

```wolfram
MeshRegion[{{0, 0}, {1, 0}, {1, 1}}, Triangle[{1, 2, 3}], 
  MeshCellShapeFunction -> {2 -> (Polygon[#] &)}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MeshCellShapeFunction.html) for more details.*