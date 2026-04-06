---
title: ConnectedMeshComponents
---

`ConnectedMeshComponents[mr]` gives a list {c1, c2, ...} of disjoint path connected meshed regions.

## Examples

Find connected components of a mesh:

```wolfram
mesh = BoundaryMesh[Ball[{0, 0, 0}, 1]];
ConnectedMeshComponents[mesh]
```

Multiple disconnected regions:

```wolfram
r = RegionUnion[Ball[{0, 0, 0}], Ball[{5, 0, 0}]];
ConnectedMeshComponents[BoundaryDiscretizeRegion[r]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConnectedMeshComponents.html) for more details.