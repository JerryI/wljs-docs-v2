---
title: PearsonDistribution
---

`PearsonDistribution[a1, a0, b2, b1, b0]` represents a distribution of the Pearson family with parameters a1, a0, b2, b1, and b0.

- `PearsonDistribution[type, a1, a0, b2, b1, b0]` represents a Pearson distribution of given type.

## Examples

```wolfram
dist = PearsonDistribution[1, 0, 1, 0, 1];
PDF[dist, x]
```

```wolfram
RandomVariate[PearsonDistribution[0, 0, 1, 0, 1], 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PearsonDistribution.html) for more details.