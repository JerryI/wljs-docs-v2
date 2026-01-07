---
title: MarginalDistribution
---

`MarginalDistribution[dist,k]` represents a univariate marginal distribution of the kth coordinate from the multivariate distribution dist.

`MarginalDistribution[dist,{k1,k2,...}]` represents a multivariate marginal distribution of the `{k1,k2,...}` coordinates.

## Examples

```wolfram
dist = MultinormalDistribution[{0, 0}, {{1, 0.5}, {0.5, 1}}];
MarginalDistribution[dist, 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MarginalDistribution.html) for more details.*