---
title: PlotMarkers
---

`PlotMarkers` is an option for graphics functions like `ListPlot` and `ListLinePlot` that specifies what markers to draw at the points plotted.

## Examples

Add markers to plot:

```wolfram
ListPlot[Table[Sin[x], {x, 0, 2 Pi, 0.5}], PlotMarkers -> Automatic]
```

Custom markers:

```wolfram
ListLinePlot[{Range[5], Range[5]^2}, PlotMarkers -> {"●", "■"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlotMarkers.html) for more details.*