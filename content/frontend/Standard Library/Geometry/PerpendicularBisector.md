# PerpendicularBisector

`PerpendicularBisector[{p1, p2}]` gives the perpendicular bisector of the line segment connecting p1 and p2.

- `PerpendicularBisector[Line[{p1, p2}]]` gives the perpendicular bisector of a line segment.

## Examples

Find the perpendicular bisector of two points:
```wolfram
PerpendicularBisector[{{0, 0}, {4, 0}}]
```

Visualize the perpendicular bisector:
```wolfram
Graphics[{Line[{{0, 0}, {4, 2}}], Red, PerpendicularBisector[{{0, 0}, {4, 2}}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PerpendicularBisector.html) for more details.*