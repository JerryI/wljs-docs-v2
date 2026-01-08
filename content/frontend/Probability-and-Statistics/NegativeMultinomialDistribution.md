---
title: NegativeMultinomialDistribution
---

`NegativeMultinomialDistribution[n, p]` represents a negative multinomial distribution with parameter n and failure probability vector p.

## Examples

```wolfram
dist = NegativeMultinomialDistribution[5, {0.2, 0.3, 0.1}];
Mean[dist]
```

```wolfram
RandomVariate[NegativeMultinomialDistribution[3, {0.4, 0.3}], 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NegativeMultinomialDistribution.html) for more details.