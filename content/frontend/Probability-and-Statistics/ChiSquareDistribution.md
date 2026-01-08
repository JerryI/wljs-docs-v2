---
title: ChiSquareDistribution
---

`ChiSquareDistribution[ν]` represents a chi-square distribution with ν degrees of freedom.

## Examples

Create a chi-square distribution and compute statistics:

```wolfram
Mean[ChiSquareDistribution[5]]
(* 5 *)
```

Sample from a chi-square distribution:

```wolfram
RandomVariate[ChiSquareDistribution[10], 5]
(* {8.2, 11.5, 9.7, 12.1, 7.3} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChiSquareDistribution.html) for more details.