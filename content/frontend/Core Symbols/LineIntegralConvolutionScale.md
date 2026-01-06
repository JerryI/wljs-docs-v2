# LineIntegralConvolutionScale

`LineIntegralConvolutionScale` is an option to `LineIntegralConvolutionPlot` and related functions that determines the scale of the line integral convolution to be used.

## Examples

Default line integral convolution plot:

```wolfram
LineIntegralConvolutionPlot[{-1 - x^2 + y, 1 + x - y^2}, {x, -3, 3}, {y, -3, 3}]
```

With a smaller scale for finer detail:

```wolfram
LineIntegralConvolutionPlot[{-1 - x^2 + y, 1 + x - y^2}, {x, -3, 3}, {y, -3, 3},
  LineIntegralConvolutionScale -> 0.5]
```

Larger scale for smoother appearance:

```wolfram
LineIntegralConvolutionPlot[{-1 - x^2 + y, 1 + x - y^2}, {x, -3, 3}, {y, -3, 3},
  LineIntegralConvolutionScale -> 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LineIntegralConvolutionScale.html) for more details.*