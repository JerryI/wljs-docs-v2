---
title: BernsteinBasis
---

`BernsteinBasis[d, n, x]` represents the nth Bernstein basis function of degree d at x.

## Examples

Evaluate Bernstein basis:

```wolfram
BernsteinBasis[3, 1, 0.5]
(* 0.375 *)
```

Plot basis functions:

```wolfram
Plot[Table[BernsteinBasis[3, n, x], {n, 0, 3}], {x, 0, 1}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BernsteinBasis.html) for more details.