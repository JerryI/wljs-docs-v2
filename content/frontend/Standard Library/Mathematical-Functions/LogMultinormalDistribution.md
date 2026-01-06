# LogMultinormalDistribution

`LogMultinormalDistribution[μ, Σ]` represents a log-multinormal distribution with parameters μ and Σ.

## Examples

```wolfram
dist = LogMultinormalDistribution[{0, 0}, {{1, 0.5}, {0.5, 1}}];
RandomVariate[dist, 5]
```

```wolfram
Mean[LogMultinormalDistribution[{1, 2}, IdentityMatrix[2]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LogMultinormalDistribution.html) for more details.*