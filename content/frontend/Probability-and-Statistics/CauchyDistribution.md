---
title: CauchyDistribution
---

`CauchyDistribution[a, b]` represents a Cauchy distribution with location parameter a and scale parameter b.

`CauchyDistribution[]` represents a Cauchy distribution with location parameter 0 and scale parameter 1.

## Examples

Create and sample from a Cauchy distribution:

```wolfram
dist = CauchyDistribution[0, 1];
RandomVariate[dist, 5]
(* {-0.234, 1.85, -0.523, 0.771, -3.14} *)
```

Plot the probability density function:

```wolfram
Plot[PDF[CauchyDistribution[0, 1], x], {x, -5, 5}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CauchyDistribution.html) for more details.