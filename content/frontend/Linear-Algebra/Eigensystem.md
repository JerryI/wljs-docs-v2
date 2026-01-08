---
title: Eigensystem
---

`Eigensystem[m]` gives a list {values, vectors} of the eigenvalues and eigenvectors of the square matrix m.

`Eigensystem[{m, a}]` gives the generalized eigenvalues and eigenvectors of m with respect to a.

`Eigensystem[m, k]` gives the eigenvalues and eigenvectors for the first k eigenvalues.

## Examples

Eigenvalues and eigenvectors:

```wolfram
Eigensystem[{{1, 2}, {3, 4}}]
(* eigenvalues and corresponding eigenvectors *)
```

First k eigenvalues:

```wolfram
Eigensystem[HilbertMatrix[5], 2]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Eigensystem.html) for more details.