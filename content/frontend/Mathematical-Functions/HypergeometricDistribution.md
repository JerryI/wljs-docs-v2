---
title: HypergeometricDistribution
---

`HypergeometricDistribution[n, nsucc, ntot]` represents a hypergeometric distribution for n draws from a population of ntot with nsucc successes.

## Examples

Create a hypergeometric distribution:

```wolfram
dist = HypergeometricDistribution[10, 30, 100];
Mean[dist]
(* 3 *)
```

Probability of exactly 5 successes:

```wolfram
PDF[HypergeometricDistribution[10, 30, 100], 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HypergeometricDistribution.html) for more details.