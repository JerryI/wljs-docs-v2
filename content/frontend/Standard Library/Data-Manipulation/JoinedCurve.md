# JoinedCurve

`JoinedCurve[{segment1, segment2, ...}]` represents a curve consisting of connected segments.

## Examples

Connected line segments:

```wolfram
Graphics[JoinedCurve[{Line[{{0, 0}, {1, 1}}], Line[{{1, 1}, {2, 0}}]}]]
```

With Bezier curves:

```wolfram
Graphics[JoinedCurve[{BezierCurve[{{0, 0}, {0.5, 1}, {1, 0}}], Line[{{1, 0}, {2, 1}}]}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/JoinedCurve.html) for more details.*