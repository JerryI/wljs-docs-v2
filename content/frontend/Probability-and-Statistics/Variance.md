---
title: Variance
---

`Variance[data]` gives the sample variance estimate of the elements in `data`. `Variance[dist]` gives the variance of the distribution `dist`.

## Examples

Compute variance of a list:

```wolfram
Variance[{1, 2, 3, 4, 5}]
(* 5/2 *)

(* Variance of a distribution *)
Variance[NormalDistribution[0, 2]]
(* 4 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Variance.html) for more details.*