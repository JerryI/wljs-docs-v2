# PolynomialExpressionQ

`PolynomialExpressionQ[expr, x]` gives `True` if expr is structurally a polynomial expression in x, and `False` otherwise.

- `PolynomialExpressionQ[expr, {x, y, ...}]` gives `True` if expr is structurally a polynomial expression in x, y, ..., and `False` otherwise.
- `PolynomialExpressionQ[expr, {x, y, ...}, test]` gives `True` if expr is structurally a polynomial expression in x, y, ... with coefficients satisfying test.

## Examples

Test if an expression is a polynomial in x:

```wolfram
PolynomialExpressionQ[x^2 + 3x + 1, x]
(* True *)
```

Non-polynomial expressions:

```wolfram
PolynomialExpressionQ[Sin[x] + x^2, x]
(* False *)
```

Test for integer coefficients:

```wolfram
PolynomialExpressionQ[2x^2 + 3x + 1, {x}, IntegerQ]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolynomialExpressionQ.html) for more details.*