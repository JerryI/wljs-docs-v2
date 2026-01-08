---
title: SymmetricMatrix
---

`SymmetricMatrix[smat]` converts the symmetric matrix smat to a structured array.

## Examples

Create symmetric matrix:

```wolfram
m = {{1, 2, 3}, {2, 4, 5}, {3, 5, 6}};
SymmetricMatrix[m]
```

Check structure:

```wolfram
StructuredArray[SymmetricMatrix, 3]
```

Normal form:

```wolfram
Normal[SymmetricMatrix[m]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SymmetricMatrix.html) for more details.