---
title: GeoVectorENU
---

`GeoVectorENU[loc -> {ve, vn}]` represents a horizontal two-dimensional vector of components `ve` and `vn` in an orthonormal frame tangent to the Earth at geo location `loc`.

- `GeoVectorENU[loc -> {ve, vn, vu}]` represents a three-dimensional vector of horizontal components `ve` and `vn`, and vertical component `vu` at geo location `loc`.
- `GeoVectorENU[{loc1, loc2, …} -> {vec1, vec2, …}]` represents a collection of vectors `veci` at respective geo locations `loci`.
- `GeoVectorENU[{loc1 -> vec1, loc2 -> vec2, …}]` represents the same collection of vectors.
- `GeoVectorENU[vec]` represents a geo vector whose associated location has been implicitly specified.

## Examples

```wolfram
GeoVectorENU[GeoPosition[{40.7, -74.0}] -> {1, 0}]
```

```wolfram
GeoVectorPlot[GeoVectorENU[Here -> {1, 1}]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoVectorENU.html) for more details.