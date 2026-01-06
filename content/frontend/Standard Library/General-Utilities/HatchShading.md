---
title: HatchShading
---

`HatchShading[]` is a three-dimensional graphics directive specifying that objects that follow are to be drawn with closely spaced parallel lines.

- `HatchShading[d]` uses the density d of shading.
- `HatchShading[col]` uses lines with the specified color col.
- `HatchShading[d, col]` uses lines with the specified color col and density d.

## Examples

Apply hatch shading to a 3D surface:
```wolfram
Graphics3D[{HatchShading[], Sphere[]}]
```

Use colored hatch shading with custom density:
```wolfram
Graphics3D[{HatchShading[0.5, Red], Cuboid[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HatchShading.html) for more details.*