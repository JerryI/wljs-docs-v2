# Point

`Point[p]` is a graphics primitive representing a point at position `p`. `Point[{p1, p2, ...}]` represents multiple points.

## Examples

Draw points in a graphic:

```wolfram
Graphics[{
  PointSize[Large],
  Red, Point[{0, 0}],
  Blue, Point[{{1, 0}, {0, 1}, {1, 1}}]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Point.html) for more details.*