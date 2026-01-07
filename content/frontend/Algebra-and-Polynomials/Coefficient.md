---
title: Coefficient
---

`Coefficient[expr, form]` gives the coefficient of form in the polynomial expr. `Coefficient[expr, form, n]` gives the coefficient of form^n in expr.

## Examples

Get coefficient of x^2:

```wolfram
Coefficient[3x^3 + 5x^2 + 2x + 1, x, 2]
(* 5 *)
```

Coefficient of a linear term:

```wolfram
Coefficient[a*x + b*y + c, x]
(* a *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Coefficient.html) for more details.*