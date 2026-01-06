# PolynomialExtendedGCD

`PolynomialExtendedGCD[poly1, poly2, x]` gives the extended GCD of poly1 and poly2 treated as univariate polynomials in x.

- `PolynomialExtendedGCD[poly1, poly2, x, Modulus -> p]` gives the extended GCD over the integers modulo the prime p.

## Examples

Compute the extended GCD of two polynomials:
```wolfram
PolynomialExtendedGCD[x^2 - 1, x^3 - 1, x]
```

With modular arithmetic:
```wolfram
PolynomialExtendedGCD[x^2 + 1, x^3 + 1, x, Modulus -> 7]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolynomialExtendedGCD.html) for more details.*