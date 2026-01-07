---
title: GeoPositionENU
---

`GeoPositionENU[{east, north, up}, p]` represents a position with local Cartesian coordinates `{east, north, up}` in a reference system centered at the position `p`.

- `GeoPositionENU[{{e1, n1, u1}, {e2, n2, u2}, …}, p]` represents an array of positions.
- `GeoPositionENU[entity, p]` returns the Cartesian position with respect to `p` of the specified geographical entity.

## Examples

```wolfram
GeoPositionENU[{1000, 2000, 0}, GeoPosition[{40.7, -74.0}]]
```

```wolfram
GeoPosition[GeoPositionENU[{5000, 0, 0}, Here]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoPositionENU.html) for more details.*