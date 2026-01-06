---
title: ListPlot3D
---

`ListPlot3D[data]` generates a 3D surface from a 2D array of height values or from `{x, y, z}` data points.

## Examples

Surface from array:

```wolfram
data = Table[Sin[x] Cos[y], {x, 0, Pi, 0.2}, {y, 0, Pi, 0.2}];
ListPlot3D[data]
```

From scattered points:

```wolfram
points = Table[{x, y, Sin[x] Cos[y]}, {x, 0, Pi, 0.5}, {y, 0, Pi, 0.5}];
ListPlot3D[Flatten[points, 1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListPlot3D.html) for more details.*