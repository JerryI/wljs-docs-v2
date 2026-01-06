---
title: VectorAspectRatio
---

`VectorAspectRatio` is an option setting for `VectorPlot` and related functions that determines the relative width and length of the arrow markers in the plot.

This option controls the shape of vector arrows in field visualizations.

## Examples

```wolfram
VectorPlot[{y, -x}, {x, -2, 2}, {y, -2, 2}, VectorAspectRatio -> 0.3]
```

```wolfram
VectorPlot[{1, 1}, {x, -2, 2}, {y, -2, 2}, VectorAspectRatio -> 0.5]
```

```wolfram
VectorPlot[{Sin[x], Cos[y]}, {x, 0, 2 Pi}, {y, 0, 2 Pi}, VectorAspectRatio -> 0.2]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VectorAspectRatio.html) for more details.*