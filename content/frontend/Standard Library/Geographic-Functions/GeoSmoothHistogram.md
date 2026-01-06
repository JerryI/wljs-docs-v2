---
title: GeoSmoothHistogram
---

`GeoSmoothHistogram[locs]` plots a smooth kernel histogram of the geo locations `locs`.

- `GeoSmoothHistogram[locs, espec]` plots a smooth kernel histogram with estimator specification `espec`.
- `GeoSmoothHistogram[locs, espec, dfun]` plots the distribution function `dfun`.

## Examples

```wolfram
GeoSmoothHistogram[RandomGeoPosition[100]]
```

```wolfram
GeoSmoothHistogram[EntityClass["City", "UnitedStates"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoSmoothHistogram.html) for more details.*