---
title: RegionCentroid
---

`RegionCentroid[reg]` gives the centroid of the region.

## Examples

Centroid of a triangle:

```wolfram
RegionCentroid[Triangle[{{0, 0}, {1, 0}, {0, 1}}]]
(* {1/3, 1/3} *)
```

Centroid of a disk:

```wolfram
RegionCentroid[Disk[{2, 3}, 1]]
(* {2, 3} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionCentroid.html) for more details.