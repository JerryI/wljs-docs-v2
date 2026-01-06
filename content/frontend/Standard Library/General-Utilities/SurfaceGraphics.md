# SurfaceGraphics

`SurfaceGraphics[array]` is a representation of a three-dimensional plot of a surface, with heights of each point on a grid specified by values in array.

`SurfaceGraphics[array, shades]` represents a surface, whose parts are shaded according to the array shades.

## Examples

```wolfram
SurfaceGraphics[Table[Sin[x + y^2], {x, 0, 3, 0.1}, {y, 0, 3, 0.1}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SurfaceGraphics.html) for more details.*