---
title: PolynomialReduce
---

`PolynomialReduce[poly, {poly1, poly2, ...}, {x1, x2, ...}]` yields a list representing a reduction of poly in terms of the polyi. The list has the form `{{a1, a2, ...}, b}`, where b is minimal and `a1*poly1 + a2*poly2 + ... + b` is exactly poly.

## Examples

Reduce a polynomial:

```wolfram
PolynomialReduce[x^2 + y^2, {x + y, x - y}, {x, y}]
(* {{x/2 - y/2, x/2 + y/2}, 0} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolynomialReduce.html) for more details.*