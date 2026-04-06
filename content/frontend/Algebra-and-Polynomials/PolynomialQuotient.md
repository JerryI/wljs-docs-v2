---
title: PolynomialQuotient
---

`PolynomialQuotient[p, q, x]` gives the quotient of p and q, treated as polynomials in x, with any remainder dropped.

## Examples

Polynomial division:

```wolfram
PolynomialQuotient[x^3 + 2x^2 + x + 1, x + 1, x]
(* x^2 + x *)
```

Divide higher degree polynomial:

```wolfram
PolynomialQuotient[x^4 - 1, x^2 - 1, x]
(* x^2 + 1 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolynomialQuotient.html) for more details.