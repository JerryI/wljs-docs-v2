---
title: LeastSquares
---

`LeastSquares[m, b]` finds the least-squares solution `x` that minimizes $||m \cdot x - b||$.

## Examples

Solve overdetermined systems:

```wolfram
m = {{1, 1}, {1, 2}, {1, 3}}
b = {2, 3, 5}

LeastSquares[m, b]
(* {1/3, 3/2} *)

(* Verify: m.x is closest to b *)
m . %
(* {11/6, 10/3, 29/6} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LeastSquares.html) for more details.*