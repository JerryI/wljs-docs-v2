---
title: ListLinePlot3D
---

`ListLinePlot3D[{{x1, y1, z1}, {x2, y2, z2}, ..., {xn, yn, zn}}]` plots a curve through the 3D points {x_i, y_i, z_i}.

`ListLinePlot3D[{data1, data2, ...}]` plots curves through multiple sets of {x, y, z} points.

## Examples

Plot a 3D curve:

```wolfram
data = Table[{Cos[t], Sin[t], t}, {t, 0, 4 Pi, 0.1}];
ListLinePlot3D[data]
```

Multiple curves:

```wolfram
ListLinePlot3D[{data, RotationTransform[Pi/4, {0, 0, 1}] /@ data}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListLinePlot3D.html) for more details.