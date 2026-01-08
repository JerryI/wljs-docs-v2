---
title: MatrixTDistribution
---

`MatrixTDistribution[Σrow, Σcol, ν]` represents zero mean matrix t distribution with row covariance matrix `Σrow`, column covariance matrix `Σcol`, and degrees of freedom parameter `ν`.

- `MatrixTDistribution[μ, Σrow, Σcol, ν]` represents matrix t distribution with mean matrix `μ`.

## Examples

```wolfram
MatrixTDistribution[IdentityMatrix[2], IdentityMatrix[3], 5]
```

```wolfram
RandomVariate[MatrixTDistribution[{{1, 0}, {0, 1}}, {{1}}, 10]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MatrixTDistribution.html) for more details.