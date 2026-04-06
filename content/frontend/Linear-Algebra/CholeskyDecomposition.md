---
title: CholeskyDecomposition
---

`CholeskyDecomposition[m]` gives the Cholesky decomposition of a positive definite matrix m.

## Examples

Cholesky decomposition:

```wolfram
CholeskyDecomposition[{{4, 2}, {2, 5}}]
(* {{2, 1}, {0, 2}} *)
```

Verify L.L^T = M:

```wolfram
l = CholeskyDecomposition[{{4, 12}, {12, 37}}];
Transpose[l] . l
(* {{4, 12}, {12, 37}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CholeskyDecomposition.html) for more details.