---
title: MaxStableDistribution
---

`MaxStableDistribution[μ, σ, ξ]` represents a generalized maximum extreme value distribution with location parameter μ, scale parameter σ, and shape parameter ξ.

## Examples

Create a max stable distribution:
```wolfram
dist = MaxStableDistribution[0, 1, 0.5];
PDF[dist, x]
```

Sample from the distribution:
```wolfram
RandomVariate[MaxStableDistribution[0, 1, 0], 10]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxStableDistribution.html) for more details.*