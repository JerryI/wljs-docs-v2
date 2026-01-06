# PlotPoints

`PlotPoints` is an option for plotting functions that specifies how many initial sample points to use.

## Examples

Increase sampling:

```wolfram
Plot[Sin[1/x], {x, 0.01, 1}, PlotPoints -> 100]
```

For 3D plots:

```wolfram
Plot3D[Sin[x y], {x, 0, 3}, {y, 0, 3}, PlotPoints -> 50]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlotPoints.html) for more details.*