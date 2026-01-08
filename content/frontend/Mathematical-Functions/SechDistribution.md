---
title: SechDistribution
---

`SechDistribution[μ, σ]` represents the hyperbolic secant distribution with location parameter μ and scale parameter σ.

- `SechDistribution[]` represents the hyperbolic secant distribution with location parameter 0 and scale parameter 1.

The hyperbolic secant distribution is a symmetric, continuous probability distribution.

## Examples

```wolfram
dist = SechDistribution[0, 1];
PDF[dist, x]
```

```wolfram
Mean[SechDistribution[2, 3]]
```

```wolfram
RandomVariate[SechDistribution[], 5]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SechDistribution.html) for more details.