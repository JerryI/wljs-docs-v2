---
title: D
---

`D[f, x]` gives the partial derivative of f with respect to x.

`D[f, {x, n}]` gives the nth derivative.

## Examples

First derivative:

```wolfram
D[x^3, x]
(* 3 x^2 *)
```

Second derivative:

```wolfram
D[Sin[x], {x, 2}]
(* -Sin[x] *)
```

Partial derivative:

```wolfram
D[x^2 y, x]
(* 2 x y *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/D.html) for more details.*