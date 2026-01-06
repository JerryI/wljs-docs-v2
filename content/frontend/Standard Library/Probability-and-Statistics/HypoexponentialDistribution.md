---
title: HypoexponentialDistribution
---

`HypoexponentialDistribution[{λ1,…,λm}]` represents an m-phase hypoexponential distribution with rates λ1, …, λm.

## Examples

Create a hypoexponential distribution:

```wolfram
dist = HypoexponentialDistribution[{1, 2, 3}]
(* HypoexponentialDistribution[{1, 2, 3}] *)
```

Calculate the mean:

```wolfram
Mean[HypoexponentialDistribution[{1, 2, 3}]]
(* 11/6 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HypoexponentialDistribution.html) for more details.*