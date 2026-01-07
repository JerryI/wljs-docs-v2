---
title: HyperbolicDistribution
---

`HyperbolicDistribution[α, β, δ, μ]` represents a hyperbolic distribution with location parameter μ, scale parameter δ, shape parameter α, and skewness parameter β.

- `HyperbolicDistribution[λ, α, β, δ, μ]` represents a generalized hyperbolic distribution with shape parameter λ.

## Examples

```wolfram
dist = HyperbolicDistribution[2, 0, 1, 0];
PDF[dist, x]
```

```wolfram
RandomVariate[HyperbolicDistribution[1, 0.5, 1, 0], 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HyperbolicDistribution.html) for more details.*