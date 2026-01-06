---
title: PairedSmoothHistogram
---

`PairedSmoothHistogram[{x1, x2, ...}, {y1, y2, ...}]` plots a paired smooth histogram of the values xi and yi.

- `PairedSmoothHistogram[{x1, x2, ...}, {y1, y2, ...}, espec]` plots a paired smooth histogram with estimator specification espec.
- `PairedSmoothHistogram[{x1, x2, ...}, {y1, y2, ...}, espec, dfun]` plots a paired smooth histogram with distribution function dfun.
- `PairedSmoothHistogram[{data11, ...}, {data21, ...}, ...]` plots paired smooth histograms for multiple datasets.

## Examples

```wolfram
PairedSmoothHistogram[RandomVariate[NormalDistribution[], 100], RandomVariate[NormalDistribution[1, 2], 100]]
```

```wolfram
PairedSmoothHistogram[{1, 2, 2, 3, 4}, {2, 3, 3, 4, 5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PairedSmoothHistogram.html) for more details.*