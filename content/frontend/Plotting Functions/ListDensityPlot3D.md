---
title: ListDensityPlot3D
---

`ListDensityPlot3D[farr]` generates a smooth density plot from a 3D array of values farr.

`ListDensityPlot3D[{{x1, y1, z1, f1}, ..., {xn, yn, zn, fn}}]` generates a density plot with values f_i at the specified points {x_i, y_i, z_i}.

## Examples

3D density from array:

```wolfram
data = Table[Sin[x + y + z], {x, -1, 1, 0.2}, {y, -1, 1, 0.2}, {z, -1, 1, 0.2}];
ListDensityPlot3D[data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListDensityPlot3D.html) for more details.*