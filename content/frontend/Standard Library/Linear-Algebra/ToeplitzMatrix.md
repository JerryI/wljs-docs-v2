---
title: ToeplitzMatrix
---

`ToeplitzMatrix[n]` gives the n×n Toeplitz matrix with first row and first column being successive integers.

- `ToeplitzMatrix[{c1, c2, ..., cn}]` gives the Toeplitz matrix whose first column consists of entries c1, c2, ....
- `ToeplitzMatrix[{c1, c2, ..., cm}, {r1, r2, ..., rn}]` gives the Toeplitz matrix with entries ci down the first column, and ri across the first row.

## Examples

Create a 4×4 Toeplitz matrix:

```wolfram
ToeplitzMatrix[4] // MatrixForm
```

Specify the first column:

```wolfram
ToeplitzMatrix[{a, b, c, d}] // MatrixForm
```

Specify both first column and first row:

```wolfram
ToeplitzMatrix[{1, 2, 3}, {1, 4, 5, 6}] // MatrixForm
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ToeplitzMatrix.html) for more details.*