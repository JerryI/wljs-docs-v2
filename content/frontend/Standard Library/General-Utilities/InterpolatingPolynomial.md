---
title: InterpolatingPolynomial
---

`InterpolatingPolynomial[{{x1, f1}, {x2, f2}, ...}, x]` constructs a polynomial in x passing through the given points.

`InterpolatingPolynomial[{f1, f2, ...}, x]` uses successive integer x values.

## Examples

Through three points:

```wolfram
InterpolatingPolynomial[{{0, 1}, {1, 3}, {2, 7}}, x]
(* 1 + x + x^2 *)
```

Simplified:

```wolfram
Expand[%]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InterpolatingPolynomial.html) for more details.*