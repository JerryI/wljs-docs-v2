---
title: GeoDensityPlot
---

`GeoDensityPlot[{loc1 -> val1, loc2 -> val2, …}]` makes a geo density plot with colors at the locations `loci` determined by the values `vali`.

- `GeoDensityPlot[locs -> vals]` uses a collection of locations `locs` with corresponding values `vals`.

## Examples

```wolfram
GeoDensityPlot[{GeoPosition[{40.7, -74.0}] -> 100, GeoPosition[{34.0, -118.2}] -> 80}]
```

```wolfram
GeoDensityPlot[EntityClass["City", "UnitedStates"] -> "Population"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoDensityPlot.html) for more details.*