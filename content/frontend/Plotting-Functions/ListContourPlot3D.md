---
title: ListContourPlot3D
---

`ListContourPlot3D[array]` generates a 3D contour plot from a 3D array of values.

`ListContourPlot3D[{{x1, y1, z1, f1}, {x2, y2, z2, f2}, ...}]` generates a contour plot from values at specified points.

## Examples

Create a 3D contour plot from data:

```wolfram
data = Table[x^2 + y^2 - z^2, {x, -1, 1, 0.1}, {y, -1, 1, 0.1}, {z, -1, 1, 0.1}];
ListContourPlot3D[data]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListContourPlot3D.html) for more details.