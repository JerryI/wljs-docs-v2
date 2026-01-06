# PlotRegion

`PlotRegion` is an option for graphics functions that specifies what region of the final display area a plot should fill.

## Examples

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, PlotRegion -> {{0.1, 0.9}, {0.1, 0.9}}]
```

```wolfram
ListPlot[Range[10], PlotRegion -> {{0, 1}, {0, 0.8}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlotRegion.html) for more details.*