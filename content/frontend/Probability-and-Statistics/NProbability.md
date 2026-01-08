---
title: NProbability
---

`NProbability[pred,x\[Distributed]dist]` gives the numerical probability for an event that satisfies the predicate pred under the assumption that x follows the probability distribution dist.

`NProbability[pred,{x1,x2,…}\[Distributed]dist]` gives the numerical probability that an event satisfies pred under the assumption that {x1,x2,…} follows the multivariate distribution dist.

`NProbability[pred,{x1\[Distributed]dist1,x2\[Distributed]dist2,…}]` gives the numerical probability that an event satisfies pred under the assumption that x1, x2, … are independent and follow the distributions dist1, dist2, ….

`NProbability[pred1\[Conditioned]pred2,…]` gives the numerical conditional probability of pred1 given pred2.

## Examples

Compute probability numerically:

```wolfram
NProbability[x > 1, x \[Distributed] NormalDistribution[]]
(* 0.158655 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NProbability.html) for more details.