---
title: PolygonAngle
---

`PolygonAngle[poly]` gives a list of angles at the vertex points of poly.

- `PolygonAngle[poly, p]` gives the angle at the vertex point p of a polygon poly.
- `PolygonAngle[poly, i]` gives the angle at the point pi of poly in canonical form `Polygon[{p1, ..., pn}, data]`.
- `PolygonAngle[..., "spec"]` gives the angle specified by "spec".

## Examples

```wolfram
PolygonAngle[Polygon[{{0, 0}, {1, 0}, {1, 1}, {0, 1}}]]
```

```wolfram
PolygonAngle[RegularPolygon[6], 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolygonAngle.html) for more details.*