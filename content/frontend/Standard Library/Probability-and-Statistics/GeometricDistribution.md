---
title: GeometricDistribution
---

`GeometricDistribution[p]` represents a geometric distribution with probability parameter p.

## Examples

Generate random samples:

```wolfram
RandomVariate[GeometricDistribution[0.3], 5]
(* {1, 4, 0, 2, 1} *)
```

Mean of the distribution:

```wolfram
Mean[GeometricDistribution[p]]
(* (1 - p)/p *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeometricDistribution.html) for more details.*