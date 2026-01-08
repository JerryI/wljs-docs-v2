---
title: AntisymmetricMatrixQ
---

`AntisymmetricMatrixQ[m]` gives `True` if m is explicitly antisymmetric, and `False` otherwise.

## Examples

Test if a matrix is antisymmetric:

```wolfram
AntisymmetricMatrixQ[{{0, 1}, {-1, 0}}]
(* True *)
```

A symmetric matrix is not antisymmetric:

```wolfram
AntisymmetricMatrixQ[{{1, 2}, {2, 1}}]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AntisymmetricMatrixQ.html) for more details.