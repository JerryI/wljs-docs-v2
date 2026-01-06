---
title: HermitianMatrixQ
---

`HermitianMatrixQ[m]` gives `True` if m is explicitly Hermitian (equal to its conjugate transpose), and `False` otherwise.

## Examples

Test for Hermitian matrix:

```wolfram
HermitianMatrixQ[{{1, I}, {-I, 2}}]
(* True *)
```

Non-Hermitian matrix:

```wolfram
HermitianMatrixQ[{{1, 2}, {3, 4}}]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HermitianMatrixQ.html) for more details.*