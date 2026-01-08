---
title: NDEigenvalues
---

`NDEigenvalues[ℒ[u[x, y, ...]], u, {x, y, ...} ∈ Ω, n]` gives the n smallest magnitude eigenvalues for the linear differential operator ℒ over the region Ω.

- `NDEigenvalues[{ℒ1[u, v, ...], ℒ2[u, v, ...], ...}, {u, v, ...}, {x, y, ...} ∈ Ω, n]` gives eigenvalues for the coupled differential operators over the region Ω.
- `NDEigenvalues[eqns, {u, ...}, t, {x, y, ...} ∈ Ω, n]` gives the eigenvalues in the spatial variables for solutions of the coupled time-dependent differential equations eqns.

## Examples

```wolfram
NDEigenvalues[{-Laplacian[u[x, y], {x, y}], DirichletCondition[u[x, y] == 0, True]}, 
  u, {x, y} \[Element] Disk[], 5]
```

```wolfram
NDEigenvalues[-u''[x], u, {x, 0, Pi}, 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NDEigenvalues.html) for more details.*