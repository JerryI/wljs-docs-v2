---
title: GeoDistanceList
---

`GeoDistanceList[{loc1, loc2, …, locn}]` returns the list of geodesic distances between consecutive pairs of locations.

## Examples

```wolfram
GeoDistanceList[{
  Entity["City", {"NewYork", "NewYork", "UnitedStates"}],
  Entity["City", {"Chicago", "Illinois", "UnitedStates"}],
  Entity["City", {"LosAngeles", "California", "UnitedStates"}]
}]
```

```wolfram
GeoDistanceList[{GeoPosition[{40.7, -74.0}], GeoPosition[{34.0, -118.2}]}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoDistanceList.html) for more details.