---
title: MixtureDistribution
---

`MixtureDistribution[{w1, ..., wn}, {dist1, ..., distn}]` represents a mixture distribution whose CDF is given as a sum of the CDFs of the component distributions disti, each with weight wi.

## Examples

```wolfram
dist = MixtureDistribution[{1, 2}, {NormalDistribution[0, 1], NormalDistribution[5, 1]}]
RandomVariate[dist, 5]
(* samples from the mixture *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MixtureDistribution.html) for more details.