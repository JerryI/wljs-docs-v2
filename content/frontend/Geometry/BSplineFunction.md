---
title: BSplineFunction
---

`BSplineFunction[{pt1, pt2, ...}]` represents a B-spline function for a curve defined by the control points pti.

`BSplineFunction[array]` represents a B-spline function for a surface or high-dimensional manifold.

## Examples

Create and evaluate a B-spline function:

```wolfram
bf = BSplineFunction[{{0, 0}, {1, 2}, {2, 0}}];
bf[0.5]
```

Plot the curve:

```wolfram
ParametricPlot[bf[t], {t, 0, 1}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BSplineFunction.html) for more details.