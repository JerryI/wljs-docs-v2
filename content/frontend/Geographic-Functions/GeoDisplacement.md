---
title: GeoDisplacement
---

`GeoDisplacement[{dist, α}]` represents a geodesic displacement of length `dist` and initial bearing `α` from a geo location.

- `GeoDisplacement[{dist, α}, pathtype]` represents a displacement of length `dist` and initial bearing `α` along a path of type `pathtype`.
- `GeoDisplacement[loc1, loc2, pathtype]` returns the displacement needed to reach `loc2` from `loc1` along a path of type `pathtype`.

## Examples

```wolfram
GeoDisplacement[{Quantity[100, "Kilometers"], 45 Degree}]
```

```wolfram
GeoGraphics[{Here, GeoDisplacement[{Quantity[500, "Miles"], 0}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoDisplacement.html) for more details.*