# StreamDensityPlot

`StreamDensityPlot[{{vx, vy}, r}, {x, xmin, xmax}, {y, ymin, ymax}]` generates stream lines superimposed on a density plot of scalar field r.

## Examples

Stream with density background:

```wolfram
StreamDensityPlot[{{-y, x}, x^2 + y^2}, {x, -2, 2}, {y, -2, 2}]
```

Using vector magnitude:

```wolfram
StreamDensityPlot[{-y, x}, {x, -2, 2}, {y, -2, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StreamDensityPlot.html) for more details.*