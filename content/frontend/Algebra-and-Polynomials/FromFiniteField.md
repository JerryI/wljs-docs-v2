---
title: FromFiniteField
---

`FromFiniteField[a, ff]` converts the element a of the prime subfield of the finite field ff to an integer.

`FromFiniteField[expr, ff, t]` converts the elements of the finite field ff in the coefficients of the rational expression expr to polynomials in t, where t represents the field generator.

## Examples

```wolfram
ff = FiniteField[5];
FromFiniteField[ff[3], ff]
(* 3 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FromFiniteField.html) for more details.