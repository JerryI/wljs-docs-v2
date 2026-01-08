---
title: OrthogonalMatrix
---

`OrthogonalMatrix[omat]` converts the orthogonal matrix omat to a structured array.

## Examples

Create an orthogonal matrix from a rotation:
```wolfram
OrthogonalMatrix[RotationMatrix[Pi/4]]
```

Verify orthogonality:
```wolfram
om = OrthogonalMatrix[RotationMatrix[Pi/3]];
om . Transpose[om] // Chop
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OrthogonalMatrix.html) for more details.