---
title: GaussianOrthogonalMatrixDistribution
---

`GaussianOrthogonalMatrixDistribution[σ, n]` represents a Gaussian orthogonal matrix distribution with n×n dimensions and scale parameter σ.

`GaussianOrthogonalMatrixDistribution[n]` uses unit scale parameter.

## Examples

Generate a random orthogonal matrix:

```wolfram
RandomVariate[GaussianOrthogonalMatrixDistribution[3]]
```

With scale parameter:

```wolfram
RandomVariate[GaussianOrthogonalMatrixDistribution[2, 4]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GaussianOrthogonalMatrixDistribution.html) for more details.