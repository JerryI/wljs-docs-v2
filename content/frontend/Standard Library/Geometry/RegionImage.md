---
title: RegionImage
---

`RegionImage[reg]` returns a rasterized grayscale 2D or 3D image of reg.

- `RegionImage[reg, {{xmin, xmax}, ...}]` restricts to the bounds [xmin, xmax] × ....

## Examples

```wolfram
RegionImage[Disk[]]
```

```wolfram
RegionImage[Ball[], {{-1, 1}, {-1, 1}, {-1, 1}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionImage.html) for more details.*