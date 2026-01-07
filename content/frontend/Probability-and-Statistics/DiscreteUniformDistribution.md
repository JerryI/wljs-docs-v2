---
title: DiscreteUniformDistribution
---

`DiscreteUniformDistribution[{imin, imax}]` represents a discrete uniform distribution over integers from imin to imax.

`DiscreteUniformDistribution[{{imin, imax}, {jmin, jmax}, ...}]` represents a multivariate discrete uniform distribution.

## Examples

Roll a die:

```wolfram
RandomVariate[DiscreteUniformDistribution[{1, 6}], 10]
```

Mean of uniform distribution:

```wolfram
Mean[DiscreteUniformDistribution[{1, 100}]]
(* 101/2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiscreteUniformDistribution.html) for more details.*