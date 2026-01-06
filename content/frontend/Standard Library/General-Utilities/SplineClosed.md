---
title: SplineClosed
---

`SplineClosed` is an option for B-spline functions and graphics primitives that specifies whether spline curves or surfaces should be closed.

## Examples

Closed B-spline curve:

```wolfram
Graphics[BSplineCurve[{{0, 0}, {1, 1}, {2, 0}, {1, -1}}, SplineClosed -> True]]
```

Open spline (default):

```wolfram
Graphics[BSplineCurve[{{0, 0}, {1, 1}, {2, 0}}, SplineClosed -> False]]
```

Closed surface:

```wolfram
Graphics3D[BSplineSurface[Table[{i, j, Sin[i + j]}, {i, 4}, {j, 4}], SplineClosed -> {True, False}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SplineClosed.html) for more details.*