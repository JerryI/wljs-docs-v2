# QuantilePlot

`QuantilePlot[list]` generates a plot of quantiles of list against the quantiles of a normal distribution.

## Examples

Q-Q plot against normal:

```wolfram
data = RandomVariate[NormalDistribution[], 100];
QuantilePlot[data]
```

Compare to specific distribution:

```wolfram
QuantilePlot[data, ExponentialDistribution[1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QuantilePlot.html) for more details.*