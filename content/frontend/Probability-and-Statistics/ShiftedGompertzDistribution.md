---
title: ShiftedGompertzDistribution
---

`ShiftedGompertzDistribution[λ, ξ]` represents a shifted Gompertz distribution with scale parameter λ and shape parameter ξ.

## Examples

Create distribution:

```wolfram
dist = ShiftedGompertzDistribution[1, 2];
```

Plot PDF:

```wolfram
Plot[PDF[ShiftedGompertzDistribution[1, 2], x], {x, 0, 5}]
```

Mean and variance:

```wolfram
{Mean[dist], Variance[dist]}
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ShiftedGompertzDistribution.html) for more details.