# HalftoneShading

`HalftoneShading[]` is a three-dimensional graphics directive specifying that surfaces that follow are to be drawn with a base pattern of dots.

- `HalftoneShading[d]` uses the density `d` of shading.
- `HalftoneShading[col]` uses dots with the specified color `col`.
- `HalftoneShading["shape"]` uses the specified `"shape"` as base pattern.
- `HalftoneShading[d, col, "shape"]` uses a fixed pattern of `"shape"` with the specified color `col` and density `d`.

## Examples

```wolfram
Graphics3D[{HalftoneShading[], Sphere[]}]
```

```wolfram
Graphics3D[{HalftoneShading[0.5, Red, "Circle"], Cuboid[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HalftoneShading.html) for more details.*