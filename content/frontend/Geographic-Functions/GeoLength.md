---
title: GeoLength
---

`GeoLength[g]` gives the length of the geo path `g`.

## Examples

```wolfram
GeoLength[GeoPath[{Entity["City", {"NewYork", "NewYork", "UnitedStates"}], 
  Entity["City", {"London", "GreaterLondon", "UnitedKingdom"}]}]]
```

```wolfram
GeoLength[GeoBoundary[Entity["Country", "France"]]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoLength.html) for more details.