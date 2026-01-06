---
title: GeodesicDilation
---

`GeodesicDilation[marker, mask]` gives the fixed point of the geodesic dilation of the `marker` constrained by the `mask`.

## Examples

```wolfram
marker = Image[{{0, 0, 0}, {0, 1, 0}, {0, 0, 0}}];
mask = Image[{{1, 1, 1}, {1, 1, 1}, {1, 1, 1}}];
GeodesicDilation[marker, mask]
```

```wolfram
GeodesicDilation[markerImage, maskImage]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeodesicDilation.html) for more details.*