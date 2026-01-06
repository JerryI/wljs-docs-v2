---
title: GoochShading
---

`GoochShading[]` is a three-dimensional graphics directive specifying that surfaces that follow are to be drawn with a warm color facing toward the light and a cool color facing away.

- `GoochShading[col]` uses cool and warm colors obtained by blending `col` with slate Blue and Orange.
- `GoochShading[{ccol, wcol}]` uses the cool color `ccol` and the warm color `wcol`.
- `GoochShading[{w1, w2} -> {ccol, wcol}]` uses the colors `ccol` and `wcol` weighted by the `wi`.
- `GoochShading["scheme"]` uses the specified gradient color scheme in `ColorData`.

## Examples

```wolfram
Graphics3D[{GoochShading[], Sphere[]}]
```

```wolfram
Graphics3D[{GoochShading[{Blue, Yellow}], Torus[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GoochShading.html) for more details.*