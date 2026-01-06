# BinnedVariogramList

`BinnedVariogramList[{loc1 -> val1, loc2 -> val2, ...}]` computes a variogram using binned values.

`BinnedVariogramList[{loc1, loc2, ...} -> {val1, val2, ...}]` generates the same result.

`BinnedVariogramList[..., spec]` allows binning spec to be specified as given in HistogramList.

## Examples

Compute binned variogram:

```wolfram
data = {{0, 0} -> 1, {1, 0} -> 2, {0, 1} -> 1.5};
BinnedVariogramList[data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BinnedVariogramList.html) for more details.*