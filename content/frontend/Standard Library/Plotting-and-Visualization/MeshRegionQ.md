---
title: MeshRegionQ
---

`MeshRegionQ[reg]` yields True if the region reg is a valid MeshRegion object and False otherwise.

## Examples

Test if an object is a valid MeshRegion:

```wolfram
MeshRegionQ[DiscretizeRegion[Disk[]]]
(* True *)
```

```wolfram
MeshRegionQ[Disk[]]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MeshRegionQ.html) for more details.*