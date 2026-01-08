---
title: NoncentralBetaDistribution
---

`NoncentralBetaDistribution[α, β, δ]` represents a noncentral beta distribution with shape parameters α, β and noncentrality parameter δ.

## Examples

Create a noncentral beta distribution:
```wolfram
dist = NoncentralBetaDistribution[2, 3, 1];
PDF[dist, x]
```

Sample from the distribution:
```wolfram
RandomVariate[NoncentralBetaDistribution[2, 5, 2], 10]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NoncentralBetaDistribution.html) for more details.