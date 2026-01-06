# PlotHighlighting

`PlotHighlighting` is an option to `Plot`, `ListPlot` and related visualization functions that specifies how points and curves should be highlighted.

## Examples

Enable highlighting:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, PlotHighlighting -> Automatic]
```

Custom highlighting style:

```wolfram
ListPlot[RandomReal[1, 20], PlotHighlighting -> "Ball"]
```

Disable highlighting:

```wolfram
Plot[Cos[x], {x, 0, 2 Pi}, PlotHighlighting -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlotHighlighting.html) for more details.*