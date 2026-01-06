---
title: GeodesicErosion
---

`GeodesicErosion[marker, mask]` gives the fixed point of the geodesic erosion of the `marker` constrained by the `mask`.

## Examples

```wolfram
marker = Image[{{1, 1, 1}, {1, 1, 1}, {1, 1, 1}}];
mask = Image[{{0, 0, 0}, {0, 1, 0}, {0, 0, 0}}];
GeodesicErosion[marker, mask]
```

```wolfram
GeodesicErosion[markerImage, maskImage]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeodesicErosion.html) for more details.*