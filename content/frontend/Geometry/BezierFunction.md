---
title: BezierFunction
---

`BezierFunction[{pt1, pt2, ...}]` represents a Bézier function for a curve defined by the control points pti.

`BezierFunction[array]` represents a Bézier function for a surface or high-dimensional manifold.

## Examples

Create and evaluate a Bézier function:

```wolfram
bf = BezierFunction[{{0, 0}, {1, 2}, {2, 0}}];
bf[0.5]
(* {1., 1.} *)
```

Plot a Bézier curve:

```wolfram
ParametricPlot[bf[t], {t, 0, 1}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BezierFunction.html) for more details.