# BSplineCurve

`BSplineCurve[{pt1, pt2, ...}]` is a graphics primitive that represents a nonuniform rational B-spline curve with control points pti.

## Examples

Create a B-spline curve:

```wolfram
Graphics[BSplineCurve[{{0, 0}, {1, 2}, {2, 0}, {3, 1}}]]
```

Show control points:

```wolfram
Graphics[{
  BSplineCurve[{{0, 0}, {1, 2}, {2, 0}, {3, 1}}],
  Red, Point[{{0, 0}, {1, 2}, {2, 0}, {3, 1}}]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BSplineCurve.html) for more details.*