---
title: GeoPolygon
---

`GeoPolygon[{loc1, …, locn}]` is a `GeoGraphics` primitive that represents a filled polygon whose boundary is formed by geodesic segments between locations `loci` and `loci+1`.

- `GeoPolygon[{loc1, …, locn} -> {{q1, …, qm}, …}]` represents a geo polygon with holes `{q1, …, qm}`, ….
- `GeoPolygon[{poly1, poly2, …}]` represents a collection of polygons `polyi`.
- `GeoPolygon[{poly1, poly2, …}, sideness]` specifies which of the two sides of each boundary `polyi` is in the interior of the geo polygon.
- `GeoPolygon[polys, sideness, pathtype]` represents a geo polygon whose boundary is formed by geo paths of type `pathtype`.

## Examples

```wolfram
GeoGraphics[GeoPolygon[{GeoPosition[{40, -74}], GeoPosition[{45, -73}], GeoPosition[{42, -70}]}]]
```

```wolfram
GeoGraphics[{EdgeForm[Red], FaceForm[Opacity[0.3, Blue]], GeoPolygon[Entity["Country", "France"]]}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoPolygon.html) for more details.