---
title: Quartiles
---

`Quartiles[data]` gives the {Q1, Q2, Q3} quantile estimates of the elements in data.

`Quartiles[dist]` gives the quartiles of the distribution dist.

## Examples

Get quartiles:

```wolfram
Quartiles[{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}]
(* {3, 11/2, 8} *)
```

For a distribution:

```wolfram
Quartiles[NormalDistribution[0, 1]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Quartiles.html) for more details.