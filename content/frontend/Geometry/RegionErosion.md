---
title: RegionErosion
---

`RegionErosion[reg, r]` gives the erosion of the region reg by a disk of radius r centered at the origin.

- `RegionErosion[reg1, reg2]` gives the erosion of the region reg1 by the region reg2.
- `RegionErosion[reg1, reg2, {u, v}]` gives the erosion of reg1 scaled by a factor u and reg2 scaled by a factor v.

## Examples

```wolfram
RegionErosion[Disk[], 0.3]
```

```wolfram
RegionErosion[Rectangle[], Disk[{0, 0}, 0.1]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionErosion.html) for more details.