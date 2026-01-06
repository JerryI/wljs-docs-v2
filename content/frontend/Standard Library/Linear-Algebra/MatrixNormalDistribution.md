---
title: MatrixNormalDistribution
---

`MatrixNormalDistribution[Σrow, Σcol]` represents zero mean matrix normal distribution with row covariance matrix Σrow and column covariance matrix Σcol.

`MatrixNormalDistribution[μ, Σrow, Σcol]` represents matrix normal distribution with mean matrix μ.

## Examples

Create a matrix normal distribution:

```wolfram
dist = MatrixNormalDistribution[{{1, 0}, {0, 1}}, {{1, 0}, {0, 1}}]
```

Generate a random sample:

```wolfram
RandomVariate[MatrixNormalDistribution[{{1, 0.5}, {0.5, 1}}, {{1, 0}, {0, 1}}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MatrixNormalDistribution.html) for more details.*