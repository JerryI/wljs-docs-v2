---
title: FindDistributionParameters
---

`FindDistributionParameters[data,dist]` finds the parameter estimates for the distribution dist from data.

`FindDistributionParameters[data,dist,{{p,p0},{q,q0},…}]` finds the parameters p, q, … with starting values p0, q0, ….

## Examples

```wolfram
(* Fit a normal distribution to data *)
data = RandomVariate[NormalDistribution[5, 2], 100];
FindDistributionParameters[data, NormalDistribution[m, s]]

(* Fit with starting values *)
FindDistributionParameters[data, 
  NormalDistribution[m, s], {{m, 4}, {s, 1}}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindDistributionParameters.html) for more details.