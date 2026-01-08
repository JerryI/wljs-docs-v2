---
title: RationalExpressionQ
---

`RationalExpressionQ[expr,x]` gives True if expr is structurally a rational expression in x, and False otherwise.

`RationalExpressionQ[expr,{x,y,…}]` gives True if expr is structurally a rational expression in x,y,…, and False otherwise.

`RationalExpressionQ[expr,{x,y,…},test]` gives True if expr is structurally a rational expression in x,y,… with coefficients satisfying test, and False otherwise.

## Examples

Test if an expression is rational in x:

```wolfram
RationalExpressionQ[(x^2 + 1)/(x - 1), x]
(* True *)
```

```wolfram
RationalExpressionQ[Sin[x]/x, x]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RationalExpressionQ.html) for more details.