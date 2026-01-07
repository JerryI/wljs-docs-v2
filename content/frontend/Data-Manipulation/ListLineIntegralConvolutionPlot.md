---
title: ListLineIntegralConvolutionPlot
---

`ListLineIntegralConvolutionPlot[{array, image}]` generates a line integral convolution plot of image convolved with the vector field defined by an array of vector field values.

- `ListLineIntegralConvolutionPlot[array]` generates a line integral convolution plot of white noise convolved with the vector field defined by array.
- `ListLineIntegralConvolutionPlot[{{{{x1, y1}, {vx1, vy1}}, ...}, image}]` generates a plot of image convolved with the vector field defined by vectors at specified points.
- `ListLineIntegralConvolutionPlot[{{{x1, y1}, {vx1, vy1}}, ...}]` generates a plot of white noise convolved with the vector field.

## Examples

Create a LIC plot from vector data:

```wolfram
data = Table[{Cos[y], Sin[x]}, {x, -3, 3, 0.1}, {y, -3, 3, 0.1}];
ListLineIntegralConvolutionPlot[data]
```

With coordinate specifications:

```wolfram
vecs = Table[{{x, y}, {-y, x}}, {x, -2, 2, 0.5}, {y, -2, 2, 0.5}];
ListLineIntegralConvolutionPlot[Flatten[vecs, 1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListLineIntegralConvolutionPlot.html) for more details.*