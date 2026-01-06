---
title: RandomArrayLayer
---

`RandomArrayLayer[dist]` represents a net layer that has no input and produces a random array from the univariate distribution dist.

- `RandomArrayLayer[dfunc]` uses the univariate distribution dfunc[input] for each input value.

## Examples

```wolfram
RandomArrayLayer[NormalDistribution[]]
```

```wolfram
RandomArrayLayer[UniformDistribution[], "Output" -> {3, 3}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomArrayLayer.html) for more details.*