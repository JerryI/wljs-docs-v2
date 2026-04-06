---
title: GeoDistance
---

`GeoDistance[{lat1, lon1}, {lat2, lon2}]` gives the geodesic distance between latitude-longitude positions on the Earth.

- `GeoDistance[loc1, loc2]` gives the distance between locations specified by position objects or geographical entities.
- `GeoDistance[{loc1, …, locn}]` gives the total distance from `loc1` to `locn` through all the intermediate `loci`.

## Examples

```wolfram
GeoDistance[{40.7, -74.0}, {51.5, -0.1}]
```

```wolfram
GeoDistance[Entity["City", {"NewYork", "NewYork", "UnitedStates"}], 
  Entity["City", {"London", "GreaterLondon", "UnitedKingdom"}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoDistance.html) for more details.