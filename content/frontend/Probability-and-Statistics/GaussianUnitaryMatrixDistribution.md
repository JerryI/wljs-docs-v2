---
title: GaussianUnitaryMatrixDistribution
---

`GaussianUnitaryMatrixDistribution[σ, n]` represents a Gaussian unitary matrix distribution with matrix dimensions {n, n} and scale parameter σ.

- `GaussianUnitaryMatrixDistribution[n]` represents a Gaussian unitary matrix distribution with unit scale parameter.

## Examples

Create a Gaussian unitary matrix distribution:

```wolfram
dist = GaussianUnitaryMatrixDistribution[3]
```

Sample a random unitary matrix:

```wolfram
RandomVariate[GaussianUnitaryMatrixDistribution[3]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GaussianUnitaryMatrixDistribution.html) for more details.