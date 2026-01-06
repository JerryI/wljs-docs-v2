---
title: SurfaceColor
---

`SurfaceColor[dcol]` is a three-dimensional graphics directive which specifies that the surfaces which follow should act as diffuse reflectors of light with a color given by dcol.

- `SurfaceColor[dcol, scol]` specifies that a specular reflection component should be included, with a color given by scol.
- `SurfaceColor[dcol, {scol, n}]` specifies that the reflection should occur with specular exponent n.
- `SurfaceColor[dcol, scol, gcol]` specifies that a color gcol should be added as if there were an intrinsic glow in the polygon.

## Examples

Red diffuse surface:
```wolfram
Graphics3D[{SurfaceColor[Red], Sphere[]}]
```

Surface with specular reflection:
```wolfram
Graphics3D[{SurfaceColor[Blue, White], Sphere[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SurfaceColor.html) for more details.*