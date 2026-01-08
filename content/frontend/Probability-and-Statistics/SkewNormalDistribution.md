---
title: SkewNormalDistribution
---

`SkewNormalDistribution[μ, σ, α]` represents a skew-normal distribution with shape parameter α, location parameter μ, and scale parameter σ.

## Examples

Create a skew-normal distribution:

```wolfram
dist = SkewNormalDistribution[0, 1, 2]
```

Plot the probability density:

```wolfram
Plot[PDF[SkewNormalDistribution[0, 1, 2], x], {x, -4, 4}]
```

Generate random samples:

```wolfram
RandomVariate[SkewNormalDistribution[0, 1, 5], 10]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SkewNormalDistribution.html) for more details.