---
title: DEigenvalues
---

`DEigenvalues[ℒ[u[x, y, ...]], u, {x, y, ...} ∈ Ω, n]` gives the n smallest magnitude eigenvalues for the linear differential operator ℒ over the region Ω.

`DEigenvalues[eqns, u, t, {x, y, ...} ∈ Ω, n]` gives the eigenvalues for solutions u of the time-dependent differential equations eqns.

## Examples

Find eigenvalues of a differential operator:

```wolfram
DEigenvalues[-Laplacian[u[x, y], {x, y}], u, {x, y} ∈ Disk[], 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DEigenvalues.html) for more details.