---
title: CopulaDistribution
---

`CopulaDistribution[ker, {dist1, dist2, ...}]` represents a copula distribution with kernel distribution ker and marginal distributions dist1, dist2, ....

## Examples

Create a Gaussian copula:

```wolfram
CopulaDistribution["Gaussian", {NormalDistribution[], ExponentialDistribution[1]}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CopulaDistribution.html) for more details.