# RegionFunction

`RegionFunction` is an option for plotting functions that specifies the region to include in the plot drawn.

## Examples

```wolfram
Plot3D[Sin[x y], {x, -3, 3}, {y, -3, 3}, RegionFunction -> (x^2 + y^2 < 9 &)]
```

```wolfram
ContourPlot[x^2 + y^2, {x, -2, 2}, {y, -2, 2}, RegionFunction -> (x > 0 &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionFunction.html) for more details.*