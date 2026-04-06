---
title: CoefficientArrays
---

`CoefficientArrays[polys, vars]` gives the arrays of coefficients of the variables vars in the polynomials polys.

## Examples

```wolfram
CoefficientArrays[{a x + b y, c x + d y}, {x, y}]
(* {{0, 0}, {{a, b}, {c, d}}} *)
```

```wolfram
CoefficientArrays[x^2 + 2 x + 1, x]
(* {1, {2}, {{1}}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CoefficientArrays.html) for more details.