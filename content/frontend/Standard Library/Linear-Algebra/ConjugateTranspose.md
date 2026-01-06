# ConjugateTranspose

`ConjugateTranspose[m]` gives the conjugate transpose (Hermitian transpose) of a matrix m.

## Examples

Conjugate transpose of a complex matrix:

```wolfram
ConjugateTranspose[{{1, 2 + I}, {3, 4 I}}]
(* {{1, 3}, {2 - I, -4 I}} *)
```

For real matrices, same as transpose:

```wolfram
ConjugateTranspose[{{1, 2}, {3, 4}}]
(* {{1, 3}, {2, 4}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConjugateTranspose.html) for more details.*