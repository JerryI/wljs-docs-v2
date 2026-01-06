---
title: LaplaceDistribution
---

`LaplaceDistribution[μ, β]` represents a Laplace double-exponential distribution with mean μ and scale parameter β.

`LaplaceDistribution[]` represents a Laplace double-exponential distribution with mean 0 and scale parameter 1.

## Examples

Define a Laplace distribution:

```wolfram
dist = LaplaceDistribution[0, 1]
```

Compute the mean and variance:

```wolfram
{Mean[dist], Variance[dist]}
(* {0, 2} *)
```

Plot the PDF:

```wolfram
Plot[PDF[LaplaceDistribution[0, 1], x], {x, -5, 5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LaplaceDistribution.html) for more details.*