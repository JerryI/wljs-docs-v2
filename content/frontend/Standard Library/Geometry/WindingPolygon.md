---
title: WindingPolygon
---

`WindingPolygon[{p1, p2, ..., pn}]` gives a polygon representing all points for which the closed contour p1, p2, ..., pn, p1 winds around at least once.

- `WindingPolygon[{{p11, p12, ...}, {p21, p22, ...}, ...}]` gives a polygon from the closed contours p11, p12, ... and p21, p22, ....
- `WindingPolygon[..., "wrule"]` uses the specified winding rule "wrule" to define the polygon.

This function creates polygons from self-intersecting contours using winding number rules.

## Examples

```wolfram
WindingPolygon[{{0, 0}, {1, 0}, {1, 1}, {0, 1}}]
```

```wolfram
(* Star polygon with winding *)
WindingPolygon[CirclePoints[5, 2]]
```

```wolfram
Graphics[WindingPolygon[CirclePoints[{1, 0}, {1, 2}, 5]]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WindingPolygon.html) for more details.*