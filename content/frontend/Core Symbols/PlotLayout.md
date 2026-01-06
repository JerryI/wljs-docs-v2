# PlotLayout

`PlotLayout` is an option for plotting functions that specifies the layout of multiple components in a plot.

## Examples

```wolfram
ListLinePlot[Table[{Sin[x + i], Cos[x + i]}, {i, 3}], PlotLayout -> "Stacked"]
```

```wolfram
PieChart[{1, 2, 3, 4}, PlotLayout -> "Grouped"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlotLayout.html) for more details.*