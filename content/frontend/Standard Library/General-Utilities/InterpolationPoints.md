---
title: InterpolationPoints
---

`InterpolationPoints` is an option to `SmoothKernelDistribution` and `FunctionInterpolation` that specifies the initial number of interpolation points to use.

## Examples

Create a function interpolation with specified points:

```wolfram
FunctionInterpolation[Sin[x], {x, 0, Pi}, InterpolationPoints -> 50]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InterpolationPoints.html) for more details.*