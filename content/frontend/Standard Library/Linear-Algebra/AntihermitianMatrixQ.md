# AntihermitianMatrixQ

`AntihermitianMatrixQ[m]` gives `True` if m is explicitly antihermitian, and `False` otherwise.

## Examples

Test if a matrix is antihermitian:

```wolfram
AntihermitianMatrixQ[{{0, I}, {-I, 0}}]
(* True *)
```

Non-antihermitian matrix:

```wolfram
AntihermitianMatrixQ[{{1, 2}, {3, 4}}]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AntihermitianMatrixQ.html) for more details.*