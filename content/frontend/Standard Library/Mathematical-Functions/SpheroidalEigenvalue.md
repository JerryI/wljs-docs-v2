# SpheroidalEigenvalue

`SpheroidalEigenvalue[n, m, γ]` gives the spheroidal eigenvalue with degree n and order m.

Spheroidal eigenvalues appear in the solution of the Helmholtz equation in spheroidal coordinates.

## Examples

```wolfram
SpheroidalEigenvalue[2, 0, 1]
```

```wolfram
N[SpheroidalEigenvalue[3, 1, 0.5]]
```

```wolfram
Table[SpheroidalEigenvalue[n, 0, 1], {n, 0, 4}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpheroidalEigenvalue.html) for more details.*