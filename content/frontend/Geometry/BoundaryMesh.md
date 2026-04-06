---
title: BoundaryMesh
---

`BoundaryMesh[mreg]` gives a BoundaryMeshRegion from a MeshRegion mreg.

## Examples

Create boundary mesh from region:

```wolfram
mesh = MeshRegion[{{0, 0}, {1, 0}, {1, 1}, {0, 1}}, Polygon[{1, 2, 3, 4}]];
BoundaryMesh[mesh]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BoundaryMesh.html) for more details.