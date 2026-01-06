---
title: Hermitian
---

`Hermitian[{1, 2}]` represents the symmetry of a Hermitian matrix.

## Examples

Define a Hermitian matrix:

```wolfram
m = {{1, 2 + I}, {2 - I, 3}};
HermitianMatrixQ[m]
(* True *)
```

Use Hermitian symmetry in tensor operations:

```wolfram
TensorSymmetry[{{a, b}, {Conjugate[b], c}}, Hermitian[{1, 2}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Hermitian.html) for more details.*