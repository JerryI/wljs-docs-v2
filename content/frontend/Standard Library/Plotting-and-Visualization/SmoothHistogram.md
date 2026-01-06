# SmoothHistogram

`SmoothHistogram[{x1, x2, ...}]` plots a smooth kernel histogram for the PDF of the values.

## Examples

Smooth histogram of data:

```wolfram
data = RandomVariate[NormalDistribution[], 500];
SmoothHistogram[data]
```

Multiple datasets:

```wolfram
SmoothHistogram[{RandomVariate[NormalDistribution[0, 1], 500],
                 RandomVariate[NormalDistribution[2, 1], 500]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SmoothHistogram.html) for more details.*