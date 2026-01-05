# PointSize

`PointSize[d]` is a graphics directive specifying that points are to be shown with diameter `d` (as a fraction of plot width).

## Examples

Draw points with different sizes:

```wolfram
Graphics[{
  PointSize[Small], Point[{0, 0}],
  PointSize[Medium], Point[{0.3, 0}],
  PointSize[Large], Point[{0.6, 0}],
  PointSize[0.1], Point[{1, 0}]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PointSize.html) for more details.*