---
title: RegionFarthestDistance
---

`RegionFarthestDistance[reg1, reg2]` gives the farthest distance between points in the regions reg1 and reg2.

## Examples

Farthest distance between two disks:

```wolfram
RegionFarthestDistance[Disk[{0, 0}], Disk[{5, 0}]]
(* 7 *)
```

Farthest distance between a point and a region:

```wolfram
RegionFarthestDistance[Point[{0, 0}], Rectangle[{1, 1}, {3, 3}]]
```

Between two triangles:

```wolfram
RegionFarthestDistance[
  Triangle[{{0, 0}, {1, 0}, {0, 1}}],
  Triangle[{{2, 2}, {3, 2}, {2, 3}}]
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionFarthestDistance.html) for more details.*