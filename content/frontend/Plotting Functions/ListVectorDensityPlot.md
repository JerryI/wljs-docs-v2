---
title: ListVectorDensityPlot
---

`ListVectorDensityPlot[varr]` generates a vector density plot from an array varr of vector and scalar field values {{vx_ij, vy_ij}, r_ij}.

`ListVectorDensityPlot[{{{x1, y1}, {{vx1, vy1}, r1}}, ...}]` generates a vector density plot from values at specified points.

## Examples

Vector density plot:

```wolfram
data = Table[{{-y, x}, x^2 + y^2}, {x, -3, 3}, {y, -3, 3}];
ListVectorDensityPlot[data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListVectorDensityPlot.html) for more details.*