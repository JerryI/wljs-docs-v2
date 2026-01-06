# PairedHistogram

`PairedHistogram[{x1, x2, ...}, {y1, y2, ...}]` plots a paired histogram comparing two datasets.

## Examples

Compare two distributions:

```wolfram
PairedHistogram[
  RandomVariate[NormalDistribution[0, 1], 500],
  RandomVariate[NormalDistribution[1, 1], 500]
]
```

With bin specification:

```wolfram
PairedHistogram[data1, data2, 20]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PairedHistogram.html) for more details.*