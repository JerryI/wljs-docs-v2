---
title: GeoBoundsRegion
---

`GeoBoundsRegion[{{latmin, latmax}, {lonmin, lonmax}}]` is a two-dimensional `GeoGraphics` primitive that represents a geo region bounded by parallels `latmin`, `latmax` and meridians `lonmin`, `lonmax` on the surface of the Earth.

- `GeoBoundsRegion[g]` represents the latitude-longitude bounding box of the geo region `g`.
- `GeoBoundsRegion[g, δ]` pads the ranges of latitudes and longitudes by ±δ.

## Examples

```wolfram
GeoGraphics[GeoBoundsRegion[{{40, 50}, {-5, 10}}]]
```

```wolfram
GeoBoundsRegion[Entity["Country", "France"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoBoundsRegion.html) for more details.*