---
title: GeoContourPlot
---

`GeoContourPlot[{loc1 -> val1, loc2 -> val2, …}]` makes a geo contour plot from values `vali` defined at specified locations `loci`.

- `GeoContourPlot[locs -> vals]` uses a collection of locations `locs` with corresponding values `vals`.

## Examples

```wolfram
GeoContourPlot[{GeoPosition[{40.7, -74.0}] -> 100, GeoPosition[{34.0, -118.2}] -> 80}]
```

```wolfram
GeoContourPlot[EntityClass["City", "UnitedStates"] -> "Population"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoContourPlot.html) for more details.*