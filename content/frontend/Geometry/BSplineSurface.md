---
title: BSplineSurface
---

`BSplineSurface[array]` is a graphics primitive that represents a nonuniform rational B-spline surface defined by an array of x,y,z control points.

## Examples

Create a B-spline surface:

```wolfram
pts = Table[{i, j, Sin[i + j]}, {i, 0, 3}, {j, 0, 3}];
Graphics3D[BSplineSurface[pts]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BSplineSurface.html) for more details.