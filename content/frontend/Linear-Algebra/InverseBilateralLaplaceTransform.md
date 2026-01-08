---
title: InverseBilateralLaplaceTransform
---

`InverseBilateralLaplaceTransform[expr,s,t]` gives the inverse bilateral Laplace transform of expr.

`InverseBilateralLaplaceTransform[expr,{s1,s2,…,sn},{t1,t2,…,tn}]` gives the multidimensional inverse bilateral Laplace transform of expr.

## Examples

Compute the inverse bilateral Laplace transform:

```wolfram
InverseBilateralLaplaceTransform[1/s^2, s, t]
(* t HeavisideTheta[t] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseBilateralLaplaceTransform.html) for more details.