---
title: GeoIdentify
---

`GeoIdentify[enttype]` identifies the geographic entities of the type enttype in which the current geo location is contained.

`GeoIdentify[enttype, loc]` identifies the entities in which the location loc is contained.

`GeoIdentify[]` identifies the entities of any type in which the current geo location is contained.

## Examples

Identify the country at the current location:

```wolfram
GeoIdentify["Country"]
(* Entity["Country", "UnitedStates"] *)
```

Identify geographic entities at a specific location:

```wolfram
GeoIdentify["City", GeoPosition[{40.7128, -74.0060}]]
(* Entity["City", {"NewYork", "NewYork", "UnitedStates"}] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoIdentify.html) for more details.