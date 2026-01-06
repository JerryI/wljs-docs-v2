# Cone

`Cone[{{x1, y1, z1}, {x2, y2, z2}}, r]` represents a cone with base of radius r centered at the first point and tip at the second.

## Examples

3D cone:

```wolfram
Graphics3D[Cone[{{0, 0, 0}, {0, 0, 1}}, 0.5]]
```

Multiple cones:

```wolfram
Graphics3D[{Red, Cone[{{0, 0, 0}, {0, 0, 2}}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Cone.html) for more details.*