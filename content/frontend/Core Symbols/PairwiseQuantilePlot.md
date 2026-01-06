# PairwiseQuantilePlot

`PairwiseQuantilePlot[{{y11, ..., y1n}, ..., {ym1, ..., ymn}}]` creates an array of quantile plots by plotting the quantiles of the columns against each other.

## Examples

```wolfram
PairwiseQuantilePlot[RandomReal[1, {100, 3}]]
```

```wolfram
PairwiseQuantilePlot[{RandomVariate[NormalDistribution[], 50], RandomVariate[UniformDistribution[], 50]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PairwiseQuantilePlot.html) for more details.*