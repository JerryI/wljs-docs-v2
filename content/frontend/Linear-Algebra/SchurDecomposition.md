---
title: SchurDecomposition
---

`SchurDecomposition[m]` yields the Schur decomposition for a numerical matrix m, given as a list `{q, t}` where q is orthonormal and t is block upper-triangular.

## Examples

Schur decomposition:

```wolfram
{q, t} = SchurDecomposition[{{1, 2}, {0, 3}}]
(* {{{1, 0}, {0, 1}}, {{1, 2}, {0, 3}}} *)
```

Reconstruct original:

```wolfram
q . t . ConjugateTranspose[q]
(* {{1., 2.}, {0., 3.}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SchurDecomposition.html) for more details.