---
title: MinMax
---

`MinMax[list]` gives the list `{Min[list], Max[list]}`.

`MinMax[list, δ]` gives `{Min[list] - δ, Max[list] + δ}`.

## Examples

Get minimum and maximum:

```wolfram
MinMax[{3, 1, 4, 1, 5, 9, 2, 6}]
(* {1, 9} *)
```

With padding:

```wolfram
MinMax[{1, 5, 3}, 2]
(* {-1, 7} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MinMax.html) for more details.*