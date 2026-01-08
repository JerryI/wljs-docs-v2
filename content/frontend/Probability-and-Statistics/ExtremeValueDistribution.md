---
title: ExtremeValueDistribution
---

`ExtremeValueDistribution[α, β]` represents an extreme value distribution with location parameter α and scale parameter β.

`ExtremeValueDistribution[]` represents an extreme value distribution with location 0 and scale 1.

## Examples

Generate random samples:

```wolfram
RandomVariate[ExtremeValueDistribution[0, 1], 5]
```

Compute the mean:

```wolfram
Mean[ExtremeValueDistribution[0, 1]]
(* EulerGamma *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExtremeValueDistribution.html) for more details.