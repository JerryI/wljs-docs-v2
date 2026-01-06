---
title: GeoRegionValuePlot
---

`GeoRegionValuePlot[{reg1 -> val1, reg2 -> val2, …}]` generates a plot in which the geographic regions `regi` are colored according to the values `vali`.

- `GeoRegionValuePlot[regions -> values]` uses a collection of regions `regi` from `regions` with corresponding values `vali` from `values`.
- `GeoRegionValuePlot[region -> prop]` generates a plot in which the geographic subdivisions in `region` are colored according to the values `EntityValue[…, prop]`.
- `GeoRegionValuePlot[data]` generates a plot using the data available in `data`.

## Examples

```wolfram
GeoRegionValuePlot[EntityClass["Country", "Europe"] -> "Population"]
```

```wolfram
GeoRegionValuePlot[{Entity["Country", "France"] -> 67, Entity["Country", "Germany"] -> 83}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoRegionValuePlot.html) for more details.*