# ContourShading

`ContourShading` is an option for contour plots that specifies how the regions between contour lines should be shaded.

## Examples

No shading between contours:

```wolfram
ContourPlot[x^2 + y^2, {x, -2, 2}, {y, -2, 2}, ContourShading -> None]
```

Custom shading colors:

```wolfram
ContourPlot[x^2 + y^2, {x, -2, 2}, {y, -2, 2}, 
  ContourShading -> {White, LightBlue, Blue}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContourShading.html) for more details.*