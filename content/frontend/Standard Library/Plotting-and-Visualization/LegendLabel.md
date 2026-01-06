# LegendLabel

`LegendLabel` is an option for legends that specifies an overall label for a legend.

## Examples

Add a label to a legend:

```wolfram
LineLegend[{Red, Blue}, {"A", "B"}, LegendLabel -> "Series"]
```

Use with a plot:

```wolfram
Plot[{Sin[x], Cos[x]}, {x, 0, 2 Pi}, 
  PlotLegends -> Placed[LineLegend[{"Sin", "Cos"}, LegendLabel -> "Functions"], Right]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LegendLabel.html) for more details.*