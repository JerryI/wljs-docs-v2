---
title: BoundaryMeshRegionQ
---

`BoundaryMeshRegionQ[reg]` yields True if the region reg is a valid BoundaryMeshRegion object and False otherwise.

## Examples

Test if region is a boundary mesh:

```wolfram
reg = BoundaryMeshRegion[{{0, 0}, {1, 0}, {0, 1}}, Line[{1, 2, 3, 1}]];
BoundaryMeshRegionQ[reg]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BoundaryMeshRegionQ.html) for more details.