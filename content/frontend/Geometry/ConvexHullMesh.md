---
title: ConvexHullMesh
---

`ConvexHullMesh[{p1, p2, ...}]` gives a BoundaryMeshRegion representing the convex hull from the points p1, p2, ....

`ConvexHullMesh[mreg]` gives the convex hull of the mesh region mreg.

## Examples

Convex hull of random points:

```wolfram
pts = RandomReal[1, {20, 2}];
ConvexHullMesh[pts]
```

3D convex hull:

```wolfram
pts3D = RandomReal[1, {30, 3}];
ConvexHullMesh[pts3D]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConvexHullMesh.html) for more details.