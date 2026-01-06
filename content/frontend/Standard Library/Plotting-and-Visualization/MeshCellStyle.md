---
title: MeshCellStyle
---

`MeshCellStyle` is an option and annotation of `MeshRegion`, `BoundaryMeshRegion`, and related functions that specifies styles to use for mesh cells.

## Examples

```wolfram
MeshRegion[pts, cells, MeshCellStyle -> {2 -> LightBlue}]
```

```wolfram
BoundaryMeshRegion[mesh, MeshCellStyle -> {{1, All} -> Red}]
```

```wolfram
MeshRegion[pts, Polygon[faces], MeshCellStyle -> {0 -> PointSize[Large]}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MeshCellStyle.html) for more details.*