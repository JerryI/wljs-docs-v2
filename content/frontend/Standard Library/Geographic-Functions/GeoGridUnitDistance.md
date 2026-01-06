---
title: GeoGridUnitDistance
---

`GeoGridUnitDistance[proj, loc, α]` gives the actual geo distance corresponding to a unit distance on the geo grid obtained with projection `proj`, evaluated in the limit of small displacement from location `loc` in direction `α`.

## Examples

```wolfram
GeoGridUnitDistance["Mercator", GeoPosition[{45, 0}], 0 Degree]
```

```wolfram
GeoGridUnitDistance["Mercator", GeoPosition[{45, 0}], 90 Degree]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoGridUnitDistance.html) for more details.*