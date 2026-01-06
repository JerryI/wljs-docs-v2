# PolynomialLCM

`PolynomialLCM[poly1, poly2, …]` gives the least common multiple of the polynomials.

`PolynomialLCM[poly1, poly2, …, Modulus -> p]` evaluates the LCM modulo the prime p.

## Examples

LCM of polynomials:

```wolfram
PolynomialLCM[x^2 - 1, x^2 - x]
(* -x + x^2 + x^3 - x^4 *)
```

Simplified:

```wolfram
Factor[PolynomialLCM[x^2 - 1, x^2 - x]]
(* x (1 + x) (-1 + x)^2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolynomialLCM.html) for more details.*