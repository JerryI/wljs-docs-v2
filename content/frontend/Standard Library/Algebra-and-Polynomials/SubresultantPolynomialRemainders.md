---
title: SubresultantPolynomialRemainders
---

`SubresultantPolynomialRemainders[poly1, poly2, var]` gives the subresultant polynomial remainder sequence of the polynomials poly1 and poly2 with respect to the variable var.

- `SubresultantPolynomialRemainders[poly1, poly2, var, Modulus -> p]` computes the sequence modulo the prime p.

## Examples

```wolfram
SubresultantPolynomialRemainders[x^3 + x + 1, x^2 + 1, x]
```

```wolfram
SubresultantPolynomialRemainders[x^4 - 1, x^2 - 1, x]
```

```wolfram
SubresultantPolynomialRemainders[x^3 + 2 x + 1, x^2 + x, x, Modulus -> 5]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SubresultantPolynomialRemainders.html) for more details.*