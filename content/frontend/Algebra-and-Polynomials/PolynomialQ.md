---
title: PolynomialQ
---

`PolynomialQ[expr, var]` yields `True` if expr is a polynomial in var, and `False` otherwise.

`PolynomialQ[expr, {var1, …}]` tests whether expr is a polynomial in the vari.

## Examples

Test for polynomial:

```wolfram
PolynomialQ[x^2 + 2x + 1, x]
(* True *)
```

Not a polynomial:

```wolfram
PolynomialQ[1/x + x, x]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolynomialQ.html) for more details.