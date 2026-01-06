---
title: GeoVector
---

`GeoVector[loc -> {m, α}]` represents a horizontal two-dimensional vector of magnitude `m` and bearing `α` at geo location `loc`.

- `GeoVector[loc -> {m, α, w}]` represents a three-dimensional vector of horizontal modulus `m`, bearing `α` and vertical component `w` at geo location `loc`.
- `GeoVector[{loc1, loc2, …} -> {vec1, vec2, …}]` represents a collection of vectors `veci` at respective geo locations `loci`.
- `GeoVector[{loc1 -> vec1, loc2 -> vec2, …}]` represents the same collection of vectors.
- `GeoVector[vec]` represents a geo vector whose associated location has been implicitly specified.

## Examples

```wolfram
GeoVector[GeoPosition[{40.7, -74.0}] -> {100, 45 Degree}]
```

```wolfram
GeoVectorPlot[GeoVector[Here -> {1, 0 Degree}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoVector.html) for more details.*