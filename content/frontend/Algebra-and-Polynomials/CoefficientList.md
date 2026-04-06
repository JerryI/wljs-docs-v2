---
title: CoefficientList
---

`CoefficientList[poly, var]` gives a list of coefficients of powers of var in poly, starting with power 0.

## Examples

Get all coefficients:

```wolfram
CoefficientList[3x^3 + 2x^2 + x + 5, x]
(* {5, 1, 2, 3} *)
```

For a quadratic:

```wolfram
CoefficientList[x^2 - 3x + 2, x]
(* {2, -3, 1} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CoefficientList.html) for more details.