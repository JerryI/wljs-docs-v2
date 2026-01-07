---
title: MatrixExp
---

`MatrixExp[m]` gives the matrix exponential of m.

## Examples

Matrix exponential:

```wolfram
MatrixExp[{{0, t}, {-t, 0}}]
(* {{Cos[t], Sin[t]}, {-Sin[t], Cos[t]}} *)
```

Diagonal matrix:

```wolfram
MatrixExp[{{1, 0}, {0, 2}}]
(* {{E, 0}, {0, E^2}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MatrixExp.html) for more details.*