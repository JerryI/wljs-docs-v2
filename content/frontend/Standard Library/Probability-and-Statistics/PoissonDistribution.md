---
title: PoissonDistribution
---

`PoissonDistribution[μ]` represents a Poisson distribution with mean μ.

## Examples

Random samples:

```wolfram
RandomVariate[PoissonDistribution[5], 10]
(* {4, 6, 5, 3, 7, 5, 4, 6, 5, 3} *)
```

Probability mass function:

```wolfram
PDF[PoissonDistribution[3], 2]
(* 9 E^-3 / 2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PoissonDistribution.html) for more details.*