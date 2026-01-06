# PlotLabels

`PlotLabels` is an option for visualization functions that specifies what labels to use for each data source.

## Examples

Label plot curves:
```wolfram
Plot[{Sin[x], Cos[x]}, {x, 0, 2 Pi}, PlotLabels -> {"Sine", "Cosine"}]
```

Use automatic labels:
```wolfram
ListLinePlot[{data1, data2}, PlotLabels -> Automatic]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlotLabels.html) for more details.*