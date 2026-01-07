---
title: PolynomialGCD
---

`PolynomialGCD[poly1, poly2, ...]` gives the greatest common divisor of the polynomials.

## Examples

Find GCD of two polynomials:

```wolfram
PolynomialGCD[x^2 - 1, x^3 - x]
(* x^2 - 1 *)
```

Polynomials with common factor:

```wolfram
PolynomialGCD[(x + 1)^2 * (x - 1), (x + 1) * (x - 2)]
(* 1 + x *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolynomialGCD.html) for more details.*