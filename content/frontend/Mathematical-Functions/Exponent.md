---
title: Exponent
---

`Exponent[expr, form]` gives the maximum power with which form appears in the expanded form of expr.

## Examples

Find highest power of x:

```wolfram
Exponent[x^3 + 2x^2 + 5x + 1, x]
(* 3 *)
```

Exponent in a product:

```wolfram
Exponent[x^2 * (1 + x)^3, x]
(* 5 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Exponent.html) for more details.