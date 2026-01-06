# PolynomialQuotientRemainder

`PolynomialQuotientRemainder[p, q, x]` gives a list of the quotient and remainder of p and q, treated as polynomials in x.

## Examples

Get quotient and remainder:

```wolfram
PolynomialQuotientRemainder[x^3 + 2x^2 + x + 1, x + 1, x]
(* {x^2 + x, 1} *)
```

Verify:

```wolfram
{quot, rem} = PolynomialQuotientRemainder[x^4 - 1, x^2 - 1, x]
(* {x^2 + 1, 0} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolynomialQuotientRemainder.html) for more details.*