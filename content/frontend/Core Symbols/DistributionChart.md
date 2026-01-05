# DistributionChart

`DistributionChart[{data1, data2, ...}]` makes a distribution chart with a distribution symbol for each dataset.

## Examples

Distribution chart of multiple datasets:

```wolfram
DistributionChart[{
  RandomVariate[NormalDistribution[0, 1], 100],
  RandomVariate[NormalDistribution[2, 1], 100],
  RandomVariate[NormalDistribution[1, 2], 100]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DistributionChart.html) for more details.*