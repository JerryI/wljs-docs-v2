# FromCoefficientRules

`FromCoefficientRules[list, {x1, x2, ...}]` constructs a polynomial from a list of rules for exponent vectors and coefficients.

## Examples

Construct a polynomial from coefficient rules:

```wolfram
FromCoefficientRules[{{2, 1} -> 3, {0, 0} -> 1}, {x, y}]
```

Create a multivariate polynomial:

```wolfram
FromCoefficientRules[{{1, 0} -> a, {0, 1} -> b, {0, 0} -> c}, {x, y}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FromCoefficientRules.html) for more details.*