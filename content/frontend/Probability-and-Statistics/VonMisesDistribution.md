---
title: VonMisesDistribution
---

`VonMisesDistribution[μ, κ]` represents a von Mises distribution with mean μ and concentration κ.

## Examples

Create a von Mises distribution:

```wolfram
dist = VonMisesDistribution[0, 2]
```

Plot the probability density:

```wolfram
Plot[PDF[VonMisesDistribution[0, 2], x], {x, -Pi, Pi}]
```

Generate random samples:

```wolfram
RandomVariate[VonMisesDistribution[Pi/2, 5], 10]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VonMisesDistribution.html) for more details.