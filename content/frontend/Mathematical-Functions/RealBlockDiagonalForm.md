---
title: RealBlockDiagonalForm
---

`RealBlockDiagonalForm` is an option for `SchurDecomposition` and related functions which specifies whether 2×2 blocks of real values should be used on matrix diagonals in place of complex values.

## Examples

Compute Schur decomposition with real block diagonal form:

```wolfram
SchurDecomposition[{{1, 2}, {-2, 1}}, RealBlockDiagonalForm -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RealBlockDiagonalForm.html) for more details.*