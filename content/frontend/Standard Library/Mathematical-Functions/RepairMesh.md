---
title: RepairMesh
---

`RepairMesh[mreg]` repairs defects in the mesh region mreg.

- `RepairMesh[mreg, {def1, ...}]` repairs only the specified defects def1, ….

## Examples

```wolfram
mesh = BoundaryMeshRegion[{{0, 0}, {1, 0}, {1, 1}, {0, 1}}, Line[{1, 2, 3, 4, 1}]];
RepairMesh[mesh]
```

```wolfram
RepairMesh[mesh, {"SingularVertices"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RepairMesh.html) for more details.*