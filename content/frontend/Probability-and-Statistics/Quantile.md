---
title: Quantile
---

`Quantile[data, p]` gives the `p`th quantile of `data`. `Quantile[data, {p1, p2, ...}]` gives a list of quantiles.

## Examples

Compute quantiles of a list:

```wolfram
(* Median is the 0.5 quantile *)
Quantile[{1, 2, 3, 4, 5}, 0.5]
(* 3 *)

(* Multiple quantiles *)
Quantile[{1, 2, 3, 4, 5}, {0.25, 0.5, 0.75}]
(* {2, 3, 4} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Quantile.html) for more details.