---
title: QuantityDistribution
---

`QuantityDistribution[dist, unit]` represents a distribution dist of quantities with unit specified by unit.

- `QuantityDistribution[dist, {unit1, unit2, ...}]` represents a multivariate distribution with units {unit1, unit2, …}.

## Examples

```wolfram
dist = QuantityDistribution[NormalDistribution[0, 1], "Meters"];
RandomVariate[dist]
```

```wolfram
Mean[QuantityDistribution[UniformDistribution[{0, 10}], "Seconds"]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QuantityDistribution.html) for more details.