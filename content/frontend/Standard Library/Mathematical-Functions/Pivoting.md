---
title: Pivoting
---

`Pivoting` is an option to certain matrix decomposition functions. With `Pivoting -> False`, no pivoting is done. With `Pivoting -> True`, column pivoting is carried out and the list of matrices returned is augmented by the appropriate permutation matrix.

## Examples

```wolfram
LUDecomposition[{{1, 2}, {3, 4}}, Pivoting -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Pivoting.html) for more details.*