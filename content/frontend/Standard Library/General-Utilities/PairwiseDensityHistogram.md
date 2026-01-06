# PairwiseDensityHistogram

`PairwiseDensityHistogram[{{y11, ..., y1n}, ..., {ym1, ..., ymn}}]` creates an array of density histograms by plotting the data columns against each other in pairs.

- `PairwiseDensityHistogram[data, bspec]` plots density histograms with bins specified by bspec.

## Examples

```wolfram
PairwiseDensityHistogram[RandomReal[1, {100, 3}]]
```

```wolfram
PairwiseDensityHistogram[RandomVariate[MultinormalDistribution[{0, 0, 0}, IdentityMatrix[3]], 500]]
```

```wolfram
PairwiseDensityHistogram[data, 20]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PairwiseDensityHistogram.html) for more details.*