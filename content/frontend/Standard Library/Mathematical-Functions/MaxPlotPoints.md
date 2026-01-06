---
title: MaxPlotPoints
---

`MaxPlotPoints` is an option for plotting functions like `ArrayPlot` and `ListPlot3D` that specifies the maximum number of points that will explicitly be included in the output.

## Examples

```wolfram
ListPlot3D[RandomReal[1, {100, 100}], MaxPlotPoints -> 50]
```

```wolfram
ArrayPlot[RandomReal[1, {200, 200}], MaxPlotPoints -> 100]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxPlotPoints.html) for more details.*