---
title: GeoPosition
---

`GeoPosition[{lat, lon}]` represents a geodetic position with latitude `lat` and longitude `lon`.

- `GeoPosition[{lat, lon, h}]` represents a geodetic position with height `h` relative to the reference ellipsoid.
- `GeoPosition[{lat, lon, h}, datum]` represents a geodetic position referring to the specified datum.
- `GeoPosition[{{lat1, lon1}, {lat2, lon2}, …}, datum]` represents an array of geodetic positions.
- `GeoPosition[entity]` returns the geodetic position of the specified geographical entity.

## Examples

```wolfram
GeoPosition[{40.7128, -74.0060}]
```

```wolfram
GeoPosition[Entity["City", {"Paris", "IleDeFrance", "France"}]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoPosition.html) for more details.