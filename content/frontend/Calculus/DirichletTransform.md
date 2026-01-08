---
title: DirichletTransform
---

`DirichletTransform[expr, n, s]` gives the Dirichlet transform of expr with respect to n.

## Examples

Transform of a constant:

```wolfram
DirichletTransform[1, n, s]
(* Zeta[s] *)
```

Transform of n^k:

```wolfram
DirichletTransform[n^2, n, s]
(* Zeta[s - 2] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DirichletTransform.html) for more details.