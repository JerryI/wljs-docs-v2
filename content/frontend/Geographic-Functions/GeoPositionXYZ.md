---
title: GeoPositionXYZ
---

`GeoPositionXYZ[{x, y, z}]` represents a position in a Cartesian geocentric coordinate system.

- `GeoPositionXYZ[{x, y, z}, datum]` represents a point referred to the specified datum.
- `GeoPositionXYZ[{{x1, y1, z1}, {x2, y2, z2}, …}, datum]` represents an array of points in a Cartesian geocentric coordinate system.
- `GeoPositionXYZ[entity]` returns the Cartesian geocentric position of the given geographical entity.

## Examples

```wolfram
GeoPositionXYZ[GeoPosition[{0, 0}]]
```

```wolfram
GeoPosition[GeoPositionXYZ[{6378137, 0, 0}]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoPositionXYZ.html) for more details.