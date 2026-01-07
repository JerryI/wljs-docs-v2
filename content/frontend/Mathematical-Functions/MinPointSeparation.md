---
title: MinPointSeparation
---

`MinPointSeparation` is an option for `GeoGraphValuePlot` that determines when to merge nearby vertices into a single vertex.

## Examples

Set minimum point separation:

```wolfram
GeoGraphValuePlot[data, MinPointSeparation -> Quantity[10, "Kilometers"]]
```

Larger separation:

```wolfram
GeoGraphValuePlot[data, MinPointSeparation -> Quantity[50, "Miles"]]
```

Disable merging:

```wolfram
GeoGraphValuePlot[data, MinPointSeparation -> 0]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MinPointSeparation.html) for more details.*