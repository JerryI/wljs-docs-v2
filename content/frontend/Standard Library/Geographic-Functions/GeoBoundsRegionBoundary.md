---
title: GeoBoundsRegionBoundary
---

`GeoBoundsRegionBoundary[{{latmin, latmax}, {lonmin, lonmax}}]` is a one-dimensional `GeoGraphics` primitive that represents the boundary of the region between parallels `latmin`, `latmax` and meridians `lonmin`, `lonmax` on the surface of the Earth.

- `GeoBoundsRegionBoundary[g]` represents the boundary of the latitude-longitude bounding box of the geo region `g`.
- `GeoBoundsRegionBoundary[g, δ]` pads the ranges of latitudes and longitudes by ±δ.

## Examples

```wolfram
GeoGraphics[GeoBoundsRegionBoundary[{{40, 50}, {-5, 10}}]]
```

```wolfram
GeoBoundsRegionBoundary[Entity["Country", "Spain"], Quantity[1, "Degrees"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoBoundsRegionBoundary.html) for more details.*