---
title: DifferenceQuotient
---

`DifferenceQuotient[f, {x, h}]` gives the difference quotient (f(x+h)-f(x))/h.

`DifferenceQuotient[f, {x, n, h}]` gives a multiple difference quotient with step h.

`DifferenceQuotient[f, {x1, n1, h1}, {x2, n2, h2}, ...]` computes the partial difference quotient.

## Examples

Simple difference quotient:

```wolfram
DifferenceQuotient[f[x], {x, h}]
(* (f[h + x] - f[x])/h *)
```

Second-order quotient:

```wolfram
DifferenceQuotient[x^2, {x, 2, h}]
(* 2 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DifferenceQuotient.html) for more details.