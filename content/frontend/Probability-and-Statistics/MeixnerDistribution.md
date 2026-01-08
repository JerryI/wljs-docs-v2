---
title: MeixnerDistribution
---

`MeixnerDistribution[a, b, m, d]` represents a Meixner distribution with location parameter m, scale parameter a, skew parameter b, and shape parameter d.

## Examples

```wolfram
dist = MeixnerDistribution[1, 0.5, 0, 1];
Mean[dist]
```

```wolfram
RandomVariate[MeixnerDistribution[1, 0, 0, 1], 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MeixnerDistribution.html) for more details.