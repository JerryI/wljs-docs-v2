---
title: HankelMatrix
---

`HankelMatrix[n]` gives the n×n Hankel matrix with first row and first column being successive integers.

- `HankelMatrix[{c1, c2, ..., cn}]` gives the Hankel matrix whose first column consists of entries c1, c2, ....
- `HankelMatrix[{c1, c2, ..., cm}, {r1, r2, ..., rn}]` gives the Hankel matrix with entries ci down the first column, and ri across the last row.

## Examples

Create a 4×4 Hankel matrix:
```wolfram
HankelMatrix[4]
```

Create a Hankel matrix with custom first column:
```wolfram
HankelMatrix[{a, b, c, d}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HankelMatrix.html) for more details.*