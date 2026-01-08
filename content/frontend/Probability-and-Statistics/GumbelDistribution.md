---
title: GumbelDistribution
---

`GumbelDistribution[α, β]` represents a Gumbel distribution with location parameter α and scale parameter β.

`GumbelDistribution[]` represents a standard Gumbel distribution with location 0 and scale 1.

## Examples

Generate random samples:

```wolfram
RandomVariate[GumbelDistribution[0, 1], 5]
```

Mean of the distribution:

```wolfram
Mean[GumbelDistribution[0, 1]]
(* EulerGamma *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GumbelDistribution.html) for more details.