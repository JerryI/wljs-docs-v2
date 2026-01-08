---
title: GroebnerBasis
---

`GroebnerBasis[{poly1,poly2,…},{x1,x2,…}]` gives a list of polynomials that form a Gröbner basis for the set of polynomials polyi.

`GroebnerBasis[{poly1,poly2,…},{x1,x2,…},{y1,y2,…}]` finds a Gröbner basis in which the yi have been eliminated.

## Examples

Find a Gröbner basis for two polynomials:

```wolfram
GroebnerBasis[{x^2 + y^2 - 1, x - y}, {x, y}]
(* {-1 + 2 y^2, -y + x} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GroebnerBasis.html) for more details.