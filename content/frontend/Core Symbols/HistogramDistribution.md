# HistogramDistribution

`HistogramDistribution[{x1, x2, …}]` represents the probability distribution corresponding to a histogram of the data values `xi`.

- `HistogramDistribution[{{x1, y1, …}, {x2, y2, …}, …}]` represents a multivariate histogram distribution based on data values `{xi, yi, …}`.
- `HistogramDistribution[…, bspec]` represents a histogram distribution with bins specified by `bspec`.

## Examples

```wolfram
HistogramDistribution[RandomReal[1, 100]]
```

```wolfram
PDF[HistogramDistribution[{1, 2, 2, 3, 3, 3}], x]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HistogramDistribution.html) for more details.*