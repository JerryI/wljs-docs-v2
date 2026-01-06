---
title: SplineKnots
---

`SplineKnots` is an option for B-spline functions and graphics primitives that specifies the positions of knots.

## Examples

Create a B-spline curve with custom knots:

```wolfram
Graphics[BSplineCurve[{{0, 0}, {1, 2}, {2, 0}, {3, 1}}, SplineKnots -> {0, 0, 0, 0.5, 1, 1, 1}]]
```

Use automatic knot placement:

```wolfram
BSplineFunction[{{0, 0}, {1, 1}, {2, 0}}, SplineKnots -> Automatic]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SplineKnots.html) for more details.*