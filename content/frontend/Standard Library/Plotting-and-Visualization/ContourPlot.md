---
title: ContourPlot
---

`ContourPlot[f, {x, xmin, xmax}, {y, ymin, ymax}]` generates a contour plot of f as a function of x and y.

## Examples

Contour plot of a function:

```wolfram
ContourPlot[Sin[x] Sin[y], {x, -Pi, Pi}, {y, -Pi, Pi}]
```

Plot a specific contour:

```wolfram
ContourPlot[x^2 + y^2 == 1, {x, -2, 2}, {y, -2, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContourPlot.html) for more details.*