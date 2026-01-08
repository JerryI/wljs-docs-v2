---
title: StandardDeviation
---

`StandardDeviation[data]` gives the sample standard deviation estimate of the elements in `data`. `StandardDeviation[dist]` gives the standard deviation of the distribution `dist`.

## Examples

Compute standard deviation of a list:

```wolfram
StandardDeviation[{1, 2, 3, 4, 5}]
(* Sqrt[5/2] *)

(* Standard deviation of a distribution *)
StandardDeviation[NormalDistribution[0, 2]]
(* 2 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StandardDeviation.html) for more details.