---
title: ArrayFlatten
---

`ArrayFlatten[{{m11, m12, ...}, {m21, m22, ...}, ...}]` creates a single flattened matrix from a matrix of matrices mij.

`ArrayFlatten[a, r]` flattens out r pairs of levels in the array a.

## Examples

Flatten a block matrix:

```wolfram
ArrayFlatten[{{{{1, 2}}, {{3, 4}}}, {{{5, 6}}, {{7, 8}}}}]
(* {{1, 2, 3, 4}, {5, 6, 7, 8}} *)
```

Create a block diagonal matrix:

```wolfram
ArrayFlatten[{{IdentityMatrix[2], 0}, {0, IdentityMatrix[3]}}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArrayFlatten.html) for more details.