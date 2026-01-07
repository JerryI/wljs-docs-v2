---
title: KroneckerProduct
---

`KroneckerProduct[m1, m2, ...]` constructs the Kronecker product of the arrays m_i.

## Examples

Kronecker product of two matrices:

```wolfram
KroneckerProduct[{{1, 2}, {3, 4}}, {{0, 1}, {1, 0}}] // MatrixForm
```

Identity and matrix:

```wolfram
KroneckerProduct[IdentityMatrix[2], {{a, b}, {c, d}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KroneckerProduct.html) for more details.*