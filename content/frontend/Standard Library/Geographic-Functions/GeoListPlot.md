---
title: GeoListPlot
---

`GeoListPlot[{loc1, loc2, …}]` generates a map on which the locations `loci` are indicated.

- `GeoListPlot[{list1, list2, …}]` generates a map showing several lists of locations.

## Examples

```wolfram
GeoListPlot[EntityClass["City", "LargestCities"]]
```

```wolfram
GeoListPlot[{GeoPosition[{40.7, -74.0}], GeoPosition[{34.0, -118.2}], GeoPosition[{41.9, -87.6}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoListPlot.html) for more details.*