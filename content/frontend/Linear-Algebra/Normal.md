---
title: Normal
---

`Normal[expr]` converts expr to a normal expression from a variety of special forms, such as `SeriesData`, `SparseArray`, etc.

## Examples

Convert series to polynomial:

```wolfram
Normal[Series[Sin[x], {x, 0, 5}]]
(* x - x^3/6 + x^5/120 *)
```

Convert sparse array:

```wolfram
Normal[SparseArray[{1 -> a, 3 -> b}, 4]]
(* {a, 0, b, 0} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Normal.html) for more details.