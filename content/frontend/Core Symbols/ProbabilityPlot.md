# ProbabilityPlot

`ProbabilityPlot[list]` generates a plot of the CDF of list against the CDF of a normal distribution.

## Examples

P-P plot:

```wolfram
data = RandomVariate[NormalDistribution[], 100];
ProbabilityPlot[data]
```

Compare to specific distribution:

```wolfram
ProbabilityPlot[data, UniformDistribution[]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ProbabilityPlot.html) for more details.*