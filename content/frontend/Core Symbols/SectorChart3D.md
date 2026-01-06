# SectorChart3D

`SectorChart3D[{{x1, y1, z1}, {x2, y2, z2}, ...}]` makes a 3D sector chart with sector angle proportional to xi, radius yi, and height zi.

`SectorChart3D[{data1, data2, ...}]` makes a 3D sector chart from multiple datasets.

## Examples

Create a 3D sector chart:

```wolfram
SectorChart3D[{{1, 1, 1}, {2, 2, 2}, {3, 1, 3}}]
```

With styling:

```wolfram
SectorChart3D[{{1, 1, 2}, {2, 2, 3}}, ChartStyle -> "Rainbow"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SectorChart3D.html) for more details.*