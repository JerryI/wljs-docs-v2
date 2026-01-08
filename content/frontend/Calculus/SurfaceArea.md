---
title: SurfaceArea
---

`SurfaceArea[reg]` gives the surface area of the three-dimensional region reg.

- `SurfaceArea[{x1, ..., xn}, {s, smin, smax}, {t, tmin, tmax}, {u, umin, umax}]` gives the surface area of the parametrized region whose Cartesian coordinates xi are functions of s, t, u.
- `SurfaceArea[{x1, ..., xn}, {s, smin, smax}, {t, tmin, tmax}, {u, umin, umax}, chart]` interprets the xi as coordinates in the specified coordinate chart.

## Examples

```wolfram
SurfaceArea[Sphere[]]
```

```wolfram
SurfaceArea[Cylinder[{{0, 0, 0}, {0, 0, 1}}, 1]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SurfaceArea.html) for more details.