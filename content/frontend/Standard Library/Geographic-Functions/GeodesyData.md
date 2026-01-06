# GeodesyData

`GeodesyData["name", "property"]` gives the value of the specified property for a named geodetic datum or reference ellipsoid.

- `GeodesyData[{a, b}, "property"]` gives the value of the property for the ellipsoid with semimajor axis `a` and semiminor axis `b`.
- `GeodesyData[obj, {"property", coords}]` gives the value of the property at the specified coordinates.

## Examples

```wolfram
GeodesyData["WGS84", "SemimajorAxis"]
```

```wolfram
GeodesyData["WGS84", "Flattening"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeodesyData.html) for more details.*