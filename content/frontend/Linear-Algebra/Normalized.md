---
title: Normalized
---

`Normalized` is an option that determines whether to test if matrix columns or rows are normalized.

## Examples

Check if a matrix is orthogonal without requiring normalized columns:

```wolfram
OrthogonalMatrixQ[{{2, 0}, {0, 2}}, Normalized -> False]
(* True *)
```

With the default `Normalized -> True`, columns must have unit length:

```wolfram
OrthogonalMatrixQ[{{2, 0}, {0, 2}}]
(* False *)
```

A proper orthogonal matrix with normalized columns:

```wolfram
OrthogonalMatrixQ[{{1, 0}, {0, 1}}]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Normalized.html) for more details.*