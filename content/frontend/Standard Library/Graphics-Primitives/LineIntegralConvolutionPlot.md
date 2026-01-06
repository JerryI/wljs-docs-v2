# LineIntegralConvolutionPlot

`LineIntegralConvolutionPlot[{{vx, vy}, image}, {x, xmin, xmax}, {y, ymin, ymax}]` generates a line integral convolution plot of image convolved with the vector field {vx, vy} as a function of x and y.

- `LineIntegralConvolutionPlot[{vx, vy}, {x, xmin, xmax}, {y, ymin, ymax}]` generates a line integral convolution plot of white noise with the vector field {vx, vy}.

## Examples

```wolfram
LineIntegralConvolutionPlot[{-y, x}, {x, -2, 2}, {y, -2, 2}]
```

```wolfram
LineIntegralConvolutionPlot[{Sin[x], Cos[y]}, {x, 0, 2 Pi}, {y, 0, 2 Pi}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LineIntegralConvolutionPlot.html) for more details.*