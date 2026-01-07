---
title: FisherZDistribution
---

`FisherZDistribution[n, m]` represents a Fisher z distribution with n numerator and m denominator degrees of freedom.

## Examples

Create a Fisher z distribution:

```wolfram
dist = FisherZDistribution[5, 10]
```

Compute the mean:

```wolfram
Mean[FisherZDistribution[5, 10]]
```

Plot the probability density function:

```wolfram
Plot[PDF[FisherZDistribution[5, 10], x], {x, -3, 3}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FisherZDistribution.html) for more details.*