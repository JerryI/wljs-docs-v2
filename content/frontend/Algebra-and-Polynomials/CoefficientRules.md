---
title: CoefficientRules
---

`CoefficientRules[poly, {x1, x2, ...}]` gives exponent vectors and coefficients for monomials in poly.

## Examples

Get exponent-coefficient rules:

```wolfram
CoefficientRules[x^2 + 3x*y + y^2, {x, y}]
(* {{2, 0} -> 1, {1, 1} -> 3, {0, 2} -> 1} *)
```

Single variable:

```wolfram
CoefficientRules[2x^3 + 5x + 1, {x}]
(* {{3} -> 2, {1} -> 5, {0} -> 1} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CoefficientRules.html) for more details.