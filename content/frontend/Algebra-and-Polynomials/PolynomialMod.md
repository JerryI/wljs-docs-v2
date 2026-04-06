---
title: PolynomialMod
---

`PolynomialMod[poly, m]` gives the polynomial poly reduced modulo m.

`PolynomialMod[poly, {m1, m2, …}]` reduces modulo all of the mi.

## Examples

Reduce coefficients modulo:

```wolfram
PolynomialMod[5 x^2 + 7 x + 3, 3]
(* 2 x^2 + x *)
```

Multiple moduli:

```wolfram
PolynomialMod[12 x^2 + 15 x + 9, {2, 3}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolynomialMod.html) for more details.