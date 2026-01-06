# DEigensystem

`DEigensystem[ℒ[u[x, y, ...]], u, {x, y, ...} ∈ Ω, n]` gives the n smallest magnitude eigenvalues and eigenfunctions for the linear differential operator ℒ over the region Ω.

`DEigensystem[eqns, u, t, {x, y, ...} ∈ Ω, n]` gives the eigenvalues and eigenfunctions for solutions u of the time-dependent differential equations eqns.

## Examples

Find eigenvalues and eigenfunctions:

```wolfram
DEigensystem[-Laplacian[u[x, y], {x, y}], u, {x, y} ∈ Rectangle[], 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DEigensystem.html) for more details.*