---
title: HistogramTransformInterpolation
---

`HistogramTransformInterpolation[{x1, x2, ...}]` finds a function f so that the transformed values f(xi) are distributed nearly uniformly.

- `HistogramTransformInterpolation[{x1, x2, ...}, ref]` finds f so that f(xi) are distributed with distribution ref.
- `HistogramTransformInterpolation[{x1, x2, ...}, ref, n]` finds a function with n equally spaced quantiles.
- `HistogramTransformInterpolation[image, ...]` finds a function that reshapes the histogram of image.

## Examples

Create uniform transformation:
```wolfram
f = HistogramTransformInterpolation[RandomVariate[NormalDistribution[], 1000]];
f[0]
```

Match a target distribution:
```wolfram
HistogramTransformInterpolation[data, ExponentialDistribution[1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HistogramTransformInterpolation.html) for more details.*