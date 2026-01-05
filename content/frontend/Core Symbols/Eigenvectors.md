# Eigenvectors

`Eigenvectors[m]` gives a list of the eigenvectors of the square matrix m.

## Examples

Eigenvectors of a matrix:

```wolfram
Eigenvectors[{{1, 2}, {3, 4}}]
(* {{2/(3 - Sqrt[33]), 1}, {2/(3 + Sqrt[33]), 1}} *)
```

Numerical eigenvectors:

```wolfram
Eigenvectors[{{1., 2.}, {3., 4.}}] // Normalize /@ # &
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Eigenvectors.html) for more details.*