---
title: ListStreamDensityPlot
---

`ListStreamDensityPlot[varr]` generates a stream density plot from an array varr of vector and scalar field values {{vx_ij, vy_ij}, r_ij}.

`ListStreamDensityPlot[{{{x1, y1}, {{vx1, vy1}, r1}}, ...}]` generates a stream density plot from vector and scalar field values at specified points.

## Examples

Stream density plot:

```wolfram
data = Table[{{-y, x}, x^2 + y^2}, {x, -3, 3}, {y, -3, 3}];
ListStreamDensityPlot[data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListStreamDensityPlot.html) for more details.*