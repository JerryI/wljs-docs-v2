# PolygonCoordinates

`PolygonCoordinates[poly]` gives a list of coordinates in the polygon poly.

## Examples

Extract coordinates:

```wolfram
PolygonCoordinates[Polygon[{{0, 0}, {1, 0}, {1, 1}, {0, 1}}]]
(* {{0, 0}, {1, 0}, {1, 1}, {0, 1}} *)
```

From regular polygon:

```wolfram
PolygonCoordinates[RegularPolygon[5]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolygonCoordinates.html) for more details.*