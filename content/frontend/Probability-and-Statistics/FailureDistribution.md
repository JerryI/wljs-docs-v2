---
title: FailureDistribution
---

`FailureDistribution[bexpr,{{x1,dist1},{x2,dist2},…}]` represents the failure distribution for a system with events xi having reliability distribution disti where the top event occurs when the Boolean expression bexpr is True and event xi has occurred when xi is True.

## Examples

```wolfram
(* Series system: fails if any component fails *)
FailureDistribution[x1 || x2, {
  {x1, ExponentialDistribution[1/100]},
  {x2, ExponentialDistribution[1/200]}
}]

(* Parallel system: fails only if all fail *)
FailureDistribution[x1 && x2, {
  {x1, WeibullDistribution[2, 100]},
  {x2, WeibullDistribution[2, 150]}
}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FailureDistribution.html) for more details.