---
title: NDEigensystem
---

`NDEigensystem[ℒ[u[x, y, ...]], u, {x, y, ...} ∈ Ω, n]` gives the n smallest magnitude eigenvalues and eigenfunctions for the linear differential operator ℒ over the region Ω.

## Examples

Eigenvalues of Laplacian on a disk:

```wolfram
{vals, funs} = NDEigensystem[{-Laplacian[u[x, y], {x, y}], 
  DirichletCondition[u[x, y] == 0, True]}, u, {x, y} ∈ Disk[], 3]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NDEigensystem.html) for more details.