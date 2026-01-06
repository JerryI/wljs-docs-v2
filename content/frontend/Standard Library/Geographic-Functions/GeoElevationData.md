---
title: GeoElevationData
---

`GeoElevationData[]` gives the elevation above sea level at `$GeoLocation`.

- `GeoElevationData[loc]` gives the elevation at the geographic location `loc`.
- `GeoElevationData[{loc1, loc2}]` gives an array of elevation values within the bounding box given by `{loc1, loc2}`.
- `GeoElevationData[GeoPosition[{{lat1, lon1}, {lat2, lon2}, …}]]` gives the list of elevations at the positions `{lati, loni}`.
- `GeoElevationData[loc, etype]` gives the elevation of type `etype` for the location `loc`.
- `GeoElevationData[loc, etype, format]` gives the elevation in the specified format.

## Examples

```wolfram
GeoElevationData[Entity["Mountain", {"MountEverest", "Himalaya", "Nepal"}]]
```

```wolfram
GeoElevationData[Entity["City", {"Denver", "Colorado", "UnitedStates"}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoElevationData.html) for more details.*