---
title: CoordinateTransformData
---

`CoordinateTransformData[t, property]` gives the value of the specified property for the coordinate transformation t.

`CoordinateTransformData[t, property, {x1, x2, ..., xn}]` gives the value of the property evaluated at the point.

## Examples

Get the transformation mapping from Cartesian to polar:

```wolfram
CoordinateTransformData["Cartesian" -> "Polar", "Mapping", {x, y}]
(* {Sqrt[x^2 + y^2], ArcTan[x, y]} *)
```

Convert a specific point:

```wolfram
CoordinateTransformData["Cartesian" -> "Polar", "Mapping", {1, 1}]
(* {Sqrt[2], Pi/4} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CoordinateTransformData.html) for more details.