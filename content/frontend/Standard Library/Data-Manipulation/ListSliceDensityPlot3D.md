---
title: ListSliceDensityPlot3D
---

`ListSliceDensityPlot3D[farr, surf]` generates a density plot of the 3D array of values sliced to the surface surf.

`ListSliceDensityPlot3D[{{x1, y1, z1, f1}, ...}, surf]` generates a slice density plot for the values f_i at points {x_i, y_i, z_i}.

## Examples

Slice density on plane:

```wolfram
data = Table[Sin[x + y + z], {x, -2, 2, 0.2}, {y, -2, 2, 0.2}, {z, -2, 2, 0.2}];
ListSliceDensityPlot3D[data, "CenterPlanes"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListSliceDensityPlot3D.html) for more details.*