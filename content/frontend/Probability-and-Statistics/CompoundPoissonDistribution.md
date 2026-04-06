---
title: CompoundPoissonDistribution
---

`CompoundPoissonDistribution[λ,dist]` represents a compound Poisson distribution with rate parameter λ and jump size distribution dist.

## Examples

Create a compound Poisson distribution:

```wolfram
dist = CompoundPoissonDistribution[3, ExponentialDistribution[1]]
```

Compute the mean:

```wolfram
Mean[CompoundPoissonDistribution[3, ExponentialDistribution[1]]]
(* 3 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CompoundPoissonDistribution.html) for more details.