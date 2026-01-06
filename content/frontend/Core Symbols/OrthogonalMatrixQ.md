# OrthogonalMatrixQ

`OrthogonalMatrixQ[m]` gives `True` if m is an explicitly orthogonal matrix, and `False` otherwise.

## Examples

Test for orthogonal matrix:

```wolfram
OrthogonalMatrixQ[{{1, 0}, {0, 1}}]
(* True *)
```

Rotation matrix:

```wolfram
OrthogonalMatrixQ[{{Cos[t], -Sin[t]}, {Sin[t], Cos[t]}}]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OrthogonalMatrixQ.html) for more details.*