---
title: GeoMarker
---

`GeoMarker[]` is a `GeoGraphics` primitive that represents a marker at the current `$GeoLocation`.

- `GeoMarker[loc]` is a `GeoGraphics` primitive that represents a marker at the location `loc`.
- `GeoMarker[{loc1, loc2, …}]` is a `GeoGraphics` primitive that represents markers at locations `loci`.
- `GeoMarker[loc, marker]` is a `GeoGraphics` primitive that represents a custom marker at the location `loc`.
- `GeoMarker[{loc1, loc2, …}, marker]` is a `GeoGraphics` primitive that represents custom markers at locations `loci`.

## Examples

```wolfram
GeoGraphics[GeoMarker[Entity["City", {"Paris", "IleDeFrance", "France"}]]]
```

```wolfram
GeoGraphics[GeoMarker[Here, "SatelliteDish"]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoMarker.html) for more details.