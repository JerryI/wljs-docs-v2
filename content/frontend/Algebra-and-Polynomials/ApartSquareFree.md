---
title: ApartSquareFree
---

`ApartSquareFree[expr]` rewrites a rational expression as a sum of terms whose denominators are powers of square-free polynomials.

`ApartSquareFree[expr, var]` treats all variables other than var as constants.

## Examples

Decompose a rational expression:

```wolfram
ApartSquareFree[1/((x - 1)^2 (x + 1)), x]
```

Compare with standard Apart:

```wolfram
ApartSquareFree[x/((x^2 - 1)^2), x]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ApartSquareFree.html) for more details.