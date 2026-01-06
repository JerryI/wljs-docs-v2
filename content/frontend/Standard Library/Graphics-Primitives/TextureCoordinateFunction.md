# TextureCoordinateFunction

`TextureCoordinateFunction` is an option to `Plot3D` and similar functions that specifies a function that computes texture coordinates.

## Examples

Apply texture coordinates to a 3D surface:

```wolfram
Plot3D[Sin[x] Cos[y], {x, 0, 2 Pi}, {y, 0, 2 Pi}, 
  PlotStyle -> Texture[ExampleData[{"ColorTexture", "Bricks"}]],
  TextureCoordinateFunction -> ({#1, #2} &)]
```

Custom texture mapping:

```wolfram
Plot3D[x^2 + y^2, {x, -1, 1}, {y, -1, 1},
  TextureCoordinateFunction -> ({#4, #5} &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TextureCoordinateFunction.html) for more details.*