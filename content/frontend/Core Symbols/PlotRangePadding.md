# PlotRangePadding

`PlotRangePadding` is an option for graphics functions that specifies how much further axes etc. should extend beyond the range of coordinates specified by `PlotRange`.

## Examples

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, PlotRangePadding -> 0]
```

```wolfram
ListPlot[{1, 4, 2, 3}, PlotRangePadding -> Scaled[0.1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlotRangePadding.html) for more details.*