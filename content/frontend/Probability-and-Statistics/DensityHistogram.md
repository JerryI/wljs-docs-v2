---
title: DensityHistogram
---

`DensityHistogram[{{x1, y1}, {x2, y2}, ...}]` plots a density histogram of the values {xi, yi}.

`DensityHistogram[data, bspec]` plots a density histogram with bins specified by bspec.

`DensityHistogram[data, bspec, hspec]` computes bin densities according to hspec.

## Examples

Create a 2D density histogram:

```wolfram
data = RandomReal[{0, 1}, {1000, 2}];
DensityHistogram[data]
```

With specified bin count:

```wolfram
DensityHistogram[data, 20, ColorFunction -> "Rainbow"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DensityHistogram.html) for more details.