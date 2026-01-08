---
title: PowerSymmetricPolynomial
---

`PowerSymmetricPolynomial[r]` represents a formal power symmetric polynomial with exponent r.

- `PowerSymmetricPolynomial[{r1, r2, ...}]` represents a multivariate formal power symmetric polynomial with exponents r1, r2, ....
- `PowerSymmetricPolynomial[rspec, data]` gives the power symmetric polynomial in data.

## Examples

Create a power symmetric polynomial:

```wolfram
PowerSymmetricPolynomial[2]
```

Evaluate a power symmetric polynomial on data:

```wolfram
PowerSymmetricPolynomial[2, {a, b, c}]
(* a^2 + b^2 + c^2 *)
```

Multivariate power symmetric polynomial:

```wolfram
PowerSymmetricPolynomial[{1, 2}, {a, b, c}]
(* (a + b + c)(a^2 + b^2 + c^2) *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PowerSymmetricPolynomial.html) for more details.