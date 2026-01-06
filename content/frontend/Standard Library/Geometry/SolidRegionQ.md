---
title: SolidRegionQ
---

`SolidRegionQ[reg]` gives True if the 3D region reg is a solid region and False otherwise.

## Examples

Ball is solid:

```wolfram
SolidRegionQ[Ball[]]
(* True *)
```

Sphere is not solid:

```wolfram
SolidRegionQ[Sphere[]]
(* False *)
```

Cuboid is solid:

```wolfram
SolidRegionQ[Cuboid[]]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SolidRegionQ.html) for more details.*