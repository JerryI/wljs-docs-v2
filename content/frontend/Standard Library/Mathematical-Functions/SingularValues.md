---
title: SingularValues
---

`SingularValues[m]` gives the singular value decomposition for a numerical matrix m. The result is a list {u, w, v}, where w is the list of singular values, and m can be written as ConjugateTranspose[u].DiagonalMatrix[w].v.

## Examples

```wolfram
SingularValues[{{1, 2}, {3, 4}}]
```

```wolfram
{u, w, v} = SingularValues[RandomReal[1, {3, 3}]];
w
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SingularValues.html) for more details.*