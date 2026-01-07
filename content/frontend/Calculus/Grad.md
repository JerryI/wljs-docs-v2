---
title: Grad
---

`Grad[f, {x1, ..., xn}]` gives the gradient (∂f/∂x1, ..., ∂f/∂xn).

## Examples

Gradient of a scalar field:

```wolfram
Grad[x^2 + y^2 + z^2, {x, y, z}]
(* {2x, 2y, 2z} *)
```

2D gradient:

```wolfram
Grad[x*y, {x, y}]
(* {y, x} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Grad.html) for more details.*