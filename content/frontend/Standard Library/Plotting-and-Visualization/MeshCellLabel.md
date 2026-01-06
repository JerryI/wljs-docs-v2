---
title: MeshCellLabel
---

`MeshCellLabel` is an option to `MeshRegion`, `BoundaryMeshRegion` and related functions that specifies labels and placements for mesh cells.

## Examples

```wolfram
MeshRegion[{{0, 0}, {1, 0}, {1, 1}, {0, 1}}, 
  Polygon[{1, 2, 3, 4}], MeshCellLabel -> {0 -> Automatic}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MeshCellLabel.html) for more details.*