---
title: TriangularDistribution
---

`TriangularDistribution[{min, max}]` represents a symmetric triangular statistical distribution giving values between min and max.

- `TriangularDistribution[]` represents a symmetric triangular statistical distribution giving values between 0 and 1.
- `TriangularDistribution[{min, max}, c]` represents a triangular distribution with mode at c.

## Examples

```wolfram
dist = TriangularDistribution[{0, 10}]
```

```wolfram
Mean[dist]
```

```wolfram
RandomVariate[TriangularDistribution[], 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TriangularDistribution.html) for more details.