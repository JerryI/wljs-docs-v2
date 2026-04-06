---
title: MultinormalDistribution
---

`MultinormalDistribution[Σ]` represents a multivariate normal distribution with zero mean and covariance matrix Σ.

`MultinormalDistribution[μ, Σ]` represents a multivariate normal (Gaussian) distribution with mean vector μ and covariance matrix Σ.

## Examples

Define a bivariate normal:

```wolfram
dist = MultinormalDistribution[{0, 0}, {{1, 0.5}, {0.5, 1}}]
```

Sample from it:

```wolfram
RandomVariate[MultinormalDistribution[{1, 2}, IdentityMatrix[2]], 5]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MultinormalDistribution.html) for more details.