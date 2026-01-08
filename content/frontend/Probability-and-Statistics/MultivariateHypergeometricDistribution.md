---
title: MultivariateHypergeometricDistribution
---

`MultivariateHypergeometricDistribution[n, {m1, m2, ..., mk}]` represents a multivariate hypergeometric distribution with n draws without replacement from a collection containing mi objects of type i.

## Examples

Create a multivariate hypergeometric distribution:
```wolfram
dist = MultivariateHypergeometricDistribution[5, {10, 15, 20}];
Mean[dist]
```

Sample from the distribution:
```wolfram
RandomVariate[MultivariateHypergeometricDistribution[10, {5, 5, 5}], 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MultivariateHypergeometricDistribution.html) for more details.