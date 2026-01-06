---
title: GeoStreamPlot
---

`GeoStreamPlot[vecs]` generates a stream plot from the field of geo vectors `vecs`.

- `GeoStreamPlot[{vecs1, vecs2, …}]` generates a separate set of streams for each `vecsi`.

## Examples

```wolfram
GeoStreamPlot[GeoVector[Table[GeoPosition[{lat, lon}] -> {1, 45 Degree}, {lat, -60, 60, 30}, {lon, -150, 150, 30}]]]
```

```wolfram
GeoStreamPlot[windData]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoStreamPlot.html) for more details.*