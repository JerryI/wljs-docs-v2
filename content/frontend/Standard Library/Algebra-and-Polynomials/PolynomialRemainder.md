# PolynomialRemainder

`PolynomialRemainder[p, q, x]` gives the remainder from dividing p by q, treated as polynomials in x.

## Examples

Get remainder after division:

```wolfram
PolynomialRemainder[x^3 + 2x^2 + x + 1, x + 1, x]
(* 1 *)
```

Another example:

```wolfram
PolynomialRemainder[x^4 + x^2, x^2 + x + 1, x]
(* 1 + x *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolynomialRemainder.html) for more details.*