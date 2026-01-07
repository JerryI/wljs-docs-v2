---
title: RegionIntersection
---

`RegionIntersection[reg1, reg2, ...]` gives the intersection of the regions.

## Examples

Intersection of disks:

```wolfram
RegionIntersection[Disk[{0, 0}, 1], Disk[{0.5, 0}, 1]]
```

Intersection of ball and box:

```wolfram
RegionIntersection[Ball[], Cuboid[{0, 0, 0}, {1, 1, 1}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionIntersection.html) for more details.*