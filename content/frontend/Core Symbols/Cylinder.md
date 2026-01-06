# Cylinder

`Cylinder[{{x1, y1, z1}, {x2, y2, z2}}, r]` represents a cylinder of radius r around the line from (x1, y1, z1) to (x2, y2, z2).

`Cylinder[{{x1, y1, z1}, {x2, y2, z2}}]` represents a cylinder of radius 1.

## Examples

3D cylinder:

```wolfram
Graphics3D[Cylinder[{{0, 0, 0}, {0, 0, 2}}, 0.5]]
```

Unit cylinder:

```wolfram
Graphics3D[{Blue, Cylinder[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Cylinder.html) for more details.*