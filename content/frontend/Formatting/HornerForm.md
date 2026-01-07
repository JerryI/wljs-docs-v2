---
title: HornerForm
---

`HornerForm[poly]` puts the polynomial poly in Horner form for efficient numerical evaluation.

`HornerForm[poly, vars]` uses the specified variables.

## Examples

Convert polynomial to Horner form:

```wolfram
HornerForm[1 + x + x^2 + x^3]
(* 1 + x (1 + x (1 + x)) *)
```

Multivariate:

```wolfram
HornerForm[a + b x + c x^2, x]
(* a + x (b + c x) *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HornerForm.html) for more details.*