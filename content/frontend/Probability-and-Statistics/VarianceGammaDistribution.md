---
title: VarianceGammaDistribution
---

`VarianceGammaDistribution[λ, α, β, μ]` represents a variance-gamma distribution with location parameter μ, skewness parameter β, and shape parameters λ and α.

## Examples

Create distribution:

```wolfram
dist = VarianceGammaDistribution[1, 2, 0, 0];
```

Plot PDF:

```wolfram
Plot[PDF[VarianceGammaDistribution[1, 2, 0, 0], x], {x, -5, 5}]
```

Random samples:

```wolfram
RandomVariate[VarianceGammaDistribution[1, 2, 0.5, 0], 10]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VarianceGammaDistribution.html) for more details.