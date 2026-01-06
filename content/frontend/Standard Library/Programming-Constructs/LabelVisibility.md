# LabelVisibility

`LabelVisibility` is an option for `Callout` and `Labeled` in plotting functions that determines which labels are shown.

This option controls label visibility based on various criteria.

## Examples

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, 
  PlotLabels -> Placed["Sin", Above], 
  LabelVisibility -> All]
```

```wolfram
ListPlot[Range[10], PlotLabels -> Automatic, LabelVisibility -> "Remove Overlaps"]
```

```wolfram
BarChart[{1, 2, 3}, ChartLabels -> {"a", "b", "c"}, LabelVisibility -> All]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LabelVisibility.html) for more details.*