# QRDecomposition

`QRDecomposition[m]` yields the QR decomposition for a numerical matrix m. The result is a list `{q, r}`, where q is unitary and r is upper-triangular.

## Examples

QR decomposition:

```wolfram
{q, r} = QRDecomposition[{{1, 2}, {3, 4}}]
(* {{{-0.316, -0.949}, {-0.949, 0.316}}, {{-3.16, -4.43}, {0, -0.632}}} *)
```

Reconstruct:

```wolfram
ConjugateTranspose[q] . r
(* {{1., 2.}, {3., 4.}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QRDecomposition.html) for more details.*