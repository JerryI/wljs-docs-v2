---
title: GeoRangePadding
---

`GeoRangePadding` is an option for `GeoGraphics` that specifies what padding to use when extending beyond the original ranges of latitude and longitude.

## Examples

```wolfram
GeoGraphics[Entity["Country", "France"], GeoRangePadding -> Quantity[100, "Kilometers"]]
```

```wolfram
GeoGraphics[{}, GeoRange -> Entity["Country", "Germany"], GeoRangePadding -> Scaled[0.1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoRangePadding.html) for more details.*