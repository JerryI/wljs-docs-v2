---
title: SingularValueDecomposition
---

`SingularValueDecomposition[m]` gives the singular value decomposition for a numerical matrix m as a list `{u, σ, v}`, where m = u.σ.ConjugateTranspose[v].

## Examples

SVD of a matrix:

```wolfram
{u, s, v} = SingularValueDecomposition[{{1, 2}, {3, 4}}]
(* {{{-0.404, -0.915}, {-0.915, 0.404}}, {{5.46, 0}, {0, 0.366}}, ...} *)
```

Reconstruct the original matrix:

```wolfram
u . s . ConjugateTranspose[v]
(* {{1., 2.}, {3., 4.}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SingularValueDecomposition.html) for more details.