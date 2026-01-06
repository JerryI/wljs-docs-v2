---
title: BezierCurve
---

`BezierCurve[{pt1, pt2, ...}]` is a graphics primitive that represents a Bézier curve with control points pti.

## Examples

```wolfram
Graphics[{BezierCurve[{{0, 0}, {1, 2}, {2, 0}}]}]
```

```wolfram
Graphics[{
  BezierCurve[{{0, 0}, {1, 1}, {2, 0}, {3, 1}}],
  Red, Point[{{0, 0}, {1, 1}, {2, 0}, {3, 1}}]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BezierCurve.html) for more details.*