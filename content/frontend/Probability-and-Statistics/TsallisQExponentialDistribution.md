---
title: TsallisQExponentialDistribution
---

`TsallisQExponentialDistribution[λ, q]` represents a Tsallis q-exponential distribution with scale inversely proportional to parameter λ.

## Examples

Create distribution:

```wolfram
dist = TsallisQExponentialDistribution[1, 1.5];
```

Plot PDF:

```wolfram
Plot[PDF[TsallisQExponentialDistribution[1, 1.5], x], {x, 0, 5}]
```

Random samples:

```wolfram
RandomVariate[TsallisQExponentialDistribution[2, 1.3], 10]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TsallisQExponentialDistribution.html) for more details.*