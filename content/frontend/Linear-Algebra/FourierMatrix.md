---
title: FourierMatrix
---

`FourierMatrix[n]` returns an n×n Fourier matrix.

## Examples

Create a 4×4 Fourier matrix:

```wolfram
FourierMatrix[4]
```

Display the matrix:

```wolfram
FourierMatrix[4] // MatrixForm
```

Verify orthogonality:

```wolfram
FourierMatrix[4] . ConjugateTranspose[FourierMatrix[4]] // Chop
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FourierMatrix.html) for more details.