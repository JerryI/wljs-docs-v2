---
title: GeoPath
---

`GeoPath[{loc1, loc2}, pathtype]` is a `GeoGraphics` primitive that represents a path of type `pathtype` between locations `loc1` and `loc2`.

- `GeoPath[{loc1, loc2, …}, pathtype]` represents a path formed by joining paths of type `pathtype` between consecutive locations `loci`.
- `GeoPath[{loc1, d, α}, pathtype]` represents a path moving from location `loc1` a distance `d` with initial bearing `α`.
- `GeoPath[{{loc11, loc12, …}, {loc21, …}, …}, pathtype]` represents a disjoint collection of paths of type `pathtype`.

## Examples

```wolfram
GeoGraphics[GeoPath[{Entity["City", {"NewYork", "NewYork", "UnitedStates"}], 
  Entity["City", {"London", "GreaterLondon", "UnitedKingdom"}]}, "Geodesic"]]
```

```wolfram
GeoGraphics[GeoPath[{Here, Quantity[1000, "Kilometers"], 45 Degree}, "Rhumb"]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoPath.html) for more details.