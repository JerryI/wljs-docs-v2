---
title: GeoLabels
---

`GeoLabels` is an option for `GeoListPlot` and `GeoRegionValuePlot` that specifies whether and how to add labels to the locations in the first argument.

## Examples

```wolfram
GeoListPlot[{Entity["City", {"NewYork", "NewYork", "UnitedStates"}]}, GeoLabels -> True]
```

```wolfram
GeoListPlot[EntityClass["City", "LargestCities"], GeoLabels -> Automatic]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoLabels.html) for more details.*